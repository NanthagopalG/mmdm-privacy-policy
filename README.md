# MMDM Privacy Policy website

Static, single-page privacy policy for MMDM. Vue 3 (Options API) + Vite, plain JavaScript, no backend.

```
index.html            Page title, meta description, favicon, Poppins font
public/favicon.svg
src/config.js         Editable business details (company, email, date, address, URL)
src/App.vue           The privacy policy content (13 sections)
src/style.css
vercel.json           Vite framework + /privacy-policy and /privacy rewrites
PLACEHOLDERS.md       Practices and details to confirm (not shown on the site)
```

The policy is served at `/`, `/privacy-policy` and `/privacy` (all show the same page).
Section links such as `/privacy-policy#data-retention-and-deletion` work when opened directly.

## Run locally

Requires Node.js 20.19+ (or 22.12+).

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:5173. To check the production build:

```bash
npm run build
```

```bash
npm run preview
```

Open http://localhost:4173.

## Before publishing

1. Fill in `src/config.js`. Empty values are hidden on the page, and `npm run build`
   prints a warning for each required value that is still empty.
2. Work through `PLACEHOLDERS.md`.

## Push to GitHub

Create an empty repository on github.com first (no README, no .gitignore), then from this folder:

```bash
git init -b main
```

```bash
git add .
```

```bash
git commit -m "MMDM privacy policy website"
```

```bash
git remote add origin https://github.com/<your-account>/mmdm-privacy-policy.git
```

```bash
git push -u origin main
```

Or, with the GitHub CLI installed and signed in (creates the repo and pushes in one step):

```bash
gh repo create mmdm-privacy-policy --private --source=. --remote=origin --push
```

## Deploy on Vercel

1. Sign in at https://vercel.com with your GitHub account.
2. **Add New… → Project**, then **Import** the `mmdm-privacy-policy` repository.
3. Vercel detects **Vite**. Leave the defaults (also set in `vercel.json`):
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Click **Deploy**. Your site is at `https://<project-name>.vercel.app`, and the Play Store
   privacy policy URL is `https://<project-name>.vercel.app/privacy-policy`.

No environment variables are needed.

## Automatic deployments

With the GitHub integration, this works out of the box:

- Every push to the **production branch** (`main` by default) builds and deploys to production.
- Pushes to other branches and pull requests get their own preview URLs.

To change the production branch: Project → **Settings → Environments → Production → Branch Tracking**
(older dashboards: **Settings → Git → Production Branch**).

To publish an update:

```bash
git add .
```

```bash
git commit -m "Update privacy policy"
```

```bash
git push
```

## Custom domain (later)

1. Vercel project → **Settings → Domains → Add**, enter e.g. `privacy.example.com` or `example.com`.
2. At your DNS provider, add the record Vercel shows:
   - Subdomain (`privacy.example.com`): `CNAME` → the value Vercel gives (e.g. `cname.vercel-dns.com`).
   - Apex domain (`example.com`): `A` record → the IP Vercel gives, or move nameservers to Vercel.
3. Wait for Vercel to show **Valid Configuration**; HTTPS is issued automatically.
4. Update `websiteUrl` in `src/config.js` if needed, and the privacy policy URL in Google Play Console.
