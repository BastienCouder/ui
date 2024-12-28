import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  const redirectMap: Record<string, string> = {
    "/components": "/components/react/accordion",
    "/docs": "/docs/installation",
    "/components/react": "/components/react/accordion",
    "/components/vue": "/components/vue/button",
  };

  if (redirectMap[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = redirectMap[pathname];
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/components/:path*", "/docs/:path*"],
};
