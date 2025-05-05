import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: "contact@clanap.com",
    pass: "g66@SPyT7^f&",
  },
});

export const mailOptions = {
  from: "contact@clanap.com",
  to: "contact@clanap.com",
};
