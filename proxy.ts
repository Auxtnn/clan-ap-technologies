import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANDING_HOST = process.env.LANDING_DOMAIN;

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  if (hostname === LANDING_HOST) {
    const url = request.nextUrl.clone();
    url.pathname = `/landing${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (pathname.startsWith("/landing")) {
    const redirectUrl = new URL(
      pathname.replace(/^\/landing/, "") + search,
      `https://${LANDING_HOST}`
    );
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images).*)"],
};