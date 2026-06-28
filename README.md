# Atomix Documentation Site

Official documentation for the [Atomix Design System](https://github.com/shohojdhara/atomix) — built with **Next.js 16**, **React 19**, and **TypeScript**. This site documents 50+ components, design tokens, layouts, guides, and the Theme Studio.

## Features

- **Component docs** — Interactive examples, props tables, and accessibility notes for every Atomix component
- **Design tokens** — Colors, spacing, typography, elevation, and theming reference
- **Theme Studio** — Live token editor with export and preset management
- **Global search** — Fuzzy search across navigation and documentation (Fuse.js)
- **ITCSS styles** — Architecture docs and utility class reference
- **AtomixGlass** — WebGL glass morphism guides and playground
- **Accessibility** — Skip links, keyboard navigation, and ARIA patterns throughout

## Quick Start

### Prerequisites

- Node.js **20+** (see `.nvmrc`)
- npm

### Installation

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

### Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript (`tsc --noEmit`) |
| `npm test` | Vitest (unit + perf smoke tests) |
| `npm run validate:components` | Validate component metadata files |
| `npm run setup:markdown` | Set up optional markdown source for `/api/markdown/*` |
| `npm run generate:tokens` | Regenerate theme token JSON |

## Project Structure

```
app/                          # Next.js App Router
├── docs/[[...slug]]/         # Catch-all documentation routes
├── docs/components/[componentId]/  # Individual component pages
├── examples/                 # Example pages (landing page, etc.)
└── api/markdown/             # Markdown file API (requires atomix-doc-in-md/)

src/
├── components/               # UI, layout, navigation, theme-studio, showcase
├── page-components/          # Page-level React components mapped from routes
├── data/
│   ├── navigation.ts         # Site navigation tree
│   └── components/           # Per-component metadata (*.tsx)
├── hooks/                    # Theme, search, responsive, clipboard
├── styles/                   # ITCSS SCSS (settings → utilities)
├── stores/                   # Zustand (Theme Studio state)
└── utils/                    # Routing, breadcrumbs, color utils
```

## Routing

Documentation routes are driven by:

1. `src/data/navigation.ts` — navigation tree and paths
2. `src/utils/routeMapper.ts` — slug → navigation item resolution
3. `src/utils/pageComponentRegistry.ts` — category → page component mapping

To add a new docs page:

1. Add an entry to `navigation.ts`
2. Create the page component under `src/page-components/`
3. Register it in `pageComponentRegistry.ts`

To add a component doc:

1. Add metadata in `src/data/components/YourComponent.tsx`
2. Export it from `src/data/components/index.ts`
3. Ensure the component appears in navigation

## External content

The markdown API (`/api/markdown/*`) serves files from a local docs directory. It is **optional** — the main site works without it.

### Setup options

**Option A — clone into the default path**

```bash
git clone <your-markdown-repo-url> atomix-doc-in-md
# expects markdown at atomix-doc-in-md/docs/
```

**Option B — use the setup script**

```bash
cp .env.example .env.local
# set ATOMIX_MARKDOWN_REPO in .env.local, then:
npm run setup:markdown
```

**Option C — point to an existing directory**

```bash
# in .env.local
ATOMIX_MARKDOWN_DOCS_PATH=/absolute/path/to/docs
```

When the source is missing, the API returns **503** with setup instructions instead of a generic 500.

### Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_BASE_URL` | Canonical URL for sitemap and Open Graph |
| `ATOMIX_MARKDOWN_DOCS_PATH` | Override path to markdown docs directory |
| `ATOMIX_MARKDOWN_REPO` | Git repo URL for `npm run setup:markdown` |

## Related Projects

- **[@shohojdhara/atomix](https://www.npmjs.com/package/@shohojdhara/atomix)** — Atomix component library
- **atomix-doc-in-md** — Markdown documentation source (optional, for API route)

## License

MIT — see [LICENSE](./LICENSE).
