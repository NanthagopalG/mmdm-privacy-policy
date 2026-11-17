# To confirm before relying on this policy

Nothing here is shown on the website. The policy states only practices verified in the MMDM
source code; the items below could not be verified and are either left out of the policy or
worded conservatively. Confirm each one and update `src/App.vue` if needed.

## 1. Business details (`src/config.js`)

Empty values are hidden on the page; `npm run build` warns while required ones are empty.

- [ ] `companyName` (required). Until set, the policy calls the provider "MMDM". Source code mentions "Mobil80"/"Mobi80" (MMDM-BMS README); confirm the exact legal name.
- [ ] `contactEmail` (required). Until set, the Contact Us section has no contact method, and Sections 9 and 10 point to it.
- [ ] `lastUpdated` (required).
- [ ] `companyAddress`, `websiteUrl` (optional).

## 2. Statements in the policy that are commitments, not code facts

- [ ] **Data Sharing:** "We may disclose information when required by law or to respond to a valid legal request."
- [ ] **Data Sharing:** staff access for support, operations and security (based on the `platform_admin` role in the backend and the internal MMDM-BMS console).
- [ ] **Retention:** "Account and management information is kept to provide MMDM to the account it belongs to", and that deletion requests are handled by contacting you. There is no self-service account deletion in the backend.
- [ ] **Your Privacy Rights:** that you will handle access/correction/deletion requests and verify identity.
- [ ] **Children's Privacy:** "not directed to children", and that you will act if told a child provided information. No minimum age is stated.
- [ ] **Changes:** only "posted on this page". Add email notice to account holders if you will do that.

## 3. Practices left out because they could not be verified

- [ ] **AWS region.** The backend is configured for `ap-south-1` (Mumbai), but it is not deployed yet. Confirm the production region(s) and any cross-border transfers before adding them.
- [ ] **Encryption at rest** (DynamoDB, S3, logs). The policy only claims HTTPS from the Extension app and API Gateway.
- [ ] **Specific retention periods** for accounts, devices, commands, logs and S3 installation files, and what happens after an account is closed.
- [ ] **Extension status storage.** The `/v1/extension/devices/register` and `/launcher-install-status` endpoints are not in the `MMDM-Backend` repo, so where Extension reports are stored is not verified.
- [ ] **Full Android Management API device records.** Whether the backend stores or logs serial, IMEI, MAC or phone number (the console only displays an allowlist).
- [ ] **Where technical logs go and how long they are kept** (e.g. CloudWatch Logs).
- [ ] **"We do not sell personal information / use it for advertising."** Only "the Android apps contain no advertising code" is stated (verified).
- [ ] **Billing, payments, support tickets and sales/CRM data.** MMDM-BMS has these modules with mock data only. If they go live, add them to Section 2 and list the payment provider in Section 7.
- [ ] **Cookies or analytics** on this website or the console. None were found in the code. The website loads the Poppins font from Google Fonts.
- [ ] **Managed Google Play** distribution of the apps (removed from Third-Party Services until confirmed).

## Facts taken from source code (re-check when the apps change)

- Extension (`com.mmdm.amapi.extension`): permissions INTERNET, ACCESS_NETWORK_STATE, RECEIVE_BOOT_COMPLETED only; data sent in `StatusReporter.kt`; device ID from `DeviceIdProvider.kt`; Firebase Messaging only; backups disabled; cleartext disabled.
- Launcher: permissions ACCESS_NETWORK_STATE and SET_WALLPAPER only; no INTERNET permission.
- Console sign-up (`SignUpView.vue`): organization/account name, contact name, role, email, phone; email verified by code; sign-in by email one-time passcode (no password); Amazon Cognito.
- Backend: API Gateway + Lambda + DynamoDB + Cognito; device field allowlist in `deviceService.js`; LOCK/REBOOT/WIPE commands, wipe needs recent sign-in; `createdBy`/`updatedBy` recorded; enrollment tokens can be revoked; logger redacts secrets and device identifiers.
