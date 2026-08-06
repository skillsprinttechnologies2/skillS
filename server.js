import express from "express";
import dotenv from "dotenv";
import { processContactRequest } from "./lib/contactSubmission.js";

dotenv.config();
const app = express();
app.set("trust proxy", 1);
app.use(express.json({ limit: "20kb", strict: true }));

app.post("/api/contact", async (req, res) => {
  try {
    const result = await processContactRequest({ method: req.method, headers: req.headers, body: req.body, ip: req.ip });
    res.set("Cache-Control", "no-store");
    return res.status(result.status).json(result.body);
  } catch {
    return res.status(500).json({ success: false, message: "Unable to send your enquiry right now. Please try again later." });
  }
});

app.all("/api/contact", (_req, res) => res.set("Allow", "POST").status(405).json({ success: false, message: "Method not allowed." }));
app.use((error, _req, res, next) => {
  if (!error) return next();
  return res.status(400).json({ success: false, message: "Invalid JSON request." });
});
app.listen(process.env.PORT || 5000, () => console.log("Contact server started"));
