# Placeholders to confirm before publishing

Everything shown on the site as a muted "[Placeholder]" or "(To be confirmed: …)" is listed here. Business details live in
`src/config.js`. The rest are `<Confirm>` tags in `src/App.vue`: replace each with final
wording (or delete it) once confirmed. When none are left, set `showDraftNotice: false`.

Quick check that none remain: `grep -n "<Confirm>" src/App.vue` and `grep -n "'\[" src/config.js`.

## src/config.js

1. `companyName`: company legal name
2. `contactEmail`: privacy contact email
3. `websiteUrl`: company website URL
4. `effectiveDate`: policy effective date
5. `companyAddress`: registered address

## src/App.vue (by section)

1. **Introduction**: your legal role (processor/service provider for customer device data; controller for admin account data?) and the governing agreement/DPA.
2. **Information We Collect**
   - Exact administrator account fields held in Cognito/DynamoDB (name, email, organization, role?).
   - Whether the issuing administrator and time are recorded for device commands.
   - Where the backend stores Extension registrations and install reports, and for how long. The `/v1/extension/devices/register` and `/launcher-install-status` endpoints are **not** in the `MMDM-Backend` repo reviewed.
   - Technical log contents and storage (e.g. CloudWatch Logs).
   - Cookies, analytics or crash reporting on this website, the portal or any component.
3. **Device Information**: whether the backend stores, caches or logs any part of the full Android Management API device record (serials, IMEI, MAC, phone number).
4. **Location Information**: confirm no location collection in backend/portal and none planned.
5. **How We Use Information**
   - Any other purposes (billing, support, product improvement).
   - "We do not sell information and do not use it for advertising or profiling."
6. **Data Sharing**
   - Disclosure for legal/safety reasons.
   - Business transfers (merger/acquisition).
   - Full list of other service providers/sub-processors.
7. **AWS Backend**
   - Production AWS region(s) for all services (code is configured for `ap-south-1`, Mumbai), cross-border transfers and safeguards.
   - Encryption-at-rest settings for DynamoDB, S3 and logs.
8. **Data Retention**: device records/tokens/install reports; commands, policies, enrollment tokens; admin accounts; logs; S3 launcher files; data after subscription ends.
9. **Data Security**: incident response and breach notification commitments.
10. **Rights**
    - Deletion/export functions available in the portal and how organizations request full deletion.
    - Applicable laws (e.g. India DPDP Act, GDPR) and how to complain to a regulator.
11. **Children's Privacy**: minimum age stated, and whether schools / minors' devices are supported.
12. **Changes**: how customer organizations are notified of material changes.

## Facts taken from source code (re-check if the apps change)

- Extension (`com.mmdm.amapi.extension`): permissions INTERNET, ACCESS_NETWORK_STATE, RECEIVE_BOOT_COMPLETED only; fields sent are in `StatusReporter.kt`; device ID from `DeviceIdProvider.kt`; FCM only (no Analytics/Crashlytics); backups disabled.
- Launcher: permissions ACCESS_NETWORK_STATE and SET_WALLPAPER only; no INTERNET permission, no network libraries.
- Backend: API Gateway + Lambda + DynamoDB + Cognito, `ap-south-1`; device DTO allowlist in `deviceService.js`; LOCK/REBOOT/WIPE commands; WIPE can be disabled and needs recent sign-in. The backend README says it is "foundation only" and not yet deployed with real AMAPI access, so re-check this policy against the production build.
