<div align="center">

# Ishan Udawatte — Personal Portfolio

**Live Site → [ishan-udawatte.vercel.app](https://ishanudawatte.github.io/)**
*(update this link once deployed)*

A dark-themed, high-performance personal portfolio built with React, Vite, and Tailwind CSS v4 — featuring glassmorphism UI, animated section transitions, a scrolling skills marquee, an interactive projects grid, and an EmailJS-powered contact form.

![Portfolio Preview](public/footer_img.png)

</div>

---

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Projects Showcased](#projects-showcased)
- [Contact](#contact)

---

## Live Demo

> **[View Portfolio →](https://ishanudawatte.github.io/)**
> *(replace with your GitHub Pages or Vercel URL once deployed)*

---

## Features

- **Glassmorphism design system** — custom `.glass` and `.glass-strong` utility classes with `backdrop-filter` blur and translucent surfaces
- **Animated SVG border button** — stroke-dashoffset path animation on hover (`AnimatedBorderButton`)
- **Floating particle background** — 30 drifting dots with randomised `slow-drift` keyframe animation
- **Soft-skills marquee** — infinite horizontal scroll of 15 professional competencies
- **Responsive navbar** — scroll-aware glass effect + hamburger menu for mobile
- **Projects grid** — 2-up card layout, hover scale + overlay links, "View All / Show Less" toggle
- **Expandable education timeline** — alternating left/right layout with collapsible module dropdowns (`ModuleDropdown`)
- **EmailJS contact form** — async send with loading state, success/error feedback
- **Custom Tailwind v4 theme** — CSS `@theme` block with design tokens (background, surface, primary, muted, border…)
- **Inter + Playfair Display** typography pairing
- **Fully responsive** across mobile, tablet, and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Icons | Lucide React, React Icons (FA6, IO5) |
| Email | EmailJS (`@emailjs/browser`) |
| Path Aliases | `@/` → `src/` (via `vite.config.js`) |
| Fonts | Inter (sans), Playfair Display (serif) |
| Deployment | GitHub Pages / Vercel |
| Version Control | Git + GitHub |

---

## Project Structure

```
DEV-PERSONAL-PORTFOLIO/
├── public/
│   ├── favicon.svg
│   ├── footer_img.png          ← Logo used in Navbar & Footer
│   ├── nav_img.png
│   ├── icons.svg
│   └── projects/               ← Project screenshot images
│       ├── aquasense.png
│       ├── cycle.png
│       ├── homteq.png
│       └── ...
│
├── src/
│   ├── assets/
│   │   ├── profile.png         ← Hero profile photo
│   │   ├── a.png               ← Hero background image
│   │   ├── Ishan_Udawatte_CV.pdf
│   │   └── icons/              ← Skill SVG icons
│   │       ├── programming_lang/
│   │       ├── web_dev/
│   │       ├── db/
│   │       └── tools/
│   │
│   ├── components/
│   │   ├── AnimatedBorderButton.jsx   ← SVG stroke-dash animated outline button
│   │   └── Button.jsx                 ← Primary pill-shaped CTA button
│   │
│   ├── layout/
│   │   ├── Navbar.jsx          ← Scroll-aware fixed nav with mobile menu
│   │   └── Footer.jsx          ← Logo + nav links + social icons
│   │
│   ├── sections/
│   │   ├── Hero.jsx            ← Full-screen intro, CTAs, marquee
│   │   ├── About.jsx           ← Bio + skill icon grid (4 categories)
│   │   ├── Projects.jsx        ← 8-project grid with show/hide toggle
│   │   ├── Experience.jsx      ← Education timeline with module dropdowns
│   │   └── Contact.jsx         ← EmailJS form + contact info + availability card
│   │
│   ├── App.jsx                 ← Root layout: Navbar → sections → Footer
│   ├── main.jsx                ← React DOM entry point
│   └── index.css               ← Tailwind v4 theme, glass utilities, keyframes
│
├── .env                        ← EmailJS keys (not committed — see .gitignore)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Sections

### Hero
Full-screen section with a hero background image, profile photo, animated floating dots, headline copy, "Contact Me" and "Download CV" CTAs, social links, and an infinite-scroll soft skills marquee.

### About
Two-column layout: biographical copy on the left, a 2×2 skill icon grid on the right. Categories: **Programming Languages**, **Web Development**, **Databases**, and **Tools & Frameworks** — each rendered as icon + label tiles inside glassmorphism cards.

### Projects
A 2-column card grid showcasing 8 projects. Cards show a project image, title, description, and tech tags. Hovering reveals live-link and GitHub overlay icons. A "View All Projects" / "Show Less" animated border button toggles the full list.

### Experience *(Academic Journey)*
Alternating left/right timeline. The IIT/Westminster entry features interactive `+/-` module dropdowns for Level 5 and Level 4 coursework. A–Level and O–Level entries render as subject tag pills.

### Contact
A split-layout section: EmailJS async contact form on the left (with loading spinner state and success/error alerts) and contact info cards plus a pulsing "Currently Available" availability badge on the right.

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/ishanudawatte/ishanudawatte.github.io.git


# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Fill in your EmailJS credentials (see section below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Environment Variables

Create a `.env` file in the root (already in `.gitignore` — will never be committed):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these values from your [EmailJS dashboard](https://www.emailjs.com/).

> ⚠️ **Never commit your `.env` file.** It is blocked by `.gitignore`.

---

## Deployment

### GitHub Pages

```bash
# 1. Install the gh-pages package
npm install --save-dev gh-pages

# 2. Add to package.json scripts:
#    "predeploy": "npm run build",
#    "deploy": "gh-pages -d dist"
# And add at the top level:
#    "homepage": "https://ishanudawatte.github.io/"

# 3. Also update vite.config.js — add base:
#    base: '/'

# 4. Deploy
npm run deploy
```

### Vercel (Recommended — zero config)

```bash
npm install -g vercel
vercel --prod
```
Add your environment variables in the Vercel dashboard under Project → Settings → Environment Variables.

---

## Projects Showcased

| # | Project | Stack |
|---|---|---|
| 1 | **AquaSense** — IoT Smart Water Management | Flutter, FastAPI, PostgreSQL, MQTT, ESP32, Supabase |
| 2 | **Directed Graph Acyclicity Checker** | Java, DFS, Sink Elimination |
| 3 | **Smart Home E-Commerce Platform** | PHP, MySQL, HTML, CSS |
| 4 | **AquaSense Product Showcase** | Node.js, Express, Bootstrap, Resend API |
| 5 | **Todo App** — Full-Stack Task Manager | Node.js, Express, MongoDB Atlas, EJS |
| 6 | **University Enrollment System** | Java, Swing GUI, Maven, JUnit 5 |
| 7 | **SDG 14: Life Below Water** — Awareness Platform | HTML5, CSS3, JavaScript |
| 8 | **Traffic Flow Data Analysis** | Python, Tkinter, CSV processing |

---

## Contact

**Ishan Udawatte**
- Email: [erangaudawatte7@gmail.com](mailto:erangaudawatte7@gmail.com)
- LinkedIn: [linkedin.com/in/ishan-udawatte-b7bb50257](https://www.linkedin.com/in/ishan-udawatte-b7bb50257/)
- GitHub: [github.com/Ishan101-hub](https://github.com/Ishan101-hub)
- Location: Sri Jayawardenepura Kotte, Sri Lanka

---

<div align="center">

© 2025 Ishan Udawatte. All rights reserved.

</div>