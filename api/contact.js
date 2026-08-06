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
    res.setHeader("Cache-Control", "no-store");
    return res.status(result.status).json(result.body);
  } catch {
    return res.status(500).json({ success: false, message: "Unable to send your enquiry right now. Please try again later." });
  }
}
