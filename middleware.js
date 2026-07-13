import { NextResponse } from 'next/server';

export function middleware(request) {
  const session = request.cookies.get('tas-session');
  if (!session || session.value !== process.env.SESSION_SECRET) {
    return NextResponse.redirect(new URL('/espace-membres/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/espace-membres'],
};
