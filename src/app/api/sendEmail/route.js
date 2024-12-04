import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // Log the data for debugging
    console.log(data);

    // Sending the email
    await sendEmail(data.name, data.email, data.message);

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email: ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true, // Use SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (name, email, message) => {
  try {
    let messageToRecipient = `
      <html>
        <head>
          <style>
            body { font-family: 'Arial', sans-serif; }
            .container {
              background-color: #f4f4f4;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h1 { color: #333; letter-spacing: -0.8px; }
            p { color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Mensagem de Contacto</h1>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${message}</p>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "jmicropigmentation@gmail.com",

      subject: "Recebeu uma mensagem do site",
      html: messageToRecipient,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error occurred while sending email:", error);
    throw error; // Re-throw error to be caught in POST handler
  }
};
//s
