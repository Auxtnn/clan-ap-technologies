import nodemailer from "nodemailer";

const USER = process.env.EMAIL_USER;
const PASS = process.env.EMAIL_PASS;



export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: USER,
    pass: PASS,
  },
});

export const mailOptions = {
  from: USER,
  to: USER,
};
