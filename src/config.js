/**
 * Editable business information for the MMDM Privacy Policy.
 *
 * Any value that starts with "[" is treated as a placeholder and is
 * highlighted on the page so it can't be published by accident.
 * Replace every placeholder before going live, then set
 * showDraftNotice to false.
 */
export default {
  companyName: '[COMPANY LEGAL NAME]',
  productName: 'MMDM',
  productTagline: 'Android Mobile Device Management',
  contactEmail: '[PRIVACY CONTACT EMAIL]',
  websiteUrl: '[COMPANY WEBSITE URL]',
  effectiveDate: '[EFFECTIVE DATE, e.g. 1 December 2026]',
  companyAddress: '[COMPANY REGISTERED ADDRESS]',

  // Android package names covered by this policy (taken from the app source).
  extensionPackage: 'com.mmdm.amapi.extension',

  // Shows a banner explaining that highlighted text still needs confirmation.
  showDraftNotice: true,
}
