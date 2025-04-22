import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {

    const { name, email, subject } = await req.json();


    // Validate fields
    if (!name || !email || !subject) {
      return NextResponse.json(
        { success: false, message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Setup mail transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user:process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
      },
    });

    // Mail content
    const mailOptions = {
      to: `${email}`,
      from: 'aakritilearningcurve@gmail.com',
      subject: `New Contact Form Submission`,
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${subject}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}
