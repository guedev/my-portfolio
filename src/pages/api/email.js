import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log(process.env.EMAIL_USERNAME)

    // Create a Nodemailer transporter object
    const transporter = createTransport({
      service: "gmail",
      auth: {
        user: 'lucasportfolio2023@gmail.com',
        pass: 'Skywalker2023',
      },
      
    });

   
    // Send e-mail using Nodemailer
    await transporter.sendMail({
      from: 'lucasportfolio2023@gmail.com',
      to: 'dev.guedes27@gmail.com',
      subject: `Message from ${name} (${email})`,
      text: message,
    });

    res.status(200).json({ message: "E-mail sent successfully" });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}




