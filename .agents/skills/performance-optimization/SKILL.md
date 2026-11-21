---
name: performance-optimization
description: Core Web Vitals, asset optimization, font preloading, and bundle budgeting for the portfolio.
---

# Performance Optimization Skill

## Purpose
Ensure the portfolio achieves optimal load and runtime metrics: LCP <= 2.5s, INP <= 200ms, and CLS <= 0.1.

## Rules & Checklist
- **Asset Sizing**: Explicit `width` and `height` on all image elements. Prefer WebP/AVIF or vector SVGs.
- **Font Optimization**: Load only necessary weights for Bricolage Grotesque, Hanken Grotesk, and JetBrains Mono with `font-display: swap`.
- **Bundle Budget**: Tree-shake icons (import only required Lucide icons). Dynamic import heavy or secondary components.
- **Animation Performance**: Pause off-screen animations using viewport detection. Avoid unnecessary `will-change`.
- **Zero Layout Shifts**: Reserve space for dynamic elements and hero trace cards.
