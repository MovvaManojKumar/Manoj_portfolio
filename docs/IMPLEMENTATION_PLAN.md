# Implementation Plan: Manoj Kumar Movva Portfolio

**Concept:** Incident Room — Real-time Telemetry & Backend Engineering  
**Technology:** React 19 / Vite / TypeScript / CSS Modules / Motion for React  
**Author:** Lead Engineering Agent  

---

## Phase Breakdown & Execution Milestones

### Phase 1: Workspace Audit & Fact Verification ✅ (Current)
- [x] Inspect directory, Node/NPM/Git runtime tools.
- [x] Create persistent workspace governance rules (`.agents/rules/portfolio-quality.md`).
- [x] Establish agent skills (`portfolio-design`, `motion-engineering`, `performance-optimization`, `portfolio-qa`).
- [x] Cross-verify facts from Resume (`Manoj_Kumar_Movva.pdf`) and Naukri profile.
- [x] Establish privacy boundaries (redact private address, DOB, CTC, obfuscate phone).
- [x] Produce `docs/PROJECT_AUDIT.md`, `docs/CONTENT_VERIFICATION.md`, and `docs/IMPLEMENTATION_PLAN.md`.
- [x] **STOP & Present Plan for User Review.**

---

### Phase 2: Design Direction & System Tokens
- [ ] Define CSS design tokens for Dark and Light themes:
  - Background: `#0E1620` (Dark) / `#F3F5F7` (Light)
  - Surface: `#16212E` (Dark) / `#FFFFFF` (Light)
  - Border: `#2A3A4D` (Dark) / `#D5DCE3` (Light)
  - Text Primary: `#E8EEF4` (Dark) / `#101820` (Light)
  - Text Muted: `#93A4B5` (Dark) / `#5A6B7C` (Light)
  - Accent Amber: `#F5A524` (Dark) / `#B86E00` (Light)
  - Health Green: `#3DD68C` (Dark) / `#11805A` (Light)
  - Incident Red: `#FF5D5D` (Dark) / `#C2332E` (Light)
- [ ] Typography integration:
  - Bricolage Grotesque (Display & Headings)
  - Hanken Grotesk (Body & Prose)
  - JetBrains Mono (Technical logs, metrics, code chips)
- [ ] Document design specification and token dictionary in `docs/DESIGN_DIRECTION.md`.

---

### Phase 3: Static Implementation & Architecture
- [ ] Scaffold React + Vite + TypeScript application in workspace.
- [ ] Implement typed data repository (`src/data/`):
  - `profile.ts`: Verified identity, location, contact, availability.
  - `experience.ts`: Linkfields Innovations (RMA project), Soarswell, Smart Internz.
  - `skills.ts`: SQL query metaphor grouping .NET Core, SQL Server, DevOps, QA.
  - `projects.ts`: 5 verified projects with in-depth technical case studies.
  - `education.ts`: B.Tech PVPSIT, Narayana JC, Flora School, competitive achievements.
  - `learning.ts`: Ongoing AI/ML, Semantic Kernel, RAG learning paths.
- [ ] Construct structural components:
  - Navigation bar with MK monogram, section links, theme toggle, reduce-motion toggle.
  - Hero section (static fallback state fully readable).
  - About section with incident telemetry status chips.
  - Experience timeline with Linkfields / RMA architecture overview.
  - Skills terminal displaying data as structured query outputs.
  - Projects grid with case-study trigger action.
  - Currently Learning section.
  - Education & Achievements timeline.
  - Contact section with copy email and resume download.
  - Footer with build timestamp, status indicator, and privacy notices.
- [ ] Verify static responsive layout (Desktop, Tablet, Mobile) and `npm run build`.

---

### Phase 4: Core Motion Foundation
- [ ] Install `motion` (`motion/react`).
- [ ] Implement reusable motion primitives:
  - `Reveal`: Opacity 0 -> 1, Y 20px -> 0, duration 500ms, ease-out.
  - `StaggerContainer`: Sequential staggered reveals (80ms interval).
  - `AnimatedSectionHeading`: Clean overflow-hidden text mask reveal.
  - `MagneticButton`: Restrained pointer-attraction for desktop pointer devices.
  - `MotionPreferenceProvider`: Seamless handling of system `prefers-reduced-motion` and user manual toggle.
- [ ] Verify smooth page load without layout shift.

---

### Phase 5: Signature Effects
- [ ] **Signature Hero Trace Animation:**
  - 2.8s coordinated sequence:
    1. Initial telemetry ping (`200 OK - Telemetry Active`).
    2. Incoming request log (`POST /api/v1/session/start`).
    3. Warning & stack inspection (`WARN - Service Fabric load balanced`).
    4. Error trace lines resolving cleanly into "Manoj Kumar Movva".
    5. Health indicator turns glowing green (`HEALTHY - 99.98% uptime`).
  - Single-click "Skip Trace" button.
  - Instant final state resolution when reduced motion is preferred.
- [ ] **Request Journey Pipeline:**
  - Animated SVG signal line in Experience section tracing:
    `Client (App) -> ASP.NET Core API Gateway -> Business Logic Microservice -> SQL Server DB`.
- [ ] **3D Interactive Cards & Spotlight:**
  - `TiltCard`: Perspective-based tilt (max 4-6° rotateX/rotateY).
  - `SpotlightCard`: Radial gradient tracking pointer coordinates via CSS variables.
  - Gracefully disabled on touch devices.
- [ ] **Scroll Progress & Parallax:**
  - Restrained scroll progress indicator bar.
  - Subtle depth separation on decorative technical background grid.

---

### Phase 6: Polish, Interactivity & Accessibility
- [ ] Interactive Email Copy: Instant toast / button state feedback ("Copied to clipboard!").
- [ ] Comprehensive Project Case Study Modals:
  - Problem Statement, Architecture, DB Schema details, Key Endpoints, and Lessons Learned.
- [ ] Mobile navigation drawer with smooth backdrop blur and focus trap.
- [ ] Keyboard navigation audit (all interactive elements focusable with visible focus rings).

---

### Phase 7: Browser Testing & Multi-Viewport Verification
- [ ] Test in live browser at:
  - 1440px (Desktop wide)
  - 1100px (Laptop standard)
  - 768px (Tablet portrait)
  - 400px & 360px (Mobile)
- [ ] Verify zero horizontal overflow, zero visual collisions.
- [ ] Verify theme transitions and contrast ratios against WCAG AA standards.
- [ ] Record findings in `docs/QA_REPORT.md`.

---

### Phase 8: Final Optimization & Handover
- [ ] Bundle analysis and tree-shaking verification.
- [ ] SEO, OpenGraph tags, and Person JSON-LD integration.
- [ ] Final production build check (`npm run build`).
- [ ] Produce `docs/PERFORMANCE_REPORT.md` and `docs/FINAL_HANDOVER.md`.

---

## Acceptance Criteria to Exit Phase 1
- [x] Complete workspace audit performed and documented.
- [x] Facts verified and reconciled between Resume, Naukri, and Master Spec.
- [x] Quality rules and agent governance created.
- [x] Comprehensive implementation plan ready for user review.
- [ ] **User approval to proceed to Phase 2 (Design) and Phase 3 (Build).**
