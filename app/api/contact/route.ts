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
          body.subject || "Clan-AP Technologies"
        }`,
        html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
  
        <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin-bottom: 20px;">
          <h2 style="color: #78350F; margin: 0 0 15px 0;">New Contact Form Submission</h2>
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
          <div style="background-color: #F9FAFB; padding: 15px; border-left: 3px solid #F59E0B; border-radius: 4px;">
            ${body.message.replace(/\n/g, "<br>")}
          </div>
        </div>
  
        <div style="font-size: 12px; color: #6B7280; text-align: center; margin-top: 30px;">
          <p>This message was sent from the Clan-AP Technologies contact form.</p>
        </div>
      </div>
    `,
      });

      // Send confirmation email to the user with enhanced design using Clan-AP Technologies branding
      await transporter.sendMail({
        from: mailOptions.from,
        to: body.email,
        subject: "Thanks for reaching out to Clan-AP Technologies!",
        html: `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6;">
            <!-- Clan-AP Technologies Brand Header -->
            <div style="text-align: center; margin-bottom: 30px; padding: 30px 20px; background: linear-gradient(to bottom, #F59E0B, #D97706); border-radius: 8px; color: white;">
            
              <div style="margin-bottom: 15px; color: white;">
               Clan-AP Technologies
              </div>
              <p style="color: #FEF3C7; margin-top: 15px;">Quality Assurance Experts Dedicated to Exceptional Software Testing</p>
            </div>
      
            <!-- Content -->
            <div style="background-color: white; border-radius: 8px; box-shadow: 0 4px 15px rgba(217,119,6,0.12); padding: 30px; margin-bottom: 16px; border-top: 5px solid #F59E0B;">
              <h2 style="color: #92400E; margin: 0 0 20px 0; text-align: center;">We've received your message!</h2>
      
              <p style="color: #374151;">Hi ${body.name},</p>
              <p style="color: #374151;">Thank you for contacting Clan-AP Technologies. We appreciate your interest in our QA services. Our team has received your inquiry regarding ${
                body.service
              } and will get back to you within 24-48 hours.</p>
      
              <div style="background-color: rgba(251,191,36,0.1); border-left: 4px solid #F59E0B; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0;">For urgent matters, please contact us directly at:</p>
                <p style="margin-top: 5px; color: #92400E; font-weight: bold;">
                  <a href="tel:+917814320230" style="color: #92400E; text-decoration: none;">+91 78143 20230</a>
                </p>
              </div>
      
              <p style="color: #374151;">Best regards,</p>
              <p style="color: #92400E; font-weight: bold;">The Clan-AP Technologies Team</p>
            </div>
      
            <!-- Mission Box -->
            <div style="background-color: rgba(251,191,36,0.05); border: 1px solid rgba(251,191,36,0.2); border-radius: 8px; padding: 20px; text-align: center;">
              <p style="color: #92400E; font-style: italic; margin: 0;">
                "At Clan-AP Technologies, we deliver excellence in quality assurance through innovative testing approaches that ensure your software performs flawlessly."
              </p>
            </div>
      
            <!-- Footer -->
            <div style="border-top: 1px solid #E5E7EB; padding-top: 20px; text-align: center; margin-top: 30px;">
            <div style="margin-bottom: 15px;">
            <a href="https://www.facebook.com/clanAPtechnologies" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" alt="Facebook" style="width: 20px; height: 20px;"></a>
            <a href="https://twitter.com/ClanapTech" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" style="width: 20px; height: 20px;"></a>
            <a href="https://instagram.com/clanap_technologies" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" alt="Instagram" style="width: 20px; height: 20px;"></a>
            <a href="https://www.linkedin.com/company/81815969/admin/dashboard" style="display: inline-block; margin: 0 5px; color: #1075BB;"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" style="width: 20px; height: 20px;"></a>
          </div>
            <div style="margin-bottom: 15px;">
                <a href="https://www.clanap.com" style="color: #92400E; text-decoration: none; font-size: 14px; font-weight: bold;">www.clanap.com</a>
              </div>
              <div style="margin-bottom: 15px;">
                <a href="mailto:contact@clanap.com" style="color: #92400E; text-decoration: none; font-size: 14px;">contact@clanap.com</a>
              </div>
              <p style="color: #6B7280; font-size: 12px;">&copy; ${new Date().getFullYear()} Clan-AP Technologies. All Rights Reserved.</p>
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
