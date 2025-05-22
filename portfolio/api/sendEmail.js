import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Configure transporter (Use Gmail or your SMTP provider)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO, // your email to receive messages
      subject: `New message from ${name}`,
      text: message,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Email failed to send", error });
  }
}
