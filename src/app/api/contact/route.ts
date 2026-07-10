import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: result.error.flatten() },
      { status: 422 }
    );
  }

  const { name, email, subject, message, _hp } = result.data;

  // Drop bots
  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  // TODO: swap in your mail provider (Resend, SendGrid, etc.)
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({ from: '...', to: '...', subject, html: `...` });

  // For now, log to console (development mode)
  console.log("[Contact form]", { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
