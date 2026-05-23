import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

  await resend.emails.send({
  from: "SkillSprint <onboarding@resend.dev>",
  to: "skillsprinttechnologies2@gmail.com",
  subject: `New Contact Form Submission - ${service}`,

  html: `
  <!DOCTYPE html>
  <html lang="en">
  <body style="margin:0;padding:0;background:#f4f7ff;font-family:Arial,Helvetica,sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="padding:30px 15px;">
      <tr>
        <td align="center">

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              max-width:620px;
              background:#ffffff;
              border-radius:20px;
              overflow:hidden;
              border:1px solid #e5e7eb;
              box-shadow:0 10px 40px rgba(42,68,154,0.08);
            "
          >

            <!-- Header -->
            <tr>
              <td
                style="
                  background:#2a449a;
                  padding:30px 35px;
                "
              >

                <h1
                  style="
                    margin:0;
                    color:#ffffff;
                    font-size:24px;
                    font-weight:700;
                  "
                >
                  New Contact Form Submission
                </h1>

                <p
                  style="
                    margin:8px 0 0 0;
                    color:rgba(255,255,255,0.85);
                    font-size:14px;
                  "
                >
                  SkillSprint Technologies Website
                </p>

              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:35px;">

                <!-- Service Highlight -->
                <div
                  style="
                    background:#f5f7ff;
                    border-left:4px solid #2a449a;
                    padding:18px 20px;
                    border-radius:12px;
                    margin-bottom:28px;
                  "
                >

                  <p
                    style="
                      margin:0 0 6px 0;
                      color:#6b7280;
                      font-size:12px;
                      font-weight:600;
                      text-transform:uppercase;
                      letter-spacing:1px;
                    "
                  >
                    Service Requested
                  </p>

                  <p
                    style="
                      margin:0;
                      color:#111827;
                      font-size:20px;
                      font-weight:700;
                    "
                  >
                    ${service}
                  </p>

                </div>

                <!-- Details -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0">

                  <tr>
                    <td style="padding:0 0 20px 0;">
                      <p style="margin:0;color:#6b7280;font-size:13px;font-weight:600;">
                        FULL NAME
                      </p>

                      <p style="margin:6px 0 0 0;color:#111827;font-size:16px;">
                        ${name}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 0 20px 0;">
                      <p style="margin:0;color:#6b7280;font-size:13px;font-weight:600;">
                        EMAIL
                      </p>

                      <p style="margin:6px 0 0 0;color:#111827;font-size:16px;">
                        ${email}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:0 0 20px 0;">
                      <p style="margin:0;color:#6b7280;font-size:13px;font-weight:600;">
                        PHONE
                      </p>

                      <p style="margin:6px 0 0 0;color:#111827;font-size:16px;">
                        ${phone}
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <p style="margin:0;color:#6b7280;font-size:13px;font-weight:600;">
                        MESSAGE
                      </p>

                      <div
                        style="
                          margin-top:10px;
                          background:#f9fafb;
                          border:1px solid #e5e7eb;
                          border-radius:14px;
                          padding:18px;
                        "
                      >
                        <p
                          style="
                            margin:0;
                            color:#374151;
                            font-size:15px;
                            line-height:1.8;
                          "
                        >
                          ${message}
                        </p>
                      </div>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                style="
                  padding:22px 35px;
                  border-top:1px solid #e5e7eb;
                  background:#fafbff;
                "
              >

                <p
                  style="
                    margin:0;
                    color:#6b7280;
                    font-size:13px;
                    line-height:1.7;
                  "
                >
                  This email was generated automatically from the SkillSprint Technologies website contact form.
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `,
});

    res.status(200).json({ success: true });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});