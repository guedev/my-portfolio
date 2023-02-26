import { createTransport } from "nodemailer";
import dotenv from "dotenv";


dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter object
    const transporter = createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

   
    // Send e-mail using Nodemailer
    await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: process.env.MY_EMAIL_ADDRESS,
      subject: `Message from ${name} (${email})`,
      text: message,
    });


    res.status(200).json({ message: "E-mail sent successfully" });
    


  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}




