import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      service,
      message,
    } = req.body;

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    await resend.emails.send({
      from: "SkillSprint <onboarding@resend.dev>",
      to: ["yourmail@gmail.com"],
      subject: `New Contact Form Submission - ${service}`,
      replyTo: email,

      html: `
        <div style="font-family:Arial,sans-serif;padding:20px">
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not Provided"}</p>
          <p><strong>Service:</strong> ${service}</p>

          <hr style="margin:20px 0" />

          <p><strong>Message:</strong></p>

          <div style="padding:12px;background:#f4f4f4;border-radius:8px">
            ${message}
          </div>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
}