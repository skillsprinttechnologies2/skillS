import { processContactRequest } from "../lib/contactSubmission.js";

export default async function handler(req, res) {
  try {
    const result = await processContactRequest({
      method: req.method,
      headers: req.headers,
      body: req.body,
      ip: req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown",
    });
    if (result.allow) res.setHeader("Allow", result.allow);
    if (result.retryAfter) res.setHeader("Retry-After", String(result.retryAfter));
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Content-Type-Options", "nosniff");
    return res.status(result.status).json(result.body);
  } catch (error) {
    console.error("[contact] submission failed", { code: error?.code || "UNEXPECTED_CONTACT_ERROR" });
    return res.status(500).json({ success: false, message: "We couldn't send your enquiry right now. Please try again shortly." });
  }
}
