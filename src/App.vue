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
          {{ config.productName }} is an Android mobile device management (MDM) service. It lets you enroll Android
          devices, apply settings and policies to them, install apps, and check their status from a web console.
        </p>
        <p>
          This Privacy Policy explains what information {{ provider }} ("we", "us") collects through
          {{ config.productName }}, how we use it, and the choices you have. It applies to everyone who uses
          {{ config.productName }}: people who create and manage an {{ config.productName }} account, whether for
          themselves or for a business, and people who use a device that is managed with {{ config.productName }}.
        </p>
        <p>{{ config.productName }} consists of:</p>
        <ul>
          <li><strong>The {{ config.productName }} web console and backend services</strong>, where accounts are created and devices are managed.</li>
          <li><strong>The {{ config.productName }} Extension app</strong> (<code>{{ config.extensionPackage }}</code>), installed on managed devices to install the {{ config.productName }} Launcher and report its status.</li>
          <li><strong>The {{ config.productName }} Launcher app</strong>, the home screen shown on managed devices.</li>
        </ul>
      </section>

      <!-- 2 -->
      <section :id="sections[1].id" class="policy-section">
        <h2><span class="num">02</span>{{ sections[1].title }}</h2>

        <h3>Account information</h3>
        <p>When you create an {{ config.productName }} account, we collect:</p>
        <ul>
          <li>your name, email address, phone number and role or job title;</li>
          <li>the name you give your account or organization.</li>
        </ul>
        <p>
          You can register with any email address you control. We send a one-time code to that address to verify it,
          and you sign in with a one-time passcode sent to the same address. Accounts and sign-in are handled through
          Amazon Cognito. We also record the role and permissions given to each person who can access the account.
        </p>

        <h3>Device management information</h3>
        <p>When you use the console, we store the information you create there, including:</p>
        <ul>
          <li>device policies and their settings;</li>
          <li>enrollment tokens used to add devices;</li>
          <li>commands sent to devices (lock, reboot and wipe) and their status;</li>
          <li>which user created or changed these items, and when.</li>
        </ul>

        <h3>Device information</h3>
        <p>
          Information about managed devices comes from the {{ config.productName }} Extension app and from Google's
          Android Management API. Section 3 describes it in detail.
        </p>

        <h3>Technical information</h3>
        <ul>
          <li>
            Our backend services create technical logs when they handle requests. These can include account, device and
            request identifiers. Our logging is designed to remove passwords, tokens and sensitive device identifiers.
          </li>
          <li>
            The web console stores your session and display preferences in your browser's local and session storage so
            that you stay signed in and your settings are remembered.
          </li>
        </ul>
      </section>

      <!-- 3 -->
      <section :id="sections[2].id" class="policy-section">
        <h2><span class="num">03</span>{{ sections[2].title }}</h2>

        <h3>{{ config.productName }} Extension app</h3>
        <p>The Extension app uses the following Android permissions. It does not ask the device user for any runtime permission.</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th scope="col">Permission</th><th scope="col">Why it is used</th></tr></thead>
            <tbody>
              <tr><td>Internet</td><td>To receive commands, download the {{ config.productName }} Launcher and report status.</td></tr>
              <tr><td>Network state</td><td>To wait for a network connection before sending or downloading.</td></tr>
              <tr><td>Run at startup</td><td>To resume registration and pending work after the device restarts.</td></tr>
            </tbody>
          </table>
        </div>
        <p>The Extension app sends the following to the {{ config.productName }} backend:</p>
        <div class="table-wrap">
          <table>
            <thead><tr><th scope="col">Information</th><th scope="col">Details</th></tr></thead>
            <tbody>
              <tr>
                <td>Device identifier</td>
                <td>An identifier set in the device's management configuration, or, if none is set, the Android ID assigned to this app on the device.</td>
              </tr>
              <tr>
                <td>Push token</td>
                <td>The Firebase Cloud Messaging registration token, which lets the backend send commands to the device.</td>
              </tr>
              <tr>
                <td>Device details</td>
                <td>Manufacturer, model and Android version.</td>
              </tr>
              <tr>
                <td>App status</td>
                <td>Versions of the Extension and the {{ config.productName }} Launcher, and whether the Launcher is installed and set as the default home screen, including the name of the current default home screen app.</td>
              </tr>
              <tr>
                <td>Installation results</td>
                <td>Command identifiers, requested version, installation status, result code and a short result message.</td>
              </tr>
              <tr>
                <td>Timestamps</td>
                <td>When each report was created.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          It sends this information when it registers for push messages (after setup, after a restart or app update,
          when its configuration or push token changes, and every 12 hours) and after each installation attempt.
        </p>
        <p>
          The Extension app does not access contacts, messages, call logs, location, camera, microphone, photos or files,
          and does not collect a list of the apps installed on the device. It only checks the {{ config.productName }}
          Launcher and which app is the default home screen.
        </p>

        <h3>{{ config.productName }} Launcher app</h3>
        <p>
          The Launcher uses the network state and set wallpaper permissions. It does not have internet access and does not
          send information to {{ config.productName }}. On the device, it uses the list of installed apps (to display
          them), battery, network and storage status (to display them), a wallpaper image the device user picks, and its
          own settings.
        </p>

        <h3>Information from Google's Android Management API</h3>
        <p>
          {{ config.productName }} manages devices through Google's Android Management API. The console shows the
          following device information from it: device state, management mode, ownership type, applied policy and
          compliance details, enrollment, last status report and last policy sync times, brand, manufacturer, model,
          Android version and security patch level.
        </p>
        <p>
          Google's device records can also include hardware identifiers such as serial number, IMEI, MAC address or phone
          number. The {{ config.productName }} console is designed not to display these.
        </p>
      </section>

      <!-- 4 -->
      <section :id="sections[3].id" class="policy-section">
        <h2><span class="num">04</span>{{ sections[3].title }}</h2>
        <p>
          The {{ config.productName }} Extension and Launcher apps do not request location permissions and do not collect
          device location. The {{ config.productName }} console and backend do not include a device location feature.
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
        <p>We use information to:</p>
        <ul>
          <li>create and verify your account, sign you in, and control who can access it;</li>
          <li>enroll devices and apply the policies and commands you choose;</li>
          <li>send commands to devices through push notifications;</li>
          <li>install and update the {{ config.productName }} Launcher, after checking the file's package name, version and signing certificate;</li>
          <li>show device status, policy compliance and installation results in the console;</li>
          <li>keep the service secure, investigate problems and prevent misuse.</li>
        </ul>
        <p>The {{ config.productName }} Android apps do not contain advertising code.</p>
      </section>

      <!-- 6 -->
      <section :id="sections[5].id" class="policy-section">
        <h2><span class="num">06</span>{{ sections[5].title }}</h2>
        <p>The {{ config.productName }} backend runs on Amazon Web Services (AWS):</p>
        <ul>
          <li><strong>Amazon API Gateway</strong> receives requests from the console and the Extension app over HTTPS.</li>
          <li><strong>AWS Lambda</strong> runs the backend logic.</li>
          <li><strong>Amazon DynamoDB</strong> stores account, policy, enrollment token and device command records.</li>
          <li><strong>Amazon Cognito</strong> manages accounts and sign-in.</li>
          <li><strong>Amazon S3</strong> stores {{ config.productName }} Launcher installation files, which devices download through time-limited links.</li>
        </ul>
        <p>Security measures include:</p>
        <ul>
          <li>The Extension app only communicates over HTTPS; unencrypted connections are disabled.</li>
          <li>Every console request must carry a valid sign-in token, and access is limited by role.</li>
          <li>Each account's records are kept separate, and the backend only returns them to that account's authorized users.</li>
          <li>Wiping a device requires a recent sign-in.</li>
          <li>The Extension app only installs the {{ config.productName }} Launcher from allowed locations and only when its signing certificate matches the configured value.</li>
          <li>The Extension app keeps its data in private app storage, excludes it from Android backups, and does not save backend credentials.</li>
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
              Delivers push messages from the backend to the Extension app. The Firebase SDK uses a registration token and a
              Firebase installation ID.
              <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">Firebase privacy</a>
            </p>
          </div>
          <div class="provider">
            <h3>Google Android Management API</h3>
            <p>
              Applies policies and commands, installs apps through Google's Android Device Policy app, and provides device
              records to {{ config.productName }}.
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google Privacy Policy</a>
            </p>
          </div>
          <div class="provider">
            <h3>Amazon Web Services</h3>
            <p>
              Hosts the {{ config.productName }} backend, account sign-in, data storage and installation files.
              <a href="https://aws.amazon.com/privacy/" target="_blank" rel="noopener">AWS Privacy Notice</a>
            </p>
          </div>
        </div>
        <p>These providers process information under their own terms and privacy policies.</p>
      </section>

      <!-- 8 -->
      <section :id="sections[7].id" class="policy-section">
        <h2><span class="num">08</span>{{ sections[7].title }}</h2>
        <p>We share information in the following ways:</p>
        <ul>
          <li>
            <strong>{{ provider }} staff.</strong> Our authorized staff may access account and device information when
            needed to provide support, operate the service and keep it secure.
          </li>
          <li>
            <strong>Within your account.</strong> Device and status information is visible to the users of the
            {{ config.productName }} account that manages the device, according to their role.
          </li>
          <li>
            <strong>Service providers.</strong> The providers listed in Section 7 process information to run
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
            <strong>Account and management information</strong> is kept to provide {{ config.productName }} to the account
            it belongs to. To request deletion of your account or its information, contact us using the details in
            Section 13.
          </li>
          <li>
            <strong>Enrollment tokens</strong> can be revoked by account users in the console.
          </li>
          <li>
            <strong>On the device</strong>, the Extension app's data stays in private app storage until it is replaced,
            the app is uninstalled or the device is wiped. Temporary installation records are removed automatically
            some time after the work is finished, and downloaded installation files are deleted after installation completes.
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
