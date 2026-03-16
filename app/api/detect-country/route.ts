// app/api/detect-country/route.ts
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Get the real visitor IP from Vercel's headers
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "";

    // console.log("Visitor IP:", ip);

    const res = await fetch(`https://freeipapi.com/api/json/${ip}`);
    const data = await res.json();

    if (data.countryCode) {
      return Response.json({ country_code: data.countryCode });
    }

    // Fallback
    const res2 = await fetch(`https://ipapi.co/${ip}/json/`);
    const data2 = await res2.json();
    return Response.json({ country_code: data2.country_code });
  } catch (e) {
    return Response.json({ country_code: null }, { status: 500 });
  }
}
