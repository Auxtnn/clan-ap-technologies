// Shared by the Free QA Audit form (client) and /api/audit (server) so both
// sides enforce exactly the same rules.

export type AuditField = "email" | "company" | "website";
export type AuditValues = Record<AuditField, string>;
export type AuditErrors = Record<AuditField, string>;

export const EMPTY_AUDIT_ERRORS: AuditErrors = {
  email: "",
  company: "",
  website: "",
};

export const AUDIT_LIMITS = {
  email: 254,
  company: 100,
  website: 2048,
};

export const validateAuditEmail = (raw: string): string => {
  const value = raw.trim();
  if (!value) return "Please enter your work email.";
  if (value.length > AUDIT_LIMITS.email)
    return "Email address is too long.";
  const validFormat =
    /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]*[a-zA-Z0-9_%+-])?@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/.test(
      value
    );
  if (!validFormat || /\.{2,}/.test(value))
    return "Please enter a valid email address (e.g. name@company.com).";
  return "";
};

export const validateAuditCompany = (raw: string): string => {
  const value = raw.trim();
  if (!value) return "Please enter your product or company name.";
  if (value.length < 2)
    return "Product or company name must be at least 2 characters.";
  if (value.length > AUDIT_LIMITS.company)
    return `Product or company name must be ${AUDIT_LIMITS.company} characters or fewer.`;
  // Must start with a letter/number and may only contain characters that
  // realistically appear in business names.
  if (!/^[\p{L}\p{N}][\p{L}\p{N}\s&.,'’()+\-!@/:#]*$/u.test(value))
    return "Please enter a valid product or company name.";
  return "";
};

export const validateAuditWebsite = (raw: string): string => {
  const value = raw.trim();
  if (!value) return "Please enter your website or app link.";
  if (!/^https:\/\//i.test(value)) return "Please enter URL with https://";
  if (value.length > AUDIT_LIMITS.website) return "URL is too long.";
  if (/\s/.test(value))
    return "Please enter a valid URL (e.g. https://example.com).";

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return "Please enter a valid URL (e.g. https://example.com).";
  }

  const host = url.hostname;
  const validHost =
    /^(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,63}$/i.test(host);
  if (url.protocol !== "https:" || !validHost || url.username || url.password)
    return "Please enter a valid URL (e.g. https://example.com).";
  return "";
};

export const validateAudit = (values: AuditValues): AuditErrors => ({
  email: validateAuditEmail(values.email),
  company: validateAuditCompany(values.company),
  website: validateAuditWebsite(values.website),
});

export const hasAuditErrors = (errors: AuditErrors) =>
  Object.values(errors).some(Boolean);

export const normalizeAudit = (values: AuditValues): AuditValues => ({
  email: values.email.trim().toLowerCase(),
  company: values.company.trim().replace(/\s+/g, " "),
  website: values.website.trim(),
});
