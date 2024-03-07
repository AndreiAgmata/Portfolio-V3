import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

// Handles POST requests to /api

export async function POST(request) {
  const myEmail = process.env.NEXT_PUBLIC_EMAIL;
  const password = process.env.NEXT_PUBLIC_PASSWORD;

  const data = await request.json();

  const name = data.name;
  const email = data.email;
  const message = data.message;

  // create transporter object
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: myEmail,
      pass: password,
    },
  });

  const mailData = {
    from: "agmataa1124@gmail.com",
    to: "agmataa1124@gmail.com",
    subject: `Portfolio Contact`,
    html: `
              <p>Name: ${name} </p>
              <p>Email: ${email} </p>
              <p>Message: ${message} </p>
              `,
  };

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          reject("Error: Unable to send email");
        } else {
          resolve("Email sent");
        }
      });
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.error(500, "COULD NOT SEND MESSAGE");
  }
}
