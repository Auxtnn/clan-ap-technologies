// NEXT_PUBLIC_ so these are inlined into client components; plain env vars are undefined in the browser.
export const DISCOVERY_CALL_URL = process.env.NEXT_PUBLIC_DISCOVERY_URL;
export const MAIN_SITE_URL = process.env.NEXT_PUBLIC_MAIN_URL;
export const FREE_AUDIT_URL = process.env.FREE_AUDIT_URL || process.env.NEXT_PUBLIC_DISCOVERY_URL;
