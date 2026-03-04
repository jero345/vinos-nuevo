# Wollumbi Estate Project Memory

## Project Type
Luxury countryside estate landing page — React + Vite + TailwindCSS + Framer Motion

## Stack
- React 18 + Vite 5
- TailwindCSS 3 (custom estate color tokens)
- Framer Motion 11 (all animations)
- react-intersection-observer (scroll reveal hook)
- lucide-react (icons)

## Key Files
- src/App.jsx — root, loading gate, section assembly
- src/index.css — Tailwind layers + custom cursor CSS + animations
- tailwind.config.js — estate color palette, custom fonts, keyframes
- src/hooks/useScrollReveal.js — reusable IntersectionObserver hook
- src/components/ — 14 components, all self-contained

## Color Tokens (tailwind.config.js)
cream, beige, stone, brown, darkbrown, olive, darkolive, gold, warmwhite, charcoal

## Design Conventions
- Font: Cormorant Garamond (display) + Inter (sans)
- All images: Unsplash placeholder URLs — user will replace
- Custom gold cursor (cursor-dot + cursor-ring)
- Grain texture via SVG data URI
- Scroll progress bar via framer-motion useScroll

## Run Commands
- `npm run dev` — dev server
- `npm run build` — production build (verified ✓)
