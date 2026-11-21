# Project Audit: Manoj Kumar Movva Portfolio

**Date:** November 2026  
**Auditor:** Antigravity Engineering Agent  
**Target Role:** Backend Developer (.NET)  
**Concept:** Incident Room — Live System Control & Engineering Excellence  

---

## 1. Existing Project Structure & Environment

### Workspace State
- **Workspace Directory:** `c:\Users\MKumar\OneDrive - Rand Mutual Assurance\Documents\manoj_portfoilo`
- **Initial State:** Empty directory. No preexisting legacy frontend or conflicting boilerplate was present.
- **Node.js Environment:** v26.13.0
- **NPM Package Manager:** v11.20.0
- **Git Version:** v2.51.0 (Windows)
- **Host OS:** Windows 11

### Initialized Workspace Assets
The required agent workflows and quality governance rules have been set up in `.agents/`:
- `.agents/rules/portfolio-quality.md`: Persistent quality invariants.
- `.agents/skills/`: Domain skills for design, motion engineering, performance optimization, and QA.
- `.agents/workflows/`: Staged execution pipelines.

---

## 2. Technology & Dependency Architecture

To fulfill the Master Build Prompt and Design Specification with zero bloat and maximum performance, the following stack is designated:

| Layer | Selection | Rationale |
|---|---|---|
| **Build & Tooling** | Vite 6 / React 18/19 / TypeScript | Fast HMR, minimal bundle overhead, strong typing |
| **Styling & Theming** | CSS Variables + Modular CSS | Zero runtime CSS overhead, seamless Dark/Light token switching |
| **Motion Library** | `motion` (Motion for React) | First-class React support, gesture handling, smooth layout transitions |
| **Icons** | `lucide-react` | Tree-shakable clean SVG icons |
| **Typography** | Bricolage Grotesque (Display), Hanken Grotesk (Body), JetBrains Mono (Technical) | Web-font loaded with `font-display: swap` and fallback stacks |

---

## 3. Existing Components & Reusability Analysis
Because the workspace started empty, there is no technical debt or obsolete code to refactor. We have complete architectural freedom to implement clean, modern React patterns:
- Decoupled `src/data/` layer ensuring single source of truth for all resume facts.
- Reusable motion primitives (`Reveal`, `StaggerContainer`, `TiltCard`, `SpotlightCard`, `MagneticButton`, `AnimatedSectionHeading`).
- Semantic HTML5 section layout with comprehensive ARIA labels.

---

## 4. Key Requirements & Deliverables

1. **Incident Room Visual Metaphor:**
   - Dark slate palette (`#0E1620`) with amber accents (`#F5A524`), health indicator green (`#3DD68C`), and error red (`#FF5D5D`).
   - Clean light theme toggle support (`#F3F5F7` background, `#101820` text).
2. **Signature Hero Trace Animation:**
   - 2.8s coordinated sequence: Request -> INFO -> WARN -> ERROR stack frames -> Collapse -> Resolve into Manoj's name -> Health status green.
   - Always visible Skip button, plays once, immediately resolves when `prefers-reduced-motion` is enabled or toggled.
3. **Architecture Journey Visualization:**
   - Experience section SVG signal flow: `Client -> ASP.NET Core API -> Backend Service -> SQL Server`.
4. **Project Cards & Case Studies:**
   - Interactive 3D tilt + cursor spotlight on desktop pointer devices.
   - Comprehensive case study modals/panels covering Problem, Architecture, Database Design, Endpoints, and Lessons Learned for:
     1. RMA Insurance Policy Administration System (Professional Enterprise)
     2. Recruitment Tracker (Spring Boot / Java)
     3. Secure Attendance System (Machine Learning & Blockchain)
     4. Chef's Palace (Culinary Marketplace)
     5. MVM Scholarship Platform
5. **Interactive Utilities:**
   - Working 1-click email copy with instant visual confirmation.
   - Working resume download trigger linking to verified PDF.
   - Accessible mobile menu drawer.
   - Reduce motion toggle in addition to OS media query.

---

## 5. Potential Technical Risks & Mitigation Strategies

| Risk | Impact | Mitigation Strategy |
|---|---|---|
| **Animation Jank / CPU Thrashing** | Degraded scroll smoothness on low-end devices | Animate only `transform` and `opacity`. Disable 3D tilt on touch screens using `(hover: hover) and (pointer: fine)`. |
| **Layout Shift (CLS)** | Penalizes Core Web Vitals | Explicit aspect ratios and bounding boxes on hero trace, images, and card containers. |
| **Node 26 Package Compatibility** | Potential peer dependency warnings | Use standard stable releases of Vite and React with pinned lockfiles. |
| **Confidentiality / Privacy Leak** | Exposure of client data or personal sensitive info | Strictly enforce privacy rules: hide phone number by default, exclude DOB and home address, use generic architectural diagrams for RMA. |
