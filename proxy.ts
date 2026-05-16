import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check for the "en-US" locale. "da" works by default without prefix.
  if (pathname.startsWith("/en-US/") || pathname === "/en-US") {
    // Strip the locale to find the actual page file to render
    const newPathname = pathname.replace(/^\/en-US/, '') || '/';
    return NextResponse.rewrite(new URL(newPathname, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};