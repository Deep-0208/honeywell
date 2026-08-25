import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === 're_xxxxxxxxx') {
      console.warn('[API/TestEmail] RESEND_API_KEY is not configured or using default placeholder.');
      return NextResponse.json({
        success: false,
        error: 'Please replace "re_xxxxxxxxx" with your real Resend API Key in .env.local',
      }, { status: 400 });
    }

    console.log('[API/TestEmail] Sending diagnostic test email...');
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: 'Honeywell Hydraulics <onboarding@resend.dev>',
      to: process.env.SALES_NOTIFICATION_EMAIL || 'honeywellhydraulics@gmail.com',
      subject: 'Hello World from Honeywell Hydraulics',
      html: '<p>Congrats on sending your <strong>first email via Resend API</strong> on Honeywell Hydraulics!</p>',
    });

    if (error) {
      console.error('[API/TestEmail] Diagnostic email dispatch failed:', error.message);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    console.log('[API/TestEmail] Diagnostic email sent successfully (ID:', data?.id, ')');
    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully!',
      id: data?.id,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Unknown error';
    console.error('[API/TestEmail] Unhandled exception:', errorMsg);
    return NextResponse.json({ success: false, error: errorMsg }, { status: 500 });
  }
}
