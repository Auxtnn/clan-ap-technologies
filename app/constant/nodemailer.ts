import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: "info@damsa.network",
    pass: "Fz5BEJTTTJSd",
  },
});

export const mailOptions = {
  from: "info@damsa.network",
  to: "info@damsa.network",
};
