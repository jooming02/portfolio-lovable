# Personal Developer Portfolio

Portfolio site for **Lau Joo Ming** — projects, skills, and experience as a frontend developer.

## Live site

> Deploy on [Vercel](https://vercel.com) from this repo (Vite → `dist`).  
> After the first deploy, update the live URL here and in `src/data/projects.ts` / the lanyard card.

## Features

- **Project Showcase** — Live demos, GitHub links, and tech tags
- **Interactive Timeline** — Work experience and education
- **Responsive Design** — Desktop, tablet, and mobile
- **Smooth Animations** — Scroll reveals and interactive effects

## Tech Stack

- **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** — animations
- **Three.js / R3F** — 3D lanyard badge
- **Vite** — build tool
- **Vercel** — hosting

## Getting Started

```bash
git clone https://github.com/jooming02/portfolio-lovable.git
cd portfolio-lovable
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

### Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Import this GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy — then set the live URL in README, Projects, and the hero lanyard card
