import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const timeline = String(formData.get("timeline") || "").trim();
    const description = String(formData.get("description") || "").trim();
    const attachment = formData.get("attachment");

    if (!fullName || !email || !description) {
      return NextResponse.json(
        { error: "Full name, email, and project description are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    let resendAttachment:
      | {
          content: string;
          filename: string;
        }
      | undefined;

    if (attachment instanceof File && attachment.size > 0) {
      if (attachment.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Attachment must be smaller than 5MB." },
          { status: 400 },
        );
      }

      const bytes = Buffer.from(await attachment.arrayBuffer());
      resendAttachment = {
        content: bytes.toString("base64"),
        filename: attachment.name,
      };
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "aroraaryan512@gmail.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || "aryan-portfolio <onboarding@resend.dev>";

    if (!resendApiKey) {
      return NextResponse.json(
        {
          error:
            "Email delivery is not configured yet. Add RESEND_API_KEY in your Vercel environment variables.",
        },
        { status: 500 },
      );
    }

    const payload = {
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New portfolio lead from ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <h2>New Portfolio Lead</h2>
          <p>A new client inquiry was submitted from your portfolio website.</p>
          <table style="border-collapse:collapse;width:100%;max-width:720px">
            <tbody>
              <tr><td style="padding:8px 0;font-weight:700">Full Name</td><td style="padding:8px 0">${escapeHtml(fullName)}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Email</td><td style="padding:8px 0">${escapeHtml(email)}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Phone / WhatsApp</td><td style="padding:8px 0">${escapeHtml(phone || "Not provided")}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Project Type</td><td style="padding:8px 0">${escapeHtml(projectType || "Not provided")}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Budget</td><td style="padding:8px 0">${escapeHtml(budget || "Not provided")}</td></tr>
              <tr><td style="padding:8px 0;font-weight:700">Timeline</td><td style="padding:8px 0">${escapeHtml(timeline || "Not provided")}</td></tr>
            </tbody>
          </table>
          <h3 style="margin-top:24px">Project Description</h3>
          <p style="white-space:pre-wrap">${escapeHtml(description)}</p>
        </div>
      `,
      text: [
        "New Portfolio Lead",
        "",
        `Full Name: ${fullName}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone || "Not provided"}`,
        `Project Type: ${projectType || "Not provided"}`,
        `Budget: ${budget || "Not provided"}`,
        `Timeline: ${timeline || "Not provided"}`,
        "",
        "Project Description:",
        description,
      ].join("\n"),
      attachments: resendAttachment ? [resendAttachment] : undefined,
    };

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", errorText);

      return NextResponse.json(
        { error: "Unable to deliver your inquiry right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "Thanks! I’ll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong while submitting the form." },
      { status: 500 },
    );
  }
}
