import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import siteConfig from './src/config.js'

// Build-time reminder only; never shown to website visitors.
const REQUIRED = ['companyName', 'contactEmail', 'lastUpdated']
const missing = REQUIRED.filter((key) => !String(siteConfig[key] || '').trim())
if (missing.length) {
  console.warn(`\n[privacy-policy] src/config.js is missing: ${missing.join(', ')}\n`)
}

export default defineConfig({
  plugins: [vue()],
})
