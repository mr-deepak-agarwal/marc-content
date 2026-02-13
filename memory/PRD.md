# MARC Glocal Website - Product Requirements Document

## Original Problem Statement
Replicate and enhance a website based on `https://marcfinal.vercel.app/`. The project is built with Next.js, and all future work should continue on this stack. The goal is to match the structure and content of `https://www.marcglocal.com/` with enhanced UI/UX.

## User Personas
- **Primary:** MARC Glocal's clients and prospects seeking business consulting services
- **Secondary:** Job seekers looking at careers page
- **Tertiary:** Media/press contacts

## Core Requirements
1. Replicate Services menu structure from original website
2. Create individual service pages with original content
3. Maintain consistent design language across all pages
4. Mobile responsive design
5. Light color theme (Primary: `#4E9141`, Light: `#C2DDB4`, Text: `#1D342F`, BG: `#F7FFF5`)

---

## What's Been Implemented

### Completed - Jan 31, 2026
- **Market Research Page** - Redesigned with "Clean Corporate" light theme
  - Real content crawled from marcglocal.com
  - Light mint background, white cards, scroll animations
  - Services grid, B2B section, methodology, case study, FAQs
  
- **Feasibility Study Page** - Redesigned with "Warm Professional" light theme
  - Real content crawled from marcglocal.com
  - Off-white background with grain texture
  - Editorial layout, floating stats, asymmetric sections

- **Blog Page** - NEW elegant modern design with light theme
  - Real content crawled from marcglocal.com/blog (15 articles)
  - Split hero layout with sticky sidebar + featured posts stack
  - Bento-style grid with varied card sizes
  - Category filters, search, popular tags, newsletter signup
  - Distinctively different from Insights page (articles vs PDF reports)

### Previously Completed
- Header with glassmorphism effect and logo zoom on scroll
- "Icon Grid" mega menu for Services section
- Mobile accordion for Services menu
- Media page with animated carousel
- Career page with horizontal timeline
- Contact page with 10 office locations (Featured Offices grid)
- 13 service pages created using ServicePageTemplate
- Backups created for all major changes

---

## Architecture

```
/app
├── app/
│   ├── services/
│   │   ├── market-research/page.jsx     # Clean Corporate layout
│   │   ├── feasibility-study/page.jsx   # Warm Professional layout
│   │   └── [other-services]/page.jsx    # Using ServicePageTemplate
│   ├── media/page.jsx
│   ├── career/page.jsx
│   ├── contact/page.jsx
│   └── ...
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ServicePageTemplate.jsx
├── backups/                              # All backup files
└── public/
```

---

## Prioritized Backlog

### P0 - Critical
- None currently

### P1 - High Priority
- Apply consistent layout to remaining 11 service pages
- Crawl and update content for all service pages from original site
- Mobile responsiveness review for new layouts

### P2 - Medium Priority
- Further UI/UX iterations as requested
- Performance optimization

### P3 - Future/Nice-to-have
- Additional design alternatives for other pages
- Animation refinements

---

## Design System

### Colors
- Primary Green: `#4E9141`
- Light Green: `#C2DDB4`
- Dark Text: `#1D342F`
- Body Text: `#47635D`
- Light Background: `#F7FFF5`
- Off-white: `#FAFAF8`

### Typography
- Headings: Bold, `#1D342F`
- Body: Regular, `#47635D`
- Accents: `#4E9141`

### Components
- Cards: White background, `border-[#C2DDB4]/30`, rounded-2xl
- Buttons: Rounded-full, green primary, outlined secondary
- Animations: Fade-in on scroll, hover lifts

---

## Notes
- User prefers light themes (dark themes not approved by client)
- Always create backups before major changes
- Offer 2-4 design options for any new feature
- Content should be crawled from original site, not AI-generated
