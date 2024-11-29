import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  if (request.nextUrl.pathname === "/components") {
    const url = request.nextUrl.clone();
    url.pathname = "/components/react/accordion";

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/components",
};
