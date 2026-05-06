/** Site-wide constants for metadata, sitemap, and forms. */

export const SITE_NAME = "Northsphere Studio";

export const SITE_DESCRIPTION =
  "Northsphere Studio is a product and brand studio for web experiences, mobile apps, UI/UX, and growth campaigns—built for clarity, speed, and measurable outcomes.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://northsphere.studio";

export const CONTACT_EMAIL = "hello@northsphere.studio";

/** FormSubmit AJAX endpoint — activate once at https://formsubmit.co with this inbox. */
export function getFormSubmitContactUrl() {
  return `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`;
}
