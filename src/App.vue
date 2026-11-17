<template>
  <a class="skip-link" href="#policy">Skip to policy</a>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/" aria-label="MMDM home">
        <span class="brand-mark">{{ config.productName }}</span>
        <span class="brand-sub">{{ config.productTagline }}</span>
      </a>
      <span class="header-label">Privacy Policy</span>
    </div>
  </header>

  <main id="policy" class="container layout">
    <aside class="toc" aria-label="Table of contents">
      <p class="toc-title">On this page</p>
      <ol>
        <li v-for="s in sections" :key="s.id"><a :href="'#' + s.id">{{ s.title }}</a></li>
      </ol>
    </aside>

    <article class="policy">
      <header class="policy-head">
        <p class="eyebrow">{{ config.productName }} · Legal</p>
        <h1>Privacy Policy</h1>
        <p class="meta">
          Effective date: <ConfigValue :value="config.effectiveDate" fallback="To be confirmed" />
        </p>
      </header>

      <aside v-if="config.showDraftNotice" class="notice" aria-label="Policy status">
        <svg class="notice-icon" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="8.25" fill="none" stroke="currentColor" stroke-width="1.5" />
          <path d="M10 9v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          <circle cx="10" cy="6.25" r="1" fill="currentColor" />
        </svg>
        <p>
          <strong>Pending final review.</strong> This policy describes how {{ config.productName }} currently
          handles information. Some details, marked “to be confirmed”, are still being finalized and will be
          updated on this page.
        </p>
      </aside>

      <!-- 1 -->
      <section :id="sections[0].id">
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how <ConfigValue :value="config.companyName" /> ("we", "us", "our")
          handles information in connection with {{ config.productName }}, an Android mobile device management
          product used by organizations to manage company-owned Android devices.
        </p>
        <p>{{ config.productName }} is made up of several components. This policy covers each of them and says which component handles which information:</p>
        <ul>
          <li>
            <strong>MMDM AMAPI Extension</strong> (Android app, package <code>{{ config.extensionPackage }}</code>):
            a companion app installed on managed devices by the organization's device policy. It installs and updates the
            MMDM Launcher and reports status to the organization's MMDM backend.
          </li>
          <li><strong>MMDM Launcher</strong> (Android app): the home screen app shown on managed devices.</li>
          <li>
            <strong>MMDM administration portal and backend services</strong>: the web portal and cloud services, hosted on
            Amazon Web Services (AWS), that organization administrators use to enroll and manage devices.
          </li>
        </ul>
        <p>
          {{ config.productName }} is intended for organizations, not for personal use. The organization that owns or manages
          a device (for example, your employer) decides to enroll it, chooses which policies apply, and configures the
          {{ config.productName }} apps. For device management data, the organization decides why and how the data is used,
          and we process it on the organization's behalf.
          <Confirm>our legal role (for example, "processor" / "service provider" for customer organizations, and "controller" for administrator account data) and the contract or data processing agreement that governs it</Confirm>
        </p>
        <p>
          Device management in {{ config.productName }} uses Google's Android Management API and Google's Android Device Policy
          app. Those are Google services and are covered by Google's own terms and privacy policy.
        </p>
      </section>

      <!-- 2 -->
      <section :id="sections[1].id">
        <h2>2. Information We Collect</h2>
        <p>The information handled depends on the component:</p>

        <h3>2.1 MMDM AMAPI Extension (on the managed device)</h3>
        <p>
          The Extension sends a limited set of device and app-status information to the organization's MMDM backend.
          Section 3 lists every field. In summary: a device identifier, a Firebase Cloud Messaging registration token,
          the device manufacturer, model and Android version, version and installation status of the Extension and the
          MMDM Launcher, and which app is set as the device's home screen.
        </p>
        <p>
          The current version of the Extension requests no runtime (user-granted) permissions. Its only Android permissions
          are internet access, network state and starting after the device boots. It does not access contacts, messages,
          call logs, location, camera, microphone, photos or files, and it does not collect a list of the apps installed on
          the device (it only checks the configured MMDM Launcher and which app is the current home screen app).
        </p>

        <h3>2.2 MMDM Launcher (on the managed device)</h3>
        <p>
          The current version of the MMDM Launcher does not request internet access and does not send information to
          {{ config.productName }} servers. To work as a home screen it uses the following on the device only:
        </p>
        <ul>
          <li>the list of launchable apps on the device, to display and search them;</li>
          <li>battery, network and storage status, to display them;</li>
          <li>an image the device user picks as wallpaper, if any, which it can also set as the system wallpaper;</li>
          <li>launcher preferences (such as pinned apps and layout) and settings the organization delivers through managed configuration.</li>
        </ul>

        <h3>2.3 Administration portal and backend services</h3>
        <p>When an organization uses {{ config.productName }}, our backend services handle:</p>
        <ul>
          <li>
            <strong>Administrator account information</strong> for people who sign in to the portal, managed through Amazon
            Cognito, such as <Confirm>exact fields, e.g. name, work email address, organization and role</Confirm>, and
            sign-in records used for security.
          </li>
          <li>
            <strong>Organization information</strong>, such as the organization's identifier and the Android enterprise
            linked to it through Google's Android Management API.
          </li>
          <li>
            <strong>Device management records</strong> created by administrators: device policies, enrollment tokens, and
            device commands (lock, reboot and wipe) with their status and <Confirm>whether the issuing administrator and time are recorded</Confirm>.
          </li>
          <li>
            <strong>Device information obtained from Google's Android Management API</strong> (described in Section 3.2).
          </li>
          <li>
            <strong>Status reports from the Extension</strong> (described in Section 3.1).
            <Confirm>where the backend stores Extension registrations and installation reports, and for how long</Confirm>
          </li>
          <li>
            <strong>Technical logs</strong> generated when the services run, which may include identifiers such as device
            and organization IDs. <Confirm>log contents and storage, e.g. Amazon CloudWatch Logs</Confirm>
          </li>
        </ul>
        <p>
          <Confirm>whether this website, the portal or any other component uses cookies, analytics or crash reporting, and if so which providers</Confirm>
        </p>
      </section>

      <!-- 3 -->
      <section :id="sections[2].id">
        <h2>3. Device Information</h2>

        <h3>3.1 Information the Extension sends to the MMDM backend</h3>
        <p>
          The Extension sends the following to the organization's configured MMDM backend address over HTTPS. It does so when
          it registers for messages (after it is assigned its role by Android Device Policy, after a restart or app update,
          when its configuration changes, when its messaging token changes, and every 12 hours as a safety check) and after
          each launcher installation attempt.
        </p>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th scope="col">Category</th><th scope="col">Details</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Device identifier</td>
                <td>
                  An identifier set by the organization in the app's managed configuration, or, if none is set, the Android ID
                  value assigned to this app on the device (on Android 8 and later this value is specific to the app and the device user).
                </td>
              </tr>
              <tr>
                <td>Messaging token</td>
                <td>The Firebase Cloud Messaging registration token, which lets the backend send commands to this device.</td>
              </tr>
              <tr>
                <td>Device details</td>
                <td>Device manufacturer, device model and Android API level.</td>
              </tr>
              <tr>
                <td>App details</td>
                <td>Extension package name and version; MMDM Launcher package name and installed version.</td>
              </tr>
              <tr>
                <td>Home screen state</td>
                <td>
                  Whether the MMDM Launcher is installed, whether it can act as a home screen, whether it is the default home
                  screen, and the package and activity name of the app that is currently the default home screen.
                </td>
              </tr>
              <tr>
                <td>Installation results</td>
                <td>
                  Command and request identifiers, requested version, installation status, result code, a short result message,
                  the Android Management API command identifier and the attempt number.
                </td>
              </tr>
              <tr>
                <td>Timestamps</td>
                <td>The time each report is created (UTC).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>3.2 Information obtained from Google's Android Management API</h3>
        <p>
          When an administrator views devices in the portal, the backend requests device records from Google's Android
          Management API. The portal is built to show only a defined set of fields: device ID, device and policy state,
          management mode, ownership, applied policy and compliance details, enrollment time, last status report and last
          policy sync time, enrollment token, brand, manufacturer, model, Android version and security patch level.
        </p>
        <p>
          Google's device records can contain additional information, such as hardware serial numbers, IMEI/MEID, MAC addresses
          or phone numbers. The portal is designed not to display these fields.
          <Confirm>whether the backend stores, caches or logs any part of the full Android Management API device record</Confirm>
        </p>

        <h3>3.3 Information kept on the device</h3>
        <ul>
          <li>
            The Extension keeps its own status (for example registration state and the last installation result) in
            app-private storage that other apps cannot read. Android backup and device-to-device transfer of this data are
            disabled.
          </li>
          <li>
            While a launcher installation is queued or retrying, the Extension temporarily stores the installation command,
            including a time-limited download link, in its app-private job database. Android's job scheduler removes finished
            job records after its retention period.
          </li>
          <li>
            The downloaded launcher installation file is deleted after the installation finishes.
          </li>
          <li>
            The Extension writes diagnostic messages to the device's system log. These messages are designed to hide
            credentials and shorten tokens and download links, but can include the device identifier.
          </li>
        </ul>
      </section>

      <!-- 4 -->
      <section :id="sections[3].id">
        <h2>4. Location Information</h2>
        <ul>
          <li>
            <strong>MMDM AMAPI Extension:</strong> the current version does not request location permissions and does not
            collect device location.
          </li>
          <li>
            <strong>MMDM Launcher:</strong> the current version does not request location permissions and does not collect
            device location.
          </li>
          <li>
            <strong>Portal and backend:</strong> the current version does not include a feature to collect or display device
            location. <Confirm>that no location data is collected by the backend or portal, and that no device-location feature is planned; if one is added, this section must be updated before release</Confirm>
          </li>
        </ul>
        <p>
          Device policies that an organization applies through Google's Android Management API can include settings that
          control the device's own location features. Such settings change how the device behaves; they do not send the
          device's location to {{ config.productName }}.
        </p>
      </section>

      <!-- 5 -->
      <section :id="sections[4].id">
        <h2>5. How We Use Information</h2>
        <p>We use the information described above to:</p>
        <ul>
          <li>deliver device management commands from the organization's backend to its devices through Firebase Cloud Messaging;</li>
          <li>install and update the organization's MMDM Launcher, and check the file's package name, version and signing certificate before installation;</li>
          <li>show administrators whether installations succeeded and whether the MMDM Launcher is the device's home screen;</li>
          <li>show administrators device status, policy compliance and basic device details in the portal;</li>
          <li>carry out device policies and commands that administrators issue;</li>
          <li>authenticate administrators and control what each administrator role can do;</li>
          <li>keep the service secure, investigate problems and prevent misuse; and</li>
          <li>meet legal obligations. <Confirm>any other purposes, e.g. billing, customer support, product improvement</Confirm></li>
        </ul>
        <p>
          The {{ config.productName }} Android apps contain no advertising code.
          <Confirm>We do not sell information and do not use it for advertising or profiling.</Confirm>
        </p>
      </section>

      <!-- 6 -->
      <section :id="sections[5].id">
        <h2>6. Device Management and Administrative Controls</h2>
        <p>
          {{ config.productName }} gives the organization's administrators control over its managed devices. Depending on the
          role assigned to them by the organization, administrators can:
        </p>
        <ul>
          <li>enroll devices and create enrollment tokens;</li>
          <li>create and apply device policies through Google's Android Management API, which can control apps, device settings, restrictions and the default home screen;</li>
          <li>view device status, compliance and the device details listed in Section 3;</li>
          <li>issue remote commands to lock or reboot a device, and, where enabled for the deployment, wipe a device (wiping erases data on the device and requires the administrator to have signed in recently);</li>
          <li>configure the Extension and the Launcher through managed configuration (for example the backend address, device identifier, allowed download locations and launcher appearance).</li>
        </ul>
        <p>
          The Extension is installed and configured by the organization's device policy. Device users cannot change its
          settings. If you use a managed device and have questions about what your organization can see or do, please contact
          your organization's IT administrator.
        </p>
      </section>

      <!-- 7 -->
      <section :id="sections[6].id">
        <h2>7. Data Sharing and Third-Party Services</h2>
        <p>Information is shared with, or processed by, the following:</p>
        <ul>
          <li>
            <strong>Your organization.</strong> Device information and status reports are available to the organization's
            authorized administrators in the portal.
          </li>
          <li>
            <strong>Google Firebase Cloud Messaging</strong> delivers messages from the backend to the Extension. To do so, the
            Firebase SDK in the Extension uses a registration token and a Firebase installation ID. See
            <a href="https://firebase.google.com/support/privacy" rel="noopener" target="_blank">Firebase privacy information</a>.
          </li>
          <li>
            <strong>Google Android Management API and Android Device Policy</strong> apply the organization's policies, perform
            launcher installation, and provide device records to the backend. See the
            <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">Google Privacy Policy</a>.
          </li>
          <li>
            <strong>Managed Google Play</strong> may be used to distribute the {{ config.productName }} apps to managed devices.
          </li>
          <li>
            <strong>Amazon Web Services</strong> hosts the backend, data storage and launcher installation files (see Section 8).
          </li>
          <li>
            <strong>Legal and safety reasons.</strong> <Confirm>when we may disclose information to comply with law, respond to lawful requests, or protect rights and safety</Confirm>
          </li>
          <li>
            <strong>Business transfers.</strong> <Confirm>whether information may transfer as part of a merger, acquisition or sale of assets</Confirm>
          </li>
        </ul>
        <p><Confirm>complete list of any other service providers or sub-processors (e.g. email, support, monitoring, payment providers)</Confirm></p>
      </section>

      <!-- 8 -->
      <section :id="sections[7].id">
        <h2>8. AWS Backend and Cloud Storage</h2>
        <p>The {{ config.productName }} backend runs on Amazon Web Services and uses:</p>
        <ul>
          <li><strong>Amazon API Gateway</strong> to receive HTTPS requests from the portal and the Extension;</li>
          <li><strong>AWS Lambda</strong> to run the backend logic;</li>
          <li><strong>Amazon DynamoDB</strong> to store organization, policy, enrollment token, device command and administrator profile records;</li>
          <li><strong>Amazon Cognito</strong> to manage administrator sign-in;</li>
          <li>
            <strong>Amazon S3</strong> to store MMDM Launcher installation files. Devices download these files over HTTPS using
            time-limited (pre-signed) links.
          </li>
        </ul>
        <p>
          The backend is configured for the AWS Asia Pacific (Mumbai) region (<code>ap-south-1</code>).
          <Confirm>production AWS region(s) for all services, including S3 and Cognito, and any cross-border data transfers and the safeguards used</Confirm>
        </p>
        <p>
          Records stored in the backend are separated by organization, and the backend only returns an organization's records
          to that organization's authorized administrators.
          <Confirm>encryption at rest settings for DynamoDB, S3 and logs</Confirm>
        </p>
      </section>

      <!-- 9 -->
      <section :id="sections[8].id">
        <h2>9. Data Retention</h2>
        <ul>
          <li>
            <strong>On the device:</strong> Extension data stays in app-private storage until it is replaced, the app is
            uninstalled, or the device is wiped. Temporary installation job records are removed by Android's job scheduler
            after it finishes with them, and downloaded installation files are deleted after installation.
          </li>
          <li>
            <strong>Device and status records in the backend:</strong>
            <Confirm>how long device registrations, messaging tokens and installation reports are kept, and when they are deleted (e.g. when a device is removed from MMDM)</Confirm>
          </li>
          <li>
            <strong>Device commands, policies and enrollment tokens:</strong> <Confirm>retention period</Confirm>
          </li>
          <li>
            <strong>Administrator accounts:</strong> <Confirm>retention after an account or organization is deleted</Confirm>
          </li>
          <li>
            <strong>Logs:</strong> <Confirm>log retention period</Confirm>
          </li>
          <li>
            <strong>Launcher installation files in S3:</strong> <Confirm>retention period</Confirm>
          </li>
        </ul>
        <p>
          The organization decides when devices are removed from management and when its data should be deleted.
          <Confirm>what happens to an organization's data when its subscription ends</Confirm>
        </p>
      </section>

      <!-- 10 -->
      <section :id="sections[9].id">
        <h2>10. Data Security</h2>
        <p>Measures in the current version include:</p>
        <ul>
          <li>The Extension communicates only over HTTPS; unencrypted (cleartext) network traffic is disabled.</li>
          <li>
            Before installing the MMDM Launcher, the Extension checks that the download comes from an allowed host and that the
            file's package name, version and signing certificate match the values configured by the organization.
          </li>
          <li>The Extension does not save backend credentials; it reads them from the organization's managed configuration when needed.</li>
          <li>Extension data is kept in app-private storage, and Android backups of it are disabled.</li>
          <li>Logs in the Extension and the backend are designed to redact credentials and sensitive identifiers.</li>
          <li>
            The portal uses role-based access for administrators, keeps each organization's records separate, and requires a
            recent sign-in before a device can be wiped.
          </li>
        </ul>
        <p>
          No method of transmission or storage is completely secure, and we cannot guarantee absolute security.
          <Confirm>incident response and breach notification commitments to customer organizations</Confirm>
        </p>
      </section>

      <!-- 11 -->
      <section :id="sections[10].id">
        <h2>11. User and Organization Rights</h2>
        <p>
          Depending on where you live, you may have rights under data protection law, such as the right to access, correct or
          delete personal information, or to object to certain processing.
        </p>
        <ul>
          <li>
            <strong>Device users:</strong> the organization that manages your device controls the device management data
            described in this policy, including when it is deleted. Please send requests about that data to your organization's
            IT administrator. If you contact us directly, we will refer your request to the organization or help it respond, as
            our agreement with the organization allows.
          </li>
          <li>
            <strong>Organizations and administrators:</strong> organizations can manage their devices and records through the
            portal and can contact us at <ConfigValue :value="config.contactEmail" type="email" /> for help with data requests.
            <Confirm>which deletion and export functions are available in the portal, and how organizations request full deletion</Confirm>
          </li>
        </ul>
        <p><Confirm>applicable laws and jurisdictions (e.g. India's DPDP Act, GDPR) and how to lodge a complaint with a regulator</Confirm></p>
      </section>

      <!-- 12 -->
      <section :id="sections[11].id">
        <h2>12. Children's Privacy</h2>
        <p>
          {{ config.productName }} is a business product for organizations and is not directed to children. We do not knowingly
          collect personal information from children through {{ config.productName }}.
          <Confirm>minimum age referenced (e.g. under 13, or under 18), and whether MMDM may be used by schools or on devices used by minors, in which case the organization is responsible for any required consents</Confirm>
        </p>
      </section>

      <!-- 13 -->
      <section :id="sections[12].id">
        <h2>13. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy when {{ config.productName }} or our practices change. The updated version will be
          posted on this page with a new effective date.
          <Confirm>whether and how customer organizations are notified of material changes, e.g. by email</Confirm>
        </p>
      </section>

      <!-- 14 -->
      <section :id="sections[13].id">
        <h2>14. Contact Information</h2>
        <p>If you have questions about this Privacy Policy, please contact:</p>
        <address class="contact-card">
          <strong><ConfigValue :value="config.companyName" /></strong><br />
          <ConfigValue :value="config.companyAddress" /><br />
          Email: <ConfigValue :value="config.contactEmail" type="email" /><br />
          Website: <ConfigValue :value="config.websiteUrl" type="url" />
        </address>
        <p>
          If you use a device managed by an organization, please contact your organization's IT administrator first for
          questions about how that organization uses {{ config.productName }}.
        </p>
      </section>
    </article>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <span>&copy; {{ year }} <ConfigValue :value="config.companyName" />. All rights reserved.</span>
      <a href="#policy">Back to top</a>
    </div>
  </footer>
</template>

<script>
import config from './config.js'
import Confirm from './components/Confirm.vue'
import ConfigValue from './components/ConfigValue.vue'

export default {
  name: 'App',
  components: { Confirm, ConfigValue },
  data() {
    return {
      config,
      year: new Date().getFullYear(),
      sections: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'information-we-collect', title: 'Information We Collect' },
        { id: 'device-information', title: 'Device Information' },
        { id: 'location-information', title: 'Location Information' },
        { id: 'how-we-use-information', title: 'How We Use Information' },
        { id: 'device-management', title: 'Device Management and Administrative Controls' },
        { id: 'data-sharing', title: 'Data Sharing and Third-Party Services' },
        { id: 'aws-backend', title: 'AWS Backend and Cloud Storage' },
        { id: 'data-retention', title: 'Data Retention' },
        { id: 'data-security', title: 'Data Security' },
        { id: 'your-rights', title: 'User and Organization Rights' },
        { id: 'childrens-privacy', title: "Children's Privacy" },
        { id: 'changes', title: 'Changes to This Privacy Policy' },
        { id: 'contact', title: 'Contact Information' },
      ],
    }
  },
  mounted() {
    document.title = `${config.productName} Privacy Policy`
    // Content renders after page load, so jump to a linked section (e.g. #data-retention) manually.
    const id = decodeURIComponent(window.location.hash.slice(1))
    const target = id && document.getElementById(id)
    if (target) {
      const jump = () => target.scrollIntoView({ behavior: 'instant', block: 'start' })
      jump()
      // Re-align once web fonts have loaded and changed the layout.
      if (document.fonts) document.fonts.ready.then(jump)
    }
  },
}
</script>
