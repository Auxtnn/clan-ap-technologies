import { transporter, mailOptions } from "@/app/constant/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  if (request.method === "POST") {
    const body = await request.json();

    if (!body.name || !body.email || !body.message || !body.service) {
      return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    try {
      // Send email to admin with enhanced formatting
      await transporter.sendMail({
        ...mailOptions,
        subject: `New Contact Form Submission - ${
          body.subject || "Clan-AP Technologies Private Limited"
        }`,
        html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
  
        <div style="background-color: #fff8ec; border-left: 4px solid #ed8c01; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: #4a2801; margin: 0 0 15px 0;">New Contact Form Submission</h2>
          <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        </div>
  
        <div style="background-color: white; border: 1px solid #E5E7EB; border-radius: 4px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
          <p><strong>Full Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
          <p><strong>Service Interested:</strong> ${body.service}</p>
    
          ${
            body.company
              ? `<p><strong>Company Name:</strong> ${body.company}</p>`
              : ""
          }
          <p><strong>Message:</strong></p>
          <div style="background-color: #F9FAFB; padding: 15px; border-left: 3px solid #ed8c01; border-radius: 4px;">
            ${body.message.replace(/\n/g, "<br>")}
          </div>
        </div>
  
        <div style="font-size: 12px; color: #6B7280; text-align: center; margin-top: 30px;">
          <p>This message was sent from the Clan-AP Technologies Private Limited contact form.</p>
        </div>
      </div>
    `,
      });

      // Send confirmation email to the user
      await transporter.sendMail({
        from: mailOptions.from,
        to: body.email,
        subject:
          "Thanks for reaching out to Clan-AP Technologies Private Limited!",
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
              <h2 style="color: #4a2801; margin: 0 0 20px 0; text-align: center;">We've received your message!</h2>
      
              <p style="color: #374151;">Hi ${body.name},</p>
              <p style="color: #374151;">Thank you for contacting Clan-AP Technologies Private Limited. We appreciate your interest in our QA services. Our team has received your inquiry regarding ${
                body.service
              } and will get back to you within 24-48 hours.</p>
      
              <div style="background-color: rgba(237,140,1,0.08); border-left: 4px solid #ed8c01; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0;">For urgent matters, please contact us directly at:</p>
                <p style="margin-top: 5px; color: #4a2801; font-weight: bold;">
                  <a href="tel:+917814320230" style="color: #4a2801; text-decoration: none;">+91 78143 20230</a>
                </p>
              </div>
      
              <p style="color: #374151;">Best regards,</p>
              <p style="color: #4a2801; font-weight: bold;">The Clan-AP Technologies Private Limited Team</p>
            </div>
      
            <!-- Mission Box -->
            <div style="background-color: rgba(237,140,1,0.05); border: 1px solid rgba(237,140,1,0.2); border-radius: 8px; padding: 20px; text-align: center;">
              <p style="color: #4a2801; font-style: italic; margin: 0;">
                "At Clan-AP Technologies Private Limited, we deliver excellence in quality assurance through innovative testing approaches that ensure your software performs flawlessly."
              </p>
            </div>
      
            <!-- Footer -->
            <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; text-align: center; margin-top: 30px;">
              <div style="margin-bottom: 15px;">
                <a href="https://www.facebook.com/clanAPtechnologies" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" style="width: 20px; height: 20px;"></a>
                <a href="https://twitter.com/ClanapTech" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="X" style="width: 20px; height: 20px;"></a>
                <a href="https://instagram.com/clanap_technologies" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" style="width: 20px; height: 20px;"></a>
                <a href="https://www.linkedin.com/company/81815969/admin/dashboard" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 20px; height: 20px;"></a>
              </div>
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
        message: "Message sent successfully",
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

  return NextResponse.json({ error: "Bad request" }, { status: 400 });
}

export async function GET(request: any) {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
