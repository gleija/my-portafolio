# Gary Leija — Software Engineering Portfolio

Personal portfolio showcasing my software engineering experience, technical expertise, and selected engineering work across Australia and Japan.

**Live website:** [garyleija.com](https://www.garyleija.com)

## Tech stack

| Technology | Purpose |
| --- | --- |
| **React** | Component-based user interface |
| **TypeScript** | Static typing for components and portfolio data |
| **Vite** | Local development server and production builds |
| **vanilla-extract** (`@vanilla-extract/css`) | Type-safe, build-time CSS authored in `.css.ts` files |
| **pnpm** | Dependency management and project scripts |
| **ESLint** | Code-quality and React/TypeScript linting |
| **Vercel** | Hosting and deployment |

## Project structure

```text
src/
├── components/
│   └── Header/
│       ├── Header.tsx
│       ├── Header.css
│       └── useActiveSection.ts
├── sections/
│   ├── About/
│   │   └── About.tsx
│   ├── Experience/
│   │   ├── Experience.tsx
│   │   └── experience.data.ts
│   ├── Skills/
│   │   ├── Skills.tsx
│   │   └── skills.data.ts
│   └── Projects/
│       ├── Projects.tsx
│       ├── projects.data.ts
│       └── components/
│           ├── DesignSystemDiagram/
│           │   ├── DesignSystemDiagram.tsx
│           │   └── DesignSystemDiagram.css.ts
│           └── CandidateManagementDiagram/
│               ├── CandidateManagementDiagram.tsx
│               └── CandidateManagementDiagram.css.ts
├── styles/
│   └── global.css.ts
├── App.tsx
└── main.tsx
```

> This structure reflects the ongoing migration to vanilla-extract. Any styles not yet migrated may still live in `App.css` or component `.css` files.

## File conventions

- **`.tsx`** — React components and JSX, using typed functional components.
- **`.ts`** — TypeScript utilities, hooks, and structured portfolio data.
- **`.data.ts`** — Static content colocated with the section that renders it.
- **`.css.ts`** — vanilla-extract styles compiled to CSS at build time.
- **`.css`** — Existing CSS retained while styles are migrated incrementally.

`App.tsx` serves as the composition root for the Header and the four page sections. Each section owns its own content and presentation; the Projects section also owns its two architecture diagrams.

## Getting started

**Prerequisites:** Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Vite prints the local development URL in the terminal.

### Production build

```bash
pnpm build
pnpm preview
```

### Linting

```bash
pnpm lint
```

## About the case studies

The project diagrams are conceptual illustrations of professional engineering work. They are not reproductions of proprietary source code or private service architectures.

## Deployment

The portfolio is deployed on Vercel at **[www.garyleija.com](https://www.garyleija.com)**.
