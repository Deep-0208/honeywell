import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      company,
      email,
      phone,
      city,
      productInterest,
      industry,
      application,
      requirementDescription,
      pressure,
      boreSize,
      strokeLength,
      flowRate,
      quantity,
    } = body;

    // Server-side validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Full name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    const salesEmail = process.env.SALES_NOTIFICATION_EMAIL || 'honeywellhydraulics@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Honeywell Hydraulics RFQ <onboarding@resend.dev>',
      to: [salesEmail],
      replyTo: email,
      subject: `🚨 New RFQ Request: ${fullName} (${company || 'Individual'}) — ${productInterest || 'Hydraulics'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0D1B5C; padding: 22px; text-align: center; color: white;">
            <h2 style="margin: 0; font-size: 22px; font-weight: bold;">New Hydraulic Quote Request</h2>
            <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Honeywell Hydraulics RFQ Engine</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff;">
            <h3 style="color: #0D1B5C; border-bottom: 2px solid #ED1C24; padding-bottom: 6px; margin-top: 0; font-size: 16px;">Buyer Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Buyer Name:</strong></td><td style="color: #0f172a; font-weight: bold;">${fullName}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Company:</strong></td><td style="color: #0f172a;">${company || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${email}" style="color: #ED1C24;">${email}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${phone}" style="color: #0D1B5C; font-weight: bold;">${phone}</a></td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>City / Location:</strong></td><td style="color: #0f172a;">${city || 'N/A'}</td></tr>
            </table>

            <h3 style="color: #0D1B5C; border-bottom: 2px solid #ED1C24; padding-bottom: 6px; font-size: 16px;">Technical Specifications</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Product Type:</strong></td><td style="color: #0f172a; font-weight: bold;">${productInterest || 'Custom Hydraulic Cylinder'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Industry Sector:</strong></td><td style="color: #0f172a;">${industry || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Application:</strong></td><td style="color: #0f172a;">${application || 'N/A'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Working Pressure:</strong></td><td style="color: #0f172a;">${pressure ? `${pressure} bar / PSI` : 'To be advised'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Bore Size:</strong></td><td style="color: #0f172a;">${boreSize ? `${boreSize} mm` : 'To be advised'}</td></tr>
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Stroke Length:</strong></td><td style="color: #0f172a;">${strokeLength ? `${strokeLength} mm` : 'To be advised'}</td></tr>
              ${flowRate ? `<tr><td style="padding: 6px 0; color: #64748b;"><strong>Flow Rate:</strong></td><td style="color: #0f172a;">${flowRate} LPM</td></tr>` : ''}
              <tr><td style="padding: 6px 0; color: #64748b;"><strong>Required Quantity:</strong></td><td style="color: #0f172a; font-weight: bold;">${quantity || '1'} units</td></tr>
            </table>

            <h3 style="color: #0D1B5C; border-bottom: 2px solid #ED1C24; padding-bottom: 6px; font-size: 16px;">Requirement Description</h3>
            <div style="background-color: #f8fafc; border-left: 4px solid #0D1B5C; padding: 14px; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-wrap;">
              ${requirementDescription || 'No additional custom parameters provided.'}
            </div>

            <div style="margin-top: 24px; text-align: center;">
              <a href="tel:${phone}" style="display: inline-block; background-color: #ED1C24; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold; margin-right: 12px;">📞 Call Buyer Now</a>
              <a href="mailto:${email}?subject=Quotation:%20Honeywell%20Hydraulics%20-%20${encodeURIComponent(productInterest || 'Custom Hydraulics')}" style="display: inline-block; background-color: #0D1B5C; color: white; padding: 12px 24px; border-radius: 4px; text-decoration: none; font-weight: bold;">✉️ Send Quote Proposal</a>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend RFQ error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: unknown) {
    console.error('Quote API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
