import { RATE_LIMIT_COUNT } from '@/utils/constants';
import { validateLicenseKey } from '@/utils/lemon';
import { GenerateApiInput } from '@/utils/types';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { isDev } from './utils/isDev';

export const config = {
  matcher: '/api/generate',
};

export default async function middleware(
  request: NextRequest,
  event: NextFetchEvent
): Promise<Response | undefined> {
  const { userKey } = (await request.json()) as GenerateApiInput;

  if (userKey) {
    console.log('user is using license key');
    const { isValid } = await validateLicenseKey(userKey);
    if (!isValid) {
      return runOutOfRatelimit(439);
    }
    return NextResponse.next();
  }

  if (isDev) {
    return NextResponse.next();
  }

  // Always return NextResponse.next() for production
  return NextResponse.next();
}

function runOutOfRatelimit(errorCode: number) {
  return new NextResponse(JSON.stringify({ success: false, message: '' }), {
    status: errorCode,
    headers: { 'content-type': 'application/json' },
  });
}
