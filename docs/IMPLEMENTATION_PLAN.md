# Implementation Plan: Manoj Kumar Movva Portfolio
**Candidate:** Manoj Kumar Movva — Backend Developer (.NET)  
**Concept:** Incident Room Visual Identity × Recruiter-First Bento Architecture  
**Technology:** React 18/19 / Vite 6 / TypeScript / CSS Modules / Motion for React  
**Updated:** 22 November 2026  

---

## Phase Breakdown & Execution Milestones

### Phase 1: Workspace Audit & Fact Verification ✅
- [x] Inspect directory, Node/NPM/Git runtime tools.
- [x] Create persistent workspace governance rules (`.agents/rules/portfolio-quality.md`).
- [x] Establish agent skills (`portfolio-design`, `motion-engineering`, `performance-optimization`, `portfolio-qa`).
- [x] Cross-verify facts from Resume (`Manoj_Kumar_Movva.pdf`) and Naukri profile.
- [x] Establish privacy boundaries (redact private address, DOB, CTC, obfuscate phone).
- [x] Produce `docs/PROJECT_AUDIT.md`, `docs/CONTENT_VERIFICATION.md`, and `docs/IMPLEMENTATION_PLAN.md`.

---

### Phase 2: Recruiter-First Design Direction & Specification ✅
- [x] Deliver 3-direction visual comparison (Incident Room vs. Editorial Developer vs. Bento).
- [x] Formulate Hybrid A + C (Incident Room Identity + Recruiter-First Bento Structure).
- [x] Design 3 Hero concepts; select H1 (Recruiter Strip) for the 10-second recruiter pass.
- [x] Formulate CSS design tokens for Dark and Light themes.
- [x] Establish typography hierarchy: Bricolage Grotesque (Headings), Hanken Grotesk (Body & UI), JetBrains Mono (Technical telemetry).
- [x] Complete section-by-section wireframes (Desktop 1440px and Mobile 400px/360px).
- [x] Standardize 10-part Case Study architecture for deep interview review.
- [x] Conduct quantitative word-count audit: 74.1% reduction in reading overhead (~1,430 words down to ~371 words).
- [x] Compile `docs/PHASE_2_DESIGN_SPECIFICATION.md` and project brain artifact.
- [x] Receive user authorization to build.

---

### Phase 3: Recruiter-First Bento Implementation ✅
- [x] Refactor data repository (`src/data/`):
  - `profile.ts`: Verified identity, 11-word pitch, 3 vitals, 4 verified proof tiles. Purged fake 99.98% metrics.
  - `skills.ts`: Structured SQL Query matrix across 3 production domains + academic exposure.
  - `experience.ts`: 1 authoritative Linkfields card with 4 icon-led rows, compact 4-node request flow diagram, expandable details, and secondary internship cards.
  - `projects.ts`: 5 visual-first Bento cards with 1-line hooks and complete 10-part case study modal structures.
  - `education.ts` & `learning.ts`: Structured for combined compact presentation.
- [x] Refactor UI components:
  - `Navbar.tsx`: Always-visible resume download CTA (desktop & mobile header), honest availability beacon, accessible theme & motion switches.
  - `Hero.tsx`: H1 Recruiter Strip with 11-word pitch, 3 vitals, 5 core tech chips, dual CTAs, and compact illustrative telemetry card.
  - `Skills.tsx`: SQL Query interface (`sys.developer_competencies`) with compact chips.
  - `Experience.tsx`: Authoritative enterprise card, icon rows (`[API]`, `[SQL]`, `[RELEASE]`, `[QUALITY]`), 4-node pipeline (`App -> API -> Microservice -> SQL DB`), and accordion drawer.
  - `Projects.tsx`: 5 Bento cards with SVG schematic covers and Case Study modal trigger.
  - `CaseStudyModal.tsx`: Standardized 10-part schema (Problem, Contribution, Architecture, Stack, Features, Decisions, Challenges, Outcomes, Links, Lessons Learned).
  - `About.tsx`: 34-word engineering summary + 4 verified proof tiles.
  - `Education.tsx`: Unified Bento split (B.Tech PVPSIT 8.41 CGPA + Verified Badges + AI/Semantic Kernel exploration).
  - `Contact.tsx`: 4 direct-action buttons (1-click email copy, LinkedIn, GitHub, Resume).
  - `Footer.tsx`: Clean honest status without fake uptime stats.
- [x] Verify production build (`tsc && vite build`) -> Exit code 0, 0 errors, gzip 115 KB.

---

### Phase 4: Quality Assurance & Handover ✅
- [x] Responsive layout verified from 360px small mobile to 1440px desktop.
- [x] Strict privacy compliance verified (zero DOB, zero home address, zero private client data).
- [x] Production artifacts generated in `dist/`.
- [x] Ready for final user inspection and deployment.
