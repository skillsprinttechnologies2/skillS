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
    const originHost = new URL(origin).host;
    if (originHost === host) return true;
    const allowed = (process.env.CONTACT_ALLOWED_ORIGINS || "").split(",").map((item) => item.trim()).filter(Boolean);
    return allowed.includes(origin);
  } catch { return false; }
}

function enforceRateLimit(ip, fingerprint) {
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= 5) return "Too many requests. Please try again later.";
  requests.set(ip, [...recent, now]);
  const previous = duplicates.get(fingerprint);
  if (previous && now - previous < 60_000) return "This enquiry was already submitted. Please wait before trying again.";
  duplicates.set(fingerprint, now);
  return null;
}

function buildEmail(data) {
  const row = (label, value) => `<tr><td style="padding:8px 12px;color:#6b7280;width:180px;vertical-align:top"><strong>${label}</strong></td><td style="padding:8px 12px;color:#111827">${escapeHtml(value || "Not provided")}</td></tr>`;
  return `<div style="font-family:Arial,sans-serif;max-width:720px;margin:auto;color:#111827"><h2 style="background:#374b82;color:white;padding:20px;margin:0">New Business Enquiry</h2><table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb">${row("Full Name", data.fullName)}${row("Company", data.companyName)}${row("Designation / Role", data.role)}${row("Business Email", data.email)}${row("Mobile / WhatsApp", data.phone)}${row("City / Location", data.location)}${row("Interested In", data.interests.join(", "))}</table><div style="padding:20px;background:#f9fafb;border:1px solid #e5e7eb;border-top:0"><strong>Business Requirement</strong><p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(data.requirement)}</p></div></div>`;
}

export async function processContactRequest({ method, headers = {}, body, ip = "unknown" }) {
  if (method !== "POST") return { status: 405, body: { success: false, message: "Method not allowed." }, allow: "POST" };
  const contentType = headers["content-type"] || "";
  if (!contentType.toLowerCase().startsWith("application/json")) return { status: 415, body: { success: false, message: "Content-Type must be application/json." } };
  if (!isAllowedOrigin(headers.origin, headers.host)) return { status: 403, body: { success: false, message: "Origin not allowed." } };

  const result = validateSubmission(body);
  if (result.spam) return { status: 200, body: { success: true } };
  if (result.error) return { status: 400, body: { success: false, message: result.error } };

  const fingerprint = createHash("sha256").update(`${ip}:${JSON.stringify(result.data)}`).digest("hex");
  const rateError = enforceRateLimit(ip, fingerprint);
  if (rateError) return { status: 429, body: { success: false, message: rateError } };

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) throw new Error("Contact email configuration is missing");
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL || "SkillSprint <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL],
    replyTo: result.data.email,
    subject: `New enquiry from ${result.data.companyName}`,
    html: buildEmail(result.data),
  });
  if (error) throw new Error("Email provider rejected the request");
  return { status: 200, body: { success: true } };
}
