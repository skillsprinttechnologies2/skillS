import { createHash } from "node:crypto";
import { Resend } from "resend";

export const ROLE_OPTIONS = [
  "Founder / Owner", "CEO / MD", "CTO / CIO", "IT Head",
  "Operations Head", "Finance Head", "Other",
];

export const INTEREST_OPTIONS = [
  "BI / Power BI Dashboards", "Data Analytics", "AI & Predictive Analytics",
  "Data Engineering", "Cloud Data Solutions", "Business Process Automation",
  "Data Security & Governance", "Performance Monitoring", "Cost Optimization",
  "Not sure — I need consultation",
];

const ALLOWED_KEYS = new Set([
  "fullName", "companyName", "role", "email", "phone", "location",
  "interests", "requirement", "website",
]);
const limits = { fullName: 100, companyName: 120, role: 40, email: 254, phone: 24, location: 120, requirement: 3000, website: 200 };
const requests = new Map();
const duplicates = new Map();
const WINDOW_MS = 15 * 60 * 1000;
const DUPLICATE_WINDOW_MS = 60 * 1000;
const MAX_REQUEST_BYTES = 20 * 1024;

const cleanText = (value, max, multiline = false) => {
  if (typeof value !== "string") return null;
  const withoutControlCharacters = Array.from(value)
    .filter((character) => character === "\n" || character === "\t" || (character.charCodeAt(0) >= 32 && character.charCodeAt(0) !== 127))
    .join("");
  const cleaned = withoutControlCharacters
    .trim()
    .replace(multiline ? /[ \t]+/g : /\s+/g, " ");
  return cleaned.length <= max ? cleaned : null;
};

const escapeHtml = (value) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[character]);

const normalizePhone = (value) => {
  const cleaned = cleanText(value, limits.phone);
  if (!cleaned || !/^\+?[\d\s().-]+$/.test(cleaned)) return null;
  const digits = cleaned.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) return null;
  return `${cleaned.startsWith("+") ? "+" : ""}${digits}`;
};

const normalizeEmail = (value) => {
  const email = cleanText(value, limits.email)?.toLowerCase();
  return email && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? email : null;
};

export function validateSubmission(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return { error: "Invalid request data." };
  if (Object.keys(body).some((key) => !ALLOWED_KEYS.has(key))) return { error: "Unexpected request data." };
  if (body.website !== "") return { spam: true };

  const data = {
    fullName: cleanText(body.fullName, limits.fullName),
    companyName: cleanText(body.companyName, limits.companyName),
    role: cleanText(body.role ?? "", limits.role),
    email: normalizeEmail(body.email),
    phone: normalizePhone(body.phone),
    location: cleanText(body.location ?? "", limits.location),
    requirement: cleanText(body.requirement, limits.requirement, true),
  };

  if (!data.fullName || !data.companyName || !data.email || !data.phone || !data.requirement || data.requirement.length < 10) {
    return { error: "Please provide valid values for all required fields." };
  }
  if (data.role && !ROLE_OPTIONS.includes(data.role)) return { error: "Invalid designation selected." };
  if (!Array.isArray(body.interests) || body.interests.length < 1 || body.interests.length > INTEREST_OPTIONS.length) {
    return { error: "Select at least one valid area of interest." };
  }
  if (body.interests.some((item) => typeof item !== "string" || !INTEREST_OPTIONS.includes(item)) || new Set(body.interests).size !== body.interests.length) {
    return { error: "Invalid area of interest selected." };
  }
  return { data: { ...data, interests: body.interests } };
}

function isAllowedOrigin(origin, host) {
  if (!origin) return true;
  try {
    const normalizedOrigin = new URL(origin).origin;
    const originHost = new URL(normalizedOrigin).host;
    if (originHost === host) return true;
    const allowed = [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      ...(process.env.CONTACT_ALLOWED_ORIGINS || "").split(","),
    ].map((item) => item.trim()).filter(Boolean).map((item) => {
      try { return new URL(item).origin; } catch { return ""; }
    });
    return allowed.includes(normalizedOrigin);
  } catch { return false; }
}

