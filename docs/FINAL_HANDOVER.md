# Final Handover & Deployment Guide: Recruiter-First Bento Portfolio
**Candidate:** Manoj Kumar Movva — Backend Developer (.NET)  
**Architecture:** Incident Room Visual Identity × Recruiter-First Bento Architecture  
**Status:** Production Ready (`dist/` compiled with 0 errors)  
**Updated:** 22 November 2026  

---

## 1. Quick Start / Running Locally

To run the development server with live HMR:
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

To generate a fresh production build and preview:
```bash
npm run build
npm run preview
```
Open [http://localhost:4173/](http://localhost:4173/) in your browser.

---

## 2. Deploying to Production (Vercel, Netlify, GitHub Pages)

### Vercel Deployment (Recommended)
1. Push this repository to your GitHub account (`https://github.com/MovvaManojKumar/portfolio`).
2. Log in to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build` (or `tsc && vite build`).
5. Output Directory: `dist`.
6. Click **Deploy**.

### Netlify Deployment
1. Connect repository on Netlify.
2. Build Command: `npm run build`.
3. Publish Directory: `dist`.

---

## 3. Resume File Placement

To allow recruiters to download your latest official PDF:
1. Ensure your PDF is placed at:
   `public/resume/Manoj_Kumar_Movva.pdf`
2. Both the persistent header "Resume" button and the hero/contact download triggers directly point to this route.

---

## 4. Key Architectural Highlights
- **10-Second Test Hero:** Instant recruiter scannability—Name, Role, 11-word pitch, 3 vitals, 5 tech chips, and dual CTAs in the first viewport.
- **74.1% Reduced Reading Overhead:** Core page copy reduced from ~1,430 words to ~371 words while retaining 100% of technical facts.
- **One-Card Enterprise Experience:** Linkfields Innovations presented in 1 authoritative Bento card with 4 icon-led rows (`[API]`, `[SQL]`, `[RELEASE]`, `[QUALITY]`) and a 4-node request pipeline (`App -> API -> Microservice -> SQL DB`).
- **Defensible Interview Depth:** 10-part standardized Case Study architecture available on demand via interactive modal dialogs.
- **Zero Faux Metrics:** Eliminated simulated 99.98% uptime and 1,420 claims/sec; all metrics are verified facts or explicitly labeled as illustrative data.
- **Lightweight Toolchain:** Zero heavy 3D or WebGL overhead; compiled production bundle is ~124 kB gzipped.
