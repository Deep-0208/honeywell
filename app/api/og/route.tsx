import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Custom Hydraulic Cylinder Manufacturer';
    
    // DEFENSIVE SEO: We use the PNG logo specifically because next/og has excellent 
    // native support for PNGs compared to WebP. 
    // Absolute URL is required by ImageResponse, which we construct using req.url
    const logoUrl = new URL('/images/logos/long-size-logohydralics-logo.png', req.url).toString();

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0D1B5C',
            backgroundImage: 'linear-gradient(135deg, #0D1B5C 0%, #060d2e 100%)', // Plain gradient as approved
            padding: '80px',
            color: 'white',
          }}
        >
          {/* Logo Section */}
          <div style={{ display: 'flex', marginBottom: 'auto' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoUrl}
              height="80"
              alt="Honeywell Hydraulics Logo"
            />
          </div>
          
          {/* Text Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <h1
              style={{
                fontSize: title.length > 40 ? '64px' : '80px',
                fontWeight: 'bold',
                lineHeight: 1.1,
                marginBottom: '20px',
                whiteSpace: 'pre-wrap',
                fontFamily: 'sans-serif',
              }}
            >
              {title}
            </h1>
            <div
              style={{
                fontSize: '32px',
                color: '#94a3b8',
                fontFamily: 'sans-serif',
              }}
            >
              Engineered in Gujarat, India
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    // SAFE FALLBACK: Never return a 500 error for OG images to protect SEO!
    // Return a basic, hardcoded ImageResponse so the crawler always gets a valid 200 OK image.
    console.error('Fatal error in OG image generation:', e);
    return new ImageResponse(
      (
        <div style={{ backgroundColor: '#0D1B5C', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '64px', fontWeight: 'bold' }}>
          Honeywell Hydraulics
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }
}
