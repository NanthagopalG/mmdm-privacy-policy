<template>
  <a class="skip-link" href="#content">Skip to content</a>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="/" :aria-label="config.productName + ' privacy policy'">
        <span class="brand-mark">{{ config.productName }}</span>
        <span class="brand-sub">{{ config.productTagline }}</span>
      </a>
      <span class="header-label">Privacy</span>
    </div>
  </header>

  <section class="hero">
    <div class="container">
      <p class="eyebrow">{{ config.productName }} Legal</p>
      <h1>Privacy Policy</h1>
      <p class="lede">
        How {{ config.productName }} collects, uses and protects information when you use our Android mobile
        device management service.
      </p>
      <p v-if="config.lastUpdated" class="updated">Last updated {{ config.lastUpdated }}</p>
    </div>
  </section>

  <div id="content" class="container layout">
    <nav class="toc" aria-label="Contents">
      <details class="toc-mobile">
        <summary>Contents</summary>
        <ol>
          <li v-for="(s, i) in sections" :key="s.id">
            <a :href="'#' + s.id" @click="closeMobileToc"><span class="toc-num">{{ pad(i + 1) }}</span>{{ s.title }}</a>
          </li>
        </ol>
      </details>
      <div class="toc-desktop">
        <p class="toc-title">Contents</p>
        <ol>
          <li v-for="(s, i) in sections" :key="s.id">
            <a :href="'#' + s.id" :class="{ active: activeId === s.id }" :aria-current="activeId === s.id ? 'true' : null">
              <span class="toc-num">{{ pad(i + 1) }}</span>{{ s.title }}
            </a>
          </li>
        </ol>
      </div>
    </nav>

    <main class="policy">
      <!-- 1 -->
      <section :id="sections[0].id" class="policy-section">
        <h2><span class="num">01</span>{{ sections[0].title }}</h2>
        <p>
          {{ config.productName }} is an Android mobile device management (MDM) service for organizations. It lets an
          organization enroll its Android devices, apply settings and policies to them, choose the apps they show, and
          check their status from a web console.
        </p>
        <p>
          This Privacy Policy explains what information {{ provider }} ("we", "us") collects through
          {{ config.productName }}, how we use it, and the choices you have. It applies to people who create and manage
          an {{ config.productName }} account for their organization, and to people who use a device that their
          organization manages with {{ config.productName }}.
        </p>
        <p>{{ config.productName }} consists of:</p>
        <ul>
          <li><strong>The {{ config.productName }} web console and backend services</strong>, where organizations create accounts and manage their devices.</li>
          <li>
            <strong>The {{ config.productName }} Launcher app</strong> (<code>{{ config.launcherPackage }}</code>), the home
            screen installed on devices that an organization manages. It is installed by the organization through Google's
            Android management tools and is not intended for personal, unmanaged devices.
          </li>
        </ul>
      </section>

      <!-- 2 -->
      <section :id="sections[1].id" class="policy-section">
        <h2><span class="num">02</span>{{ sections[1].title }}</h2>

        <h3>Account information</h3>
        <p>When an organization creates an {{ config.productName }} account, we collect:</p>
        <ul>
          <li>the name, work email address, phone number and role of the person signing up and of each administrator they add;</li>
          <li>the organization's name.</li>
        </ul>
        <p>
          Administrators sign in with a one-time passcode sent to their email address; there are no passwords. Accounts and
          sign-in are handled through Amazon Cognito. We also record the role given to each administrator.
        </p>

        <h3>Device management information</h3>
        <p>When administrators use the console, we store the information they create there, including:</p>
        <ul>
          <li>device groups, device policies and their settings;</li>
          <li>the apps chosen for devices, and wallpaper or branding images uploaded for the Launcher;</li>
          <li>enrollment tokens used to add devices;</li>
          <li>commands sent to devices (such as lock, reboot, reset password, lost mode or clearing app data) and their status;</li>
          <li>an activity log of which administrator created or changed these items, and when.</li>
        </ul>

        <h3>Device information</h3>
        <p>
          Information about managed devices comes from the {{ config.productName }} Launcher app and from Google's
          Android Management API. Section 3 describes it in detail.
        </p>

        <h3>Technical information</h3>
        <ul>
          <li>
            Our backend services create technical logs when they handle requests. These can include account, device and
            request identifiers. Our logging is designed to leave out passwords, tokens and device secrets.
          </li>
          <li>
            The web console stores your session and display preferences in your browser's local storage so that you stay
            signed in and your settings are remembered.
          </li>
        </ul>
      </section>

      <!-- 3 -->
      <section :id="sections[2].id" class="policy-section">
        <h2><span class="num">03</span>{{ sections[2].title }}</h2>

        <h3>{{ config.productName }} Launcher app</h3>
        <p>
          The Launcher replaces the device's home screen. It shows the apps the organization allows, the organization's
          wallpaper and branding, and the device's battery, network and storage status. It uses the following Android
          permissions and does not ask the device user for any runtime permission.
        </p>
        <div class="table-wrap">
          <table>
            <thead><tr><th scope="col">Permission</th><th scope="col">Why it is used</th></tr></thead>
            <tbody>
              <tr><td>Internet</td><td>To register the device with the {{ config.productName }} backend, receive setting updates, and download the organization's wallpaper and branding images over HTTPS.</td></tr>
              <tr><td>Network state</td><td>To show whether the device is connected, and to wait for a connection before downloading.</td></tr>
              <tr><td>Set wallpaper</td><td>To apply the organization's wallpaper to the home and lock screens.</td></tr>
              <tr><td>Run at startup</td><td>To restore its settings and registration after the device restarts.</td></tr>
            </tbody>
          </table>
        </div>
        <p>The Launcher sends the following to the {{ config.productName }} backend:</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th scope="col">Information</th><th scope="col">Details</th></tr></thead>
            <tbody>
              <tr>
                <td>Device identifiers</td>
                <td>
                  The device identifier and enrollment identifiers set by the organization in the app's management
                  configuration, or, if no device identifier is set, the Android ID assigned to this app on the device.
                </td>
              </tr>
              <tr>
                <td>Push token</td>
                <td>The Firebase Cloud Messaging registration token, which lets the backend tell the Launcher that its settings changed.</td>
              </tr>
              <tr>
                <td>Device details</td>
                <td>Manufacturer, model and Android version.</td>
              </tr>
              <tr>
                <td>App status</td>
                <td>The Launcher's version, and which app is set as the default home screen.</td>
              </tr>
              <tr>
                <td>Timestamps</td>
                <td>When each report was created.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          It sends this information when it is first set up, after a restart or app update, when its configuration or
          push token changes, and every 12 hours.
        </p>
        <p>
          On the device, the Launcher reads the list of launchable apps (to show the ones the organization allows) and
          battery, network and storage status (to display them). This information stays on the device and is not sent
          to {{ config.productName }}.
        </p>
        <p>
          The Launcher does not access contacts, messages, call logs, location, camera, microphone, photos or files, does
          not send the list of installed apps, and does not collect hardware identifiers such as serial number, IMEI or
          phone number.
        </p>

        <h3>Information from Google's Android Management API</h3>
        <p>
          {{ config.productName }} manages devices through Google's Android Management API. The console shows the
          following device information from it: device state, management mode, applied policy and compliance details,
          enrollment, last status report and last policy sync times, brand, manufacturer, model, serial number, Android
          version and security patch level, and the apps installed through the device's policy.
        </p>
      </section>

      <!-- 4 -->
      <section :id="sections[3].id" class="policy-section">
        <h2><span class="num">04</span>{{ sections[3].title }}</h2>
        <p>
          The {{ config.productName }} Launcher does not request location permissions and does not collect device
          location. The {{ config.productName }} console and backend do not include a device location feature.
        </p>
        <p>
          Device policies applied through {{ config.productName }} can include settings that control the device's own
          location features. These settings change how the device behaves; they do not send the device's location to
          {{ config.productName }}.
        </p>
      </section>

      <!-- 5 -->
      <section :id="sections[4].id" class="policy-section">
        <h2><span class="num">05</span>{{ sections[4].title }}</h2>
        <p>We use information only to provide {{ config.productName }} to the organization that manages the device:</p>
        <ul>
          <li>create and verify accounts, sign administrators in, and control who can access each account;</li>
          <li>enroll devices and apply the policies, apps and commands the organization chooses;</li>
          <li>deliver the organization's Launcher settings, wallpaper and branding to its devices;</li>
          <li>show device status and policy compliance in the console;</li>
          <li>keep the service secure, investigate problems and prevent misuse.</li>
        </ul>
        <p>
          We do not sell personal information, and we do not use it for advertising. The {{ config.productName }}
          Launcher contains no advertising or analytics code.
        </p>
      </section>

      <!-- 6 -->
      <section :id="sections[5].id" class="policy-section">
        <h2><span class="num">06</span>{{ sections[5].title }}</h2>
        <p>The {{ config.productName }} backend runs on Amazon Web Services (AWS):</p>
        <ul>
          <li><strong>AWS AppSync and Amazon API Gateway</strong> receive requests from the console and the Launcher over HTTPS.</li>
          <li><strong>AWS Lambda</strong> runs the backend logic.</li>
          <li><strong>Amazon DynamoDB</strong> stores account, device, policy, group, enrollment and command records.</li>
          <li><strong>Amazon Cognito</strong> manages administrator accounts and sign-in.</li>
          <li><strong>Amazon S3</strong> stores files uploaded by administrators, such as wallpaper and branding images, which devices download through time-limited links.</li>
        </ul>
        <p>Security measures include:</p>
        <ul>
          <li>All information is sent over encrypted HTTPS connections; the Launcher has unencrypted connections disabled.</li>
          <li>Every console request must carry a valid sign-in token, and access is limited by role.</li>
          <li>Each organization's records are kept separate, and the backend only returns them to that organization's authorized administrators.</li>
          <li>The Launcher only downloads images from allowed locations, keeps its data in private app storage, and excludes it from Android backups.</li>
        </ul>
        <p>No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
      </section>

      <!-- 7 -->
      <section :id="sections[6].id" class="policy-section">
        <h2><span class="num">07</span>{{ sections[6].title }}</h2>
        <div class="providers">
          <div class="provider">
            <h3>Google Firebase Cloud Messaging</h3>
            <p>
              Delivers push messages from the backend to the Launcher. The Firebase SDK uses a registration token and a
              Firebase installation ID.
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase privacy</a>
            </p>
          </div>
          <div class="provider">
            <h3>Google Android Management API and Google Play</h3>
            <p>
              Applies policies and commands, installs the Launcher and other apps through Google's Android Device Policy
              app and managed Google Play, and provides device records to {{ config.productName }}.
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>
            </p>
          </div>
          <div class="provider">
            <h3>Amazon Web Services</h3>
            <p>
              Hosts the {{ config.productName }} backend, administrator sign-in, data storage and uploaded files.
              <a href="https://aws.amazon.com/privacy/" target="_blank" rel="noopener">AWS Privacy Notice</a>
            </p>
          </div>
        </div>
        <p>These providers process information on our behalf, under their own terms and privacy policies.</p>
      </section>

      <!-- 8 -->
      <section :id="sections[7].id" class="policy-section">
        <h2><span class="num">08</span>{{ sections[7].title }}</h2>
        <p>We do not sell or rent personal information. We share it only in the following ways:</p>
        <ul>
          <li>
            <strong>Within the organization.</strong> Device and status information is visible to the administrators of
            the organization that manages the device, according to their role.
          </li>
          <li>
            <strong>{{ provider }} staff.</strong> Our authorized staff may access account and device information when
            needed to provide support, operate the service and keep it secure.
          </li>
          <li>
            <strong>Service providers.</strong> The providers listed in Section 7 process information on our behalf to run
            {{ config.productName }}.
          </li>
          <li>
            <strong>Legal requirements.</strong> We may disclose information when required by law or to respond to a
            valid legal request.
          </li>
        </ul>
      </section>

      <!-- 9 -->
      <section :id="sections[8].id" class="policy-section">
        <h2><span class="num">09</span>{{ sections[8].title }}</h2>
        <ul>
          <li>
            <strong>Account and management information</strong> is kept while the organization uses
            {{ config.productName }}. To request deletion of an account or its information, email us at the address in
            Section 13.
          </li>
          <li>
            <strong>Devices</strong> can be removed by the organization's administrators in the console. Enrollment tokens
            can be revoked there too.
          </li>
          <li>
            <strong>On the device</strong>, the Launcher's data stays in private app storage until the app is
            uninstalled or the device is reset. Uninstalling the Launcher or resetting the device removes it.
          </li>
        </ul>
      </section>

      <!-- 10 -->
      <section :id="sections[9].id" class="policy-section">
        <h2><span class="num">10</span>{{ sections[9].title }}</h2>
        <p>
          Depending on where you live, you may have the right to access, correct or delete your personal information,
          to object to or restrict certain processing, and to withdraw consent. To make a request, contact us using the
          details in Section 13. We may need to verify your identity before acting on it.
        </p>
        <p>
          If you use a device that someone else manages with {{ config.productName }}, that account controls the
          device's settings and its management information. We may refer your request to that account, or help it
          respond.
        </p>
      </section>

      <!-- 11 -->
      <section :id="sections[10].id" class="policy-section">
        <h2><span class="num">11</span>{{ sections[10].title }}</h2>
        <p>
          {{ config.productName }} is not directed to children, and {{ config.productName }} accounts are not intended
          for children. We do not knowingly collect personal information from children to create accounts. If you
          believe a child has provided us with personal information, contact us and we will take appropriate action.
        </p>
      </section>

      <!-- 12 -->
      <section :id="sections[11].id" class="policy-section">
        <h2><span class="num">12</span>{{ sections[11].title }}</h2>
        <p>
          We may update this Privacy Policy when {{ config.productName }} or our practices change. The current version
          is always available on this page, with the date it was last updated.
        </p>
      </section>

      <!-- 13 -->
      <section :id="sections[12].id" class="policy-section">
        <h2><span class="num">13</span>{{ sections[12].title }}</h2>
        <p>
          For questions or requests about this Privacy Policy or your information, please contact us{{ hasContact ? ':' : '.' }}
        </p>
        <address v-if="hasContact" class="contact-card">
          <span v-if="config.companyName" class="contact-name">{{ config.companyName }}</span>
          <span v-if="config.companyAddress">{{ config.companyAddress }}</span>
          <a v-if="config.contactEmail" :href="'mailto:' + config.contactEmail">{{ config.contactEmail }}</a>
          <a v-if="config.websiteUrl" :href="config.websiteUrl" target="_blank" rel="noopener">{{ displayUrl }}</a>
        </address>
      </section>
    </main>
  </div>

  <footer class="site-footer">
    <div class="container footer-inner">
      <span>&copy; {{ year }} {{ provider }}</span>
      <a href="#top" @click.prevent="toTop">Back to top</a>
    </div>
  </footer>
