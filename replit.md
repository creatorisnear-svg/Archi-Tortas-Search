# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Tortas Archi's (artifacts/tortas-archis)
- **Type**: React + Vite (static site)
- **Preview path**: `/`
- **Purpose**: Restaurant website for Tortas Archi's, Phoenix AZ
- **Features**:
  - Full menu (tortas, hamburguesas, refrescos) from real menu image
  - Google Maps reviews section (4.8 stars)
  - Hours, contact, location info
  - SEO optimized (schema.org JSON-LD, meta tags, sitemap, robots.txt)
  - Google Search optimized
  - Cloudflare Pages deployment ready (`public/_redirects`)
  - Mobile responsive with smooth scroll animations
  - Instagram & Google Maps links

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/tortas-archis run dev` — run restaurant website locally
- `pnpm --filter @workspace/tortas-archis run build` — build static site for deployment

## Cloudflare Deployment

The `artifacts/tortas-archis` app is ready to deploy to Cloudflare Pages:
1. Run `pnpm --filter @workspace/tortas-archis run build`
2. Deploy `artifacts/tortas-archis/dist/public` folder to Cloudflare Pages
3. The `public/_redirects` file handles SPA routing

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
