# Nipuna C. Gomes — Portfolio

A modern, dark-themed single-page portfolio built with **React** and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

---

## 🛠️ Personalise Your Content

All your personal data lives in one place — open `src/App.jsx` and update the `DATA` object at the top of the file:

```js
const DATA = {
  name: "Nipuna C. Gomes",
  title: "...",          // Your job title / headline
  email: "...",          // Your email address
  phone: "...",          // Your phone number
  github: "...",         // Your GitHub profile URL
  linkedin: "...",       // Your LinkedIn profile URL
  about: `...`,          // Your About Me bio
  skills: [...],         // Your skills list
  experience: [...],     // Work experience entries
  projects: [...],       // Project showcase entries
};
```

---

## 📦 Deploy to Netlify via GitHub

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/nipuna-portfolio.git
git push -u origin main
```

### Step 2 — Deploy on Netlify

1. Log in at [netlify.com](https://netlify.com)
2. Click **"Add new site" → "Import an existing project"**
3. Connect your GitHub account and select this repository
4. Netlify auto-detects `netlify.toml` — just click **"Deploy site"**
5. Your site will be live at `https://your-site-name.netlify.app` 🎉

### Custom Domain (optional)

In Netlify dashboard → **Domain settings** → add your custom domain and configure DNS.

---

## 📬 Contact Form

The contact form currently uses `mailto:` to open the user's email client.

For a fully serverless contact form (no backend needed), upgrade to **Netlify Forms**:

1. Add `data-netlify="true"` to the `<form>` element in `App.jsx`
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Netlify automatically captures submissions — view them in your Netlify dashboard.

---

## 🏗️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Tailwind CSS 3 | Utility-first styling |
| Lucide React | Icon library |
| Netlify | Hosting & CI/CD |

---

## 📄 License

MIT — feel free to adapt this for your own portfolio.