</template>

<script>
import config from './config.js'

export default {
  name: 'App',
  data() {
    return {
      config,
      year: new Date().getFullYear(),
      activeId: 'introduction',
      observer: null,
      sections: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'information-we-collect', title: 'Information We Collect' },
        { id: 'device-information', title: 'Device Information and Permissions' },
        { id: 'location-information', title: 'Location Information' },
        { id: 'how-we-use-information', title: 'How We Use Information' },
        { id: 'data-storage-and-security', title: 'Data Storage and Security' },
        { id: 'third-party-services', title: 'Third-Party Services' },
        { id: 'data-sharing', title: 'Data Sharing' },
        { id: 'data-retention-and-deletion', title: 'Data Retention and Deletion' },
        { id: 'your-privacy-rights', title: 'Your Privacy Rights' },
        { id: 'childrens-privacy', title: "Children's Privacy" },
        { id: 'changes', title: 'Changes to This Policy' },
        { id: 'contact', title: 'Contact Us' },
      ],
    }
  },
  computed: {
    provider() {
      return config.companyName || config.productName
    },
    hasContact() {
      return Boolean(config.companyName || config.companyAddress || config.contactEmail || config.websiteUrl)
    },
    displayUrl() {
      return config.websiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    },
  },
  mounted() {
    document.title = `Privacy Policy | ${config.productName}`
    this.jumpToHash()
    this.watchSections()
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
  },
  methods: {
    pad(n) {
      return String(n).padStart(2, '0')
    },
    // Content renders after page load, so jump to a linked section (e.g. #data-sharing) manually.
    jumpToHash() {
      const id = decodeURIComponent(window.location.hash.slice(1))
      const target = id && document.getElementById(id)
      if (!target) return
      const jump = () => target.scrollIntoView({ behavior: 'instant', block: 'start' })
      jump()
      if (document.fonts) document.fonts.ready.then(jump)
    },
    // Highlights the section currently being read in the table of contents.
    watchSections() {
      if (!('IntersectionObserver' in window)) return
      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting)
          if (visible.length) this.activeId = visible[0].target.id
        },
        { rootMargin: '-20% 0px -70% 0px' },
      )
      this.sections.forEach((s) => {
        const el = document.getElementById(s.id)
        if (el) this.observer.observe(el)
      })
    },
    closeMobileToc(event) {
      const details = event.target.closest('details')
      if (details) details.open = false
    },
    toTop() {
      window.scrollTo({ top: 0 })
      history.replaceState(null, '', window.location.pathname)
    },
  },
}
</script>
