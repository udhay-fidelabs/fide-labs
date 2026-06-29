# Fide Next.js Project Guidelines

## Project Overview
Modern Next.js 16 website built with:
- **Framework**: Next.js 16.2.9 (latest)
- **Package Manager**: Bun
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5.9
- **React**: 19.2.4

## Development

### Getting Started
```bash
bun install
bun run dev
```

The app runs at http://localhost:3000

### Build & Deployment
```bash
bun run build
bun run start
```

## Code Quality

### Linting
```bash
bun run lint
```

### TypeScript
- All files use TypeScript by default
- Type safety is enforced across the project
- Check tsconfig.json for configuration

## Project Structure
```
fide-nextjs/
├── app/                 # Next.js App Router
│   ├── page.tsx        # Home page
│   ├── layout.tsx      # Root layout
│   └── ...
├── public/             # Static assets
├── .next/              # Build output (git ignored)
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript config
├── tailwind.config.ts  # Tailwind configuration
└── eslint.config.mjs   # ESLint rules
```

## Development Practices

### Pages & Routes
- Use the App Router (app/ directory)
- Create routes as nested folders with page.tsx files
- Use layout.tsx for shared UI and layouts

### Components
- Keep components in appropriate directories
- Use TypeScript for type safety
- Prefer functional components

### Styling
- Use Tailwind CSS classes for styling
- Keep custom CSS in component files when necessary
- Maintain consistent design patterns

### Type Safety
- Define interfaces for props and data
- Use strict mode in TypeScript config
- Avoid `any` types

## Environment Setup
See @AGENTS.md for automated setup instructions.

## gstack (recommended)

This project uses [gstack](https://github.com/garrytan/gstack) for AI-assisted workflows.
Install it for the best experience:

```bash
git clone --depth 1 https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && ./setup --team
```

Skills like /qa, /ship, /review, /investigate, and /browse become available after install.
Use /browse for all web browsing. Use ~/.claude/skills/gstack/... for gstack file paths.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool. When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec
