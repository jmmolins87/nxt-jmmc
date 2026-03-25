# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 15 portfolio site using the App Router. Main application code lives under `src/`. Use `src/app/` for routes, metadata, and global styles, `src/components/sections/` for page sections, `src/components/layout/` for shared shell elements, `src/components/ui/` for reusable UI primitives, and `src/lib/` for utilities and i18n setup. Static assets live in `public/`, including project screenshots in `public/projects/`, logos in `public/logo/`, and downloadable files in `public/files/`.

## Build, Test, and Development Commands
Install dependencies with `pnpm install` or `npm install`. Use `pnpm dev` to start the local dev server on `http://localhost:3000`. Run `pnpm build` to create the production build, `pnpm start` to serve it locally, and `pnpm lint` to run the Next.js ESLint checks. Prefer `pnpm` here because `pnpm-lock.yaml` is present.

## Coding Style & Naming Conventions
TypeScript is configured in strict mode with the `@/*` path alias pointing to `src/*`. Follow the existing component style: React function components in PascalCase files such as `HeroSection.tsx`, hooks and utilities in camelCase files such as `i18n.ts`, and route files using Next.js defaults like `page.tsx` and `layout.tsx`. Keep imports grouped, use double quotes, and match the repository’s current indentation per file instead of reformatting unrelated code. Linting is defined in `eslint.config.mjs` via `next/core-web-vitals` and `next/typescript`.

## Testing Guidelines
There is no dedicated automated test suite yet. For now, every change should pass `pnpm lint` and a manual browser check in local development. When adding tests, place them near the feature or under a top-level `tests/` directory, and name them after the unit under test, for example `ContactForm.test.tsx`.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit subjects such as `Add AI Agency section and update navigation`. Keep commits focused and descriptive. Pull requests should include a concise summary, note any UI-visible changes, link related issues when applicable, and attach screenshots or short recordings for layout, animation, or localization updates.

## Security & Configuration Tips
Do not hardcode new secrets. The contact form integrates with EmailJS, so move credentials to environment variables if you touch that area. Review changes to `src/lib/i18n.ts`, `src/app/sitemap.ts`, and metadata files carefully because they affect routing, SEO, and public output.
