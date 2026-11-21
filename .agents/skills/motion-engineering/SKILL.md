---
name: motion-engineering
description: Guidelines and components for implementing performant, purposeful motion using Motion for React and CSS.
---

# Motion Engineering Skill

## Purpose
Guide the implementation, optimization, and testing of animations for Manoj's portfolio, prioritizing performance, user comfort, and graceful fallbacks.

## Core Rules
- **Library**: Use `motion/react` (`import { motion, AnimatePresence } from "motion/react"`). GSAP is reserved strictly for complex pinned timelines if justified.
- **Hardware Acceleration**: Only animate `transform` and `opacity`. Never animate layout-triggering properties (`width`, `height`, `margin`, `top`, `padding`).
- **Reduced Motion**: Full support for `prefers-reduced-motion` and a visible toggle. When enabled, disable parallax, tilts, loops, and resolve the hero trace immediately to its final state.
- **Content First**: No blocking loaders. All core content must be immediately visible or resolve in under 650ms.
- **Signature Hero Trace**: Timed at ~2.8s total, skippable with a single click, non-blocking, plays once on initial load.
- **3D & Cursor Effects**: Restrained tilt (4-6°), low-opacity cursor spotlight, disabled on touch devices.
