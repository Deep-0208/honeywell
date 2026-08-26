import { NextRequest } from 'next/server';

/**
 * Safely extracts client IP from request headers for logging.
 */
export function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }
  return 'anonymous';
}

/**
 * Checks if a hidden bot honeypot field has been filled.
 * Spambots automatically populate all fields, while real human users never see them.
 */
export function isHoneypotTriggered(
  body: Record<string, unknown>,
  honeypotKeys: string[] = ['_hp_company_fax', 'website_url_hp', 'honeypot']
): boolean {
  for (const key of honeypotKeys) {
    if (body[key] && typeof body[key] === 'string' && (body[key] as string).trim().length > 0) {
      return true;
    }
  }
  return false;
}