function checkRateLimit(ip, fingerprint) {
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  requests.set(ip, recent);
  if (recent.length >= 5) {
    return { message: "Too many requests. Please try again later.", retryAfter: Math.max(1, Math.ceil((WINDOW_MS - (now - recent[0])) / 1000)) };
  }
  const previous = duplicates.get(fingerprint);
  if (previous && now - previous < DUPLICATE_WINDOW_MS) {
    return { message: "This enquiry was already submitted. Please wait before trying again.", retryAfter: Math.max(1, Math.ceil((DUPLICATE_WINDOW_MS - (now - previous)) / 1000)) };
  }
  return null;
}

function recordSuccessfulSubmission(ip, fingerprint) {
  const now = Date.now();
  requests.set(ip, [...(requests.get(ip) || []), now]);
  duplicates.set(fingerprint, now);
}

function requestIsTooLarge(headers, body) {
  const declaredLength = Number(headers["content-length"] || 0);
  if (Number.isFinite(declaredLength) && declaredLength > MAX_REQUEST_BYTES) return true;
  try { return Buffer.byteLength(JSON.stringify(body ?? null), "utf8") > MAX_REQUEST_BYTES; } catch { return true; }
}

function trustedEmailConfiguration() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const plainEmail = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;
  if (!apiKey || !to || !plainEmail.test(to)) {
    const error = new Error("Contact email configuration is invalid");
    error.code = "CONTACT_CONFIG_INVALID";
    throw error;
  }
  return { apiKey, to };
}

function buildEmail(data) {
  const row = (label, value) => `<tr><td style="padding:8px 12px;color:#6b7280;width:180px;vertical-align:top"><strong>${label}</strong></td><td style="padding:8px 12px;color:#111827">${escapeHtml(value || "Not provided")}</td></tr>`;
  return `<div style="font-family:Arial,sans-serif;max-width:720px;margin:auto;color:#111827"><h2 style="background:#374b82;color:white;padding:20px;margin:0">New Business Enquiry</h2><table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb">${row("Full Name", data.fullName)}${row("Company", data.companyName)}${row("Designation / Role", data.role)}${row("Business Email", data.email)}${row("Mobile / WhatsApp", data.phone)}${row("City / Location", data.location)}${row("Interested In", data.interests.join(", "))}</table><div style="padding:20px;background:#f9fafb;border:1px solid #e5e7eb;border-top:0"><strong>Business Requirement</strong><p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(data.requirement)}</p></div></div>`;
}

async function sendContactEmail(data) {
  const config = trustedEmailConfiguration();
  const resend = new Resend(config.apiKey);
  const { error } = await resend.emails.send({
    from: "SkillSprint Website <onboarding@resend.dev>",
    to: [config.to],
    replyTo: data.email,
    subject: "New Business Enquiry",
    html: buildEmail(data),
  });
  if (error) {
    const providerError = new Error("Email provider rejected the request");
    providerError.code = "EMAIL_PROVIDER_ERROR";
    providerError.provider = {
      name: String(error.name || "ResendError").slice(0, 80),
      status: Number(error.statusCode || error.status || 0) || undefined,
      message: String(error.message || "Email request rejected")
        .replace(/[\r\n\t]+/g, " ")
        .slice(0, 300),
      code: String(error.code || "UNKNOWN").slice(0, 80),
    };
    throw providerError;
  }
}

export async function processContactRequest({ method, headers = {}, body, ip = "unknown", sendEmail = sendContactEmail }) {
  if (method !== "POST") return { status: 405, body: { success: false, message: "Method not allowed." }, allow: "POST" };
  const contentType = headers["content-type"] || "";
  if (!contentType.toLowerCase().startsWith("application/json")) return { status: 415, body: { success: false, message: "Content-Type must be application/json." } };
  if (!isAllowedOrigin(headers.origin, headers.host)) return { status: 403, body: { success: false, message: "Origin not allowed." } };
  if (requestIsTooLarge(headers, body)) return { status: 413, body: { success: false, message: "Request is too large." } };

  const result = validateSubmission(body);
  if (result.spam) return { status: 400, body: { success: false, message: "Invalid request data." } };
  if (result.error) return { status: 400, body: { success: false, message: result.error } };

  const fingerprint = createHash("sha256").update(`${ip}:${JSON.stringify(result.data)}`).digest("hex");
  const rateError = checkRateLimit(ip, fingerprint);
  if (rateError) return { status: 429, body: { success: false, message: rateError.message }, retryAfter: rateError.retryAfter };

  await sendEmail(result.data);
  recordSuccessfulSubmission(ip, fingerprint);
  return { status: 200, body: { success: true } };
}
