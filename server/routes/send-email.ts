import { RequestHandler } from "express";
import nodemailer from "nodemailer";

const isValidEmail = (s?: string) => !!s && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const isValidPhone = (s?: string) => !!s && s.replace(/[^0-9]/g, "").length >= 7;

const sendViaSendGrid = async (opts: { from: string; to: string; subject: string; text: string }) => {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) throw new Error('Missing SENDGRID_API_KEY');

  const payload = {
    personalizations: [{ to: [{ email: opts.to }] }],
    from: { email: opts.from },
    subject: opts.subject,
    content: [{ type: 'text/plain', value: opts.text }]
  };

  const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`
    },
    body: JSON.stringify(payload)
  });

  if (!resp.ok) {
    const body = await resp.text().catch(() => '');
    throw new Error(`SendGrid error: ${resp.status} ${body}`);
  }
};

export const handleSendEmail: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body ?? {};

    // Basic server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ error: 'Invalid name' });
    }
    if (!isValidEmail(email)) return res.status(400).json({ error: 'Invalid email' });
    if (phone && !isValidPhone(phone)) return res.status(400).json({ error: 'Invalid phone' });
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ error: 'Message is too short' });
    }

    const to = process.env.TO_EMAIL;
    const from = process.env.FROM_EMAIL || process.env.SMTP_USER || 'no-reply@example.com';
    if (!to) {
      console.error('TO_EMAIL not configured');
      return res.status(500).json({ error: 'Email receiver not configured' });
    }

    const subjectLine = subject && subject.trim() ? `Website contact: ${subject.trim()}` : `Website contact from ${name}`;
    const bodyText = `From: ${name} <${email}>\nPhone: ${phone || 'N/A'}\n\n${message}`;

    // Prefer SendGrid if API key is present (server-side secret)
    if (process.env.SENDGRID_API_KEY) {
      await sendViaSendGrid({ from, to, subject: subjectLine, text: bodyText });
      return res.json({ ok: true, provider: 'sendgrid' });
    }

    // Fallback to SMTP via nodemailer
    const host = process.env.SMTP_HOST;
    const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error('Missing SMTP configuration');
      return res.status(500).json({ error: 'Email server not configured' });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    await transporter.sendMail({
      from,
      to,
      subject: subjectLine,
      text: bodyText,
      replyTo: email
    });

    res.json({ ok: true, provider: 'smtp' });
  } catch (err: any) {
    console.error('Error sending email:', err?.message || err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
