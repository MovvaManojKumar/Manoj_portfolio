---
name: portfolio-qa
description: Quality assurance protocols for responsiveness, accessibility, theme switching, and error monitoring.
---

# Portfolio QA Skill

## Purpose
Systematically verify the portfolio across screen sizes, interaction modes, assistive technology, and browsers.

## Verification Checklist
1. **Viewports**: Test 1440px (Desktop), 1100px (Laptop), 768px (Tablet), and 400px/360px (Mobile). Check for horizontal scrollbars or overflow.
2. **Themes**: Verify Dark and Light themes. Check contrast ratios against WCAG AA standards.
3. **Accessibility**: Full keyboard tab navigation, visible `:focus-visible` outlines, correct semantic tags (`main`, `header`, `nav`, `section`, `h1`-`h4`, `footer`), ARIA attributes for interactive controls.
4. **Motion States**: Test reduced-motion toggle and system media queries. Ensure hero trace resolves instantly.
5. **Interactive Controls**: Test copy email feedback, resume download action, mobile drawer toggle, and case-study modals.
6. **Console & Network**: 0 console errors, 0 broken links, 0 failed network requests.
