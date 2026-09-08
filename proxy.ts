import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LANDING_HOST = process.env.LANDING_DOMAIN;

const LANDING_PATHS = ["/qa-team"];
const DEFAULT_LANDING_PATH = "/qa-team";

function matchesLandingPath(pathname: string) {
  return LANDING_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function proxy(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const { pathname, search } = request.nextUrl;

  if (hostname === LANDING_HOST) {
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = DEFAULT_LANDING_PATH;
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  }

  if (matchesLandingPath(pathname)) {
    const redirectUrl = new URL(pathname + search, `https://${LANDING_HOST}`);
    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|images).*)"],
};