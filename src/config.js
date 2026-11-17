/**
 * Editable business information for the MMDM Privacy Policy.
 *
 * Any value that starts with "[" is treated as a placeholder and is shown
 * on the page in a muted style, e.g. "[Company legal name]".
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

  // Shows a "Pending final review" notice under the title. Set to false once
  // every placeholder and "to be confirmed" item is resolved.
  showDraftNotice: true,
}
