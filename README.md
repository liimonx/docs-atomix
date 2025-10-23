# Atomix Documentation Site

A comprehensive documentation site for the Atomix component library, built with React, TypeScript, and Vite.

## Features

- 🎨 **Theming System**: Full theming support with light, dark, and high-contrast modes
- 📱 **Responsive Design**: Mobile-first responsive layout
- 🔍 **Global Search**: Fuzzy search across all documentation
- 🏗️ **Component Showcase**: Interactive component examples and props documentation
- 📖 **Comprehensive Guides**: Getting started, installation, and theming guides
- ♿ **Accessibility**: WCAG 2.1 AA compliant with full keyboard navigation

## Quick Start

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (header, sidebar, footer)
│   ├── mock-atomix/     # Mock Atomix components for documentation
│   ├── showcase/        # Component documentation components
│   └── ui/              # Reusable UI components
├── data/
│   ├── navigation.ts    # Site navigation structure
│   └── components.ts    # Component metadata and examples
├── hooks/
│   ├── useTheme.ts    # Theme management
│   ├── useSearch.ts   # Search functionality
│   └── useResponsive.ts # Responsive breakpoints
├── pages/
│   ├── HomePage.tsx
│   ├── GettingStartedPage.tsx
│   ├── ComponentPage.tsx
│   └── NotFoundPage.tsx
├── styles/
│   └── globals.css      # Global styles and CSS variables
└── types/
    └── index.ts         # TypeScript type definitions
```

## Development

### Adding New Components

1. Add component metadata to `src/data/components.ts`
2. Create component examples in the appropriate showcase component
3. Update navigation in `src/data/navigation.ts`

### Theming

The site uses CSS custom properties for theming. Themes are defined in `src/styles/globals.css` and can be customized by overriding CSS variables.

### Search

The search functionality uses Fuse.js for fuzzy searching across:
- Component names and descriptions
- Navigation items
- Code examples

## Build Configuration

The project uses Vite with the following configuration:
- React + TypeScript
- CSS Modules support
- Path aliases for clean imports
- Optimized builds with code splitting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.