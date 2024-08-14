import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./configI18n";

const intlMiddleware = createIntlMiddleware({
  locales,
  pathnames,
  localePrefix,
  defaultLocale: "fr",
});

export default function middleware(req: NextRequest) {
  const response = intlMiddleware(req);

  if (response) return response;

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|sw.js|sitemap.xml|robots.txt|site.webmanifest|swe-worker-development.js|workbox-7144475a.js|_next/static|_next/image|images|videos|favicon.ico).*)",
    "/",
    "/(fr|en|es)/:path*",
  ],
};
