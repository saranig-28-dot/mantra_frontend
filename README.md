# LifeCare Health — MANTRA 2026 Healthcare Website

A beginner-friendly multi-page healthcare frontend website built for the MANTRA 2026 Summer School Assignment 1.

## Website Type
Health Care Website

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub
- Netlify

## Pages Included

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, stats counter, features, departments preview |
| About | `about.html` | Story, mission/vision/values, accreditations |
| Departments | `departments.html` | 12 medical departments with services |
| Doctors | `doctors.html` | 9 doctor profiles with specialties |
| Gallery | `gallery.html` | Filterable gallery (Facilities / Team / Equipment / Events) |
| Appointment | `appointment.html` | Booking form + FAQ accordion |
| Contact | `contact.html` | Contact details, health tips, map, emergency hotline |

## JavaScript Features
1. **Mobile navigation toggle** — hamburger menu on small screens
2. **Appointment form validation** — name, email (format check), phone (10-digit), department, future date
3. **Gallery filter** — show/hide images by category (All / Facilities / Team / Equipment / Events)
4. **FAQ accordion** — click to expand/collapse answers on the Appointment page
5. **Counter animation** — hero statistics animate up on scroll using IntersectionObserver

## SEO Implementation
- Unique `<title>` on every page
- `<meta name="description">` and `<meta name="keywords">` on every page
- Single `<h1>` per page; `<h2>` and `<h3>` for sections
- Meaningful `alt` / `aria-label` attributes on all images and icon placeholders
- Semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<footer>`
- Descriptive, lowercase page file names (`departments.html`, `appointment.html`, etc.)
- Internal navigation links on every page

## Responsive Design
- CSS custom properties (tokens) for consistent colour theming
- Flexbox and CSS Grid for all layouts
- Three breakpoints: 960 px (tablet), 650 px (mobile)
- Mobile-first navigation collapse with JS toggle

## Design Tokens
| Token | Value | Use |
|-------|-------|-----|
| `--teal` | `#0a7c6e` | Primary brand colour |
| `--coral` | `#e85d4a` | Call-to-action accent |
| `--ink` | `#1c2b36` | Body text |
| `--muted` | `#5a717d` | Secondary text |

## How to Run
Open `index.html` in any browser — no build step required.

## Netlify Deployment Steps
1. Create a public GitHub repository.
2. Upload all files (keeping the same folder structure).
3. Log in to [Netlify](https://netlify.com).
4. Click **Add new site → Import an existing project**.
5. Connect your GitHub repository.
6. Click **Deploy** — Netlify will publish the site automatically.

---
© 2026 LifeCare Health. Designed for MANTRA 2026 Summer School.
