import { transporter, mailOptions } from "@/app/constant/nodemailer";
import {
  hasAuditErrors,
  normalizeAudit,
  validateAudit,
} from "@/app/constant/auditValidation";
import { NextResponse } from "next/server";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  // Honeypot: real users never see or fill this field.
  if (body?.fax) {
    return NextResponse.json({ message: "Request received", success: true });
  }

  const raw = {
    email: typeof body?.email === "string" ? body.email : "",
    company: typeof body?.company === "string" ? body.company : "",
    website: typeof body?.website === "string" ? body.website : "",
  };

  const errors = validateAudit(raw);
  if (hasAuditErrors(errors)) {
    return NextResponse.json(
      { error: "Validation failed", fields: errors },
      { status: 400 }
    );
  }

  const data = normalizeAudit(raw);
  const email = escapeHtml(data.email);
  const company = escapeHtml(data.company);
  const website = escapeHtml(data.website);

  try {
    // Send audit request to admin
    await transporter.sendMail({
      ...mailOptions,
      replyTo: data.email,
      subject: `New Free QA Audit Request - ${data.company}`,
      html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">

        <div style="background-color: #fff8ec; border-left: 4px solid #ed8c01; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: #4a2801; margin: 0 0 15px 0;">New Free QA Audit Request</h2>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <div style="background-color: white; border: 1px solid #E5E7EB; border-radius: 4px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
          <p><strong>Work Email:</strong> <a href="mailto:${email}" style="color: #4a2801;">${email}</a></p>
          <p><strong>Product / Company:</strong> ${company}</p>
          <p><strong>Website or App Link:</strong> <a href="${website}" style="color: #4a2801;">${website}</a></p>
        </div>

        <div style="font-size: 12px; color: #6B7280; text-align: center; margin-top: 30px;">
          <p>This request was sent from the Free QA Audit form on the Clan-AP Technologies Private Limited website.</p>
        </div>
      </div>
    `,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: mailOptions.from,
      to: data.email,
      subject: "Your free QA audit request - Clan-AP Technologies Private Limited",
      html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <!-- Brand Header -->
            <div style="text-align: center; margin-bottom: 30px; padding: 30px 20px; background-color: #9e5801; background: linear-gradient(to bottom, #ed8c01, #9e5801); border-radius: 8px;">
              <div style="margin-bottom: 15px; font-size: 24px; font-weight: bold; color: #ffffff;">
                CLAN-AP TECHNOLOGIES PRIVATE LIMITED
              </div>
              <p style="color: #ffffff; margin-top: 15px;">Quality Assurance Experts Dedicated to Exceptional Software Testing</p>
            </div>

            <!-- Content -->
            <div style="background-color: white; border-radius: 8px; box-shadow: 0 4px 15px rgba(237,140,1,0.12); padding: 30px; margin-bottom: 16px; border-top: 5px solid #ed8c01;">
              <h2 style="color: #4a2801; margin: 0 0 20px 0; text-align: center;">Your audit request is in!</h2>

              <p style="color: #374151;">Hi there,</p>
              <p style="color: #374151;">Thank you for requesting a free QA audit for <strong>${company}</strong>. A QA lead will review <a href="${website}" style="color: #4a2801;">${website}</a> and reply within one business day with a written assessment of your coverage gaps.</p>

              <div style="background-color: rgba(237,140,1,0.08); border-left: 4px solid #ed8c01; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0;">For urgent matters, please contact us directly at:</p>
                <p style="margin-top: 5px; color: #4a2801; font-weight: bold;">
                  <a href="tel:+917814320230" style="color: #4a2801; text-decoration: none;">+91 78143 20230</a>
                </p>
              </div>

              <p style="color: #374151;">Best regards,</p>
              <p style="color: #4a2801; font-weight: bold;">The Clan-AP Technologies Private Limited Team</p>
            </div>

            <!-- Footer -->
            <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; text-align: center; margin-top: 30px;">
              <div style="margin-bottom: 15px;">
                <a href="https://www.clanap.com" style="color: #4a2801; text-decoration: none; font-size: 14px; font-weight: bold;">www.clanap.com</a>
              </div>
              <div style="margin-bottom: 15px;">
                <a href="mailto:contact@clanap.com" style="color: #4a2801; text-decoration: none; font-size: 14px;">contact@clanap.com</a>
              </div>
              <p style="color: #6B7280; font-size: 12px;">&copy; ${new Date().getFullYear()} Clan-AP Technologies Private Limited. All Rights Reserved.</p>
            </div>
          </div>
        `,
    });

    return NextResponse.json({
      message: "Audit request sent successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
