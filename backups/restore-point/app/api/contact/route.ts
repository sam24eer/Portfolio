import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 4000;

function normalize(input: unknown) {
  if (typeof input !== 'string') return '';
  return input.replace(/\r\n/g, '\n').trim();
}

function escapeHtml(input: string) {
  return input
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const name = normalize(body?.name);
    const email = normalize(body?.email);
    const message = normalize(body?.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Please fill out all fields.' }, { status: 400 });
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json({ error: 'Name is too long.' }, { status: 400 });
    }

    if (email.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT ?? '465');
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'skadi@asu.edu';

    if (!host || !user || !pass || !toEmail || !Number.isFinite(port)) {
      return NextResponse.json(
        { error: 'Contact form is not configured yet. Please try again later.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll('\n', '<br />');

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Contact Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send message right now.' }, { status: 500 });
  }
}
