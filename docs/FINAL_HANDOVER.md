# Final Handover & Deployment Guide

**Portfolio:** Manoj Kumar Movva — Backend Developer (.NET)  
**Theme & Concept:** Incident Room  
**Production Ready:** Yes  

---

## 1. Quick Start / Running Locally

To run the development server:
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

To generate and test the production build:
```bash
npm run build
npm run preview
```
Open `http://localhost:4173/` in your browser.

---

## 2. Deploying to Production (Vercel, Netlify, GitHub Pages)

### Vercel Deployment (Recommended)
1. Push this repository to your GitHub account (`https://github.com/MovvaManojKumar/portfolio`).
2. Log in to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build` (or `tsc && vite build`).
5. Output Directory: `dist`.
6. Click **Deploy**.

### GitHub Pages / Netlify
- For Netlify: Set build command to `npm run build` and publish directory to `dist`.

---

## 3. Resume File Placement

To allow recruiters to directly download your latest official PDF:
1. Ensure your PDF is placed at:
   `public/resume/Manoj_Kumar_Movva.pdf`
2. Both "Download Resume" in the Hero and "Resume (PDF)" in the Contact & Navigation sections directly point to this route.

---

## 4. Key Architectural Highlights
- **Zero Heavy Runtime Overhead:** Pure CSS tokens + Motion for React. No bloated UI frameworks or heavy Three.js canvas overhead.
- **Accessible (a11y):** Full keyboard navigation, visible focus indicators, WCAG AA contrast compliance, reduced-motion toggle.
- **Incident Room Aesthetic:** Subtle live-telemetry monitor theme built specifically for an enterprise C# / .NET backend engineer.
