import { NextResponse } from 'next/server'

import nodemailer from 'nodemailer'

export async function sendEmail(req: Request) {
  const { name, email, course, subject } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your Gmail
      pass: process.env.EMAIL_PASS, // your App Password
    },
  })

  const mailOptions = {
    from: email,
    to: 'aakritilearningcurve@gmail.com',
    subject: `New Contact from ${name}`,
    html: `
      <h2>Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Course:</strong> ${course}</p>
      <p><strong>Message:</strong><br/>${subject}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
