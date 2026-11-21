# Workflow: Portfolio Final QA & Polish

## Objective
Audit the compiled site across screen sizes, verify accessibility compliance, measure performance targets, and produce final handover documentation.

## Steps
1. Execute `npm run build` and check for bundle size warnings.
2. Spin up preview server and inspect in browser across viewports (1440px, 1100px, 768px, 400px).
3. Verify interactive flows: contact copy, resume download, navigation links, theme toggle, reduce motion.
4. Verify zero console errors, zero layout shifts.
5. Generate `docs/QA_REPORT.md` and `docs/FINAL_HANDOVER.md`.
