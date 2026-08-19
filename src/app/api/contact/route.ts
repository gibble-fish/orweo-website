import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, company, email, phone, projectType, location, timeframe, message } = body;

    // Validate required fields
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: "Bitte fülle alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse an." },
        { status: 400 }
      );
    }

    // Create transporter with SMTP settings
    // Configure these in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Build email content
    const emailContent = `
Neue Projektanfrage über orweo.de

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: ${name}
Unternehmen: ${company || "–"}
E-Mail: ${email}
Telefon: ${phone || "–"}
Projektart: ${projectType}
Standort: ${location || "–"}
Gewünschter Zeitraum: ${timeframe || "–"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nachricht:
${message || "Keine Nachricht angegeben."}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Diese Anfrage wurde über das Kontaktformular auf orweo.de gesendet.
    `.trim();

    // Send email
    await transporter.sendMail({
      from: `"ORWEO Website" <${process.env.SMTP_USER}>`,
      to: "kontakt@orweo.de",
      replyTo: email,
      subject: `Neue Anfrage: ${projectType} – ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Beim Senden ist ein Fehler aufgetreten. Bitte versuche es erneut." },
      { status: 500 }
    );
  }
}
