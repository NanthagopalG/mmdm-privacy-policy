/**
 * Business details shown on the MMDM Privacy Policy page.
 *
 * Fill in every value marked REQUIRED before relying on this policy.
 * Empty values are hidden on the page (nothing is invented in their place),
 * and `npm run build` prints a warning for each required value still empty.
 */
export default {
  productName: 'MMDM',
  productTagline: 'Android Mobile Device Management',

  // REQUIRED: legal name of the company that provides MMDM.
  // While empty, the policy refers to the provider as "MMDM".
  companyName: '',

  // REQUIRED: email address for privacy questions and requests.
  contactEmail: '',

  // Optional: registered business address.
  companyAddress: '',

  // Optional: company or product website, e.g. 'https://example.com'.
  websiteUrl: '',

  // REQUIRED: date this version takes effect, e.g. '1 December 2026'.
  lastUpdated: '',

  // Android package name of the MMDM Extension app (from the app source).
  extensionPackage: 'com.mmdm.amapi.extension',
}
