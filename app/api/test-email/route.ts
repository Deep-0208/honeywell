import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_xxxxxxxxx') {
      return NextResponse.json({
        success: false,
        error: 'Please replace "re_xxxxxxxxx" with your real Resend API Key in .env.local',
      }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Honeywell Hydraulics <onboarding@resend.dev>',
      to: process.env.SALES_NOTIFICATION_EMAIL || 'honeywellhydraulics@gmail.com',
      subject: 'Hello World from Honeywell Hydraulics',
      html: '<p>Congrats on sending your <strong>first email via Resend API</strong> on Honeywell Hydraulics!</p>',
    });

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      id: data?.id,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
