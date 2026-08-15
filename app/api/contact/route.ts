import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('RESEND_API_KEY environment variable is not set.');
      return NextResponse.json(
        { error: 'Email service is not configured yet.' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { fullName, company, phone, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const salesEmail = process.env.SALES_NOTIFICATION_EMAIL || 'honeywellhydraulics@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Honeywell Hydraulics <onboarding@resend.dev>',
      to: [salesEmail],
      replyTo: email,
      subject: `📩 New Contact Message: ${fullName} (${company || 'Direct Inquiry'})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0D1B5C; padding: 20px; text-align: center; color: white;">
            <h2 style="margin: 0; font-size: 20px;">New Contact Inquiry</h2>
            <p style="margin: 5px 0 0 0; font-size: 13px; opacity: 0.9;">Honeywell Hydraulics Website</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 120px;"><strong>Name:</strong></td>
                <td style="color: #0f172a; font-weight: bold;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Company:</strong></td>
                <td style="color: #0f172a;">${company || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                <td><a href="mailto:${email}" style="color: #ED1C24;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td>
                <td><a href="tel:${phone}" style="color: #0D1B5C; font-weight: bold;">${phone}</a></td>
              </tr>
            </table>

            <h3 style="color: #0D1B5C; border-bottom: 2px solid #ED1C24; padding-bottom: 6px; margin-top: 20px; font-size: 16px;">Message</h3>
            <div style="background-color: #f8fafc; border-left: 4px solid #0D1B5C; padding: 14px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">
              ${message}
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="tel:${phone}" style="display: inline-block; background-color: #ED1C24; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; font-weight: bold; margin-right: 10px;">📞 Call Client</a>
              <a href="mailto:${email}?subject=Reply:%20Honeywell%20Hydraulics%20Inquiry" style="display: inline-block; background-color: #0D1B5C; color: white; padding: 10px 20px; border-radius: 4px; text-decoration: none; font-weight: bold;">✉️ Reply Email</a>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
