"use server";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  generateEmailTemplate,
  generateAutoReplyTemplate,
} from "../../../../lib/email-template";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject = "Contact Form Inquiry", message } = body;

    // 1. Access environment variable and parse recipients
    const recipientsString = process.env.SMTP_TO;

    if (!recipientsString) {
      return NextResponse.json(
        { message: "SMTP_TO environment variable not found" },
        { status: 500 }
      );
    }

    const recipients = recipientsString.split(",").map((email) => email.trim());

    if (recipients.length === 0) {
      return NextResponse.json(
        { message: "No recipients found in SMTP_TO" },
        { status: 500 }
      );
    }

    // 2. Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT as string, 10),
      secure: true, // assuming you are using 465 port
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Generate Email Content for Admin using the template
    const adminEmailHtml = generateEmailTemplate({
      name,
      email,
      subject,
      message,
    });

    // 4. Email content (common for all recipients)
    const adminMailOptionsTemplate = {
      from: process.env.SMTP_USER, // using the smtp user as from
      subject: `New contact form submission: ${subject}`,
      html: adminEmailHtml,
    };

    // 5. Iterate and send emails to admins
    try {
      for (const recipient of recipients) {
        const mailOptions = {
          ...adminMailOptionsTemplate,
          to: recipient,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Admin email sent successfully to: ${recipient}`);
      }
    } catch (adminEmailError) {
      console.error("Error sending admin emails:", adminEmailError);
      return NextResponse.json(
        { message: "Error sending admin notification emails" },
        { status: 500 }
      );
    }

    // 6. Generate Auto-Reply Email Content
    const autoReplyHtml = generateAutoReplyTemplate({ name });

    // 7. Send Auto-Reply to user
    try {
      const autoReplyMailOptions = {
        from: `"ACE Intelligence" <${process.env.SMTP_USER}>`,
        replyTo: process.env.SMTP_USER,
        to: email, // Send to the user's email
        subject: "Thank you for contacting ACE Intelligence",
        html: autoReplyHtml,
        headers: {
          'X-Priority': '3',
          'X-Mailer': 'ACE Intelligence Contact Form'
        }
      };

      console.log(`Attempting to send auto-reply to: ${email}`);
      const autoReplyResult = await transporter.sendMail(autoReplyMailOptions);
      console.log(`Auto-reply sent successfully to: ${email}`, autoReplyResult);
    } catch (autoReplyError) {
      const error = autoReplyError as Error & { code?: string };
      console.error("Error sending auto-reply:");
      console.error("Error message:", error.message);
      console.error("Error code:", error.code);
      console.error("Full error:", error);
      // Don't fail the whole request if auto-reply fails
      // Admin emails were sent successfully
      // Note: Auto-reply may fail for external domains due to SMTP restrictions
    }

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in contact form handler:", error);
    return NextResponse.json(
      { message: "Error processing your request" },
      { status: 500 }
    );
  }
}
