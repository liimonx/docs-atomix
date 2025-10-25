# Atomix Documentation Site

A comprehensive documentation site for the Atomix Design System, built with React, TypeScript, and Vite.

## Features

- 🎨 **Complete Design System**: Documentation for 40+ components, design tokens, layouts, and AtomixGlass effects
- 📱 **Responsive Design**: Mobile-first responsive layout with comprehensive breakpoint system
- 🔍 **Global Search**: Fuzzy search across all documentation sections
- 🏗️ **Component Showcase**: Interactive examples for React and vanilla JavaScript implementations
- 📖 **Comprehensive Guides**: Getting started, theming, performance, and advanced customization
- 🎯 **ITCSS Architecture**: Complete documentation of the CSS methodology and utilities
- 🌟 **AtomixGlass Effects**: Advanced WebGL glass morphism documentation and performance guides
- ♿ **Accessibility**: WCAG 2.1 AA compliant with full keyboard navigation and screen reader support

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
│   ├── documentation/   # Documentation-specific components
│   ├── showcase/        # Component showcase and examples
│   └── ui/              # Reusable UI components
├── data/
│   ├── navigation.ts    # Comprehensive site navigation structure
│   ├── components.ts    # Component metadata for 40+ components
│   └── design-tokens.ts # Design token documentation data
├── hooks/
│   ├── useTheme.ts      # Theme management
│   ├── useSearch.ts     # Advanced search functionality
│   ├── useResponsive.ts # Responsive breakpoints
│   └── useCopyToClipboard.ts # Code copying utility
├── pages/
│   ├── HomePage.tsx
│   ├── DocumentationOverviewPage.tsx
│   ├── GettingStartedPage.tsx
│   ├── ComponentPage.tsx
│   ├── DesignTokensPage.tsx
│   └── NotFoundPage.tsx
├── styles/
│   └── globals.css      # Global styles and CSS variables
└── types/
    └── index.ts         # TypeScript type definitions
```

## Documentation Sections

The site covers all aspects of the Atomix Design System:

### 🏁 Getting Started
- Installation guide with multiple package managers
- Quick start tutorial (5-minute setup)
- Migration guide from other design systems

### 🎨 Design Tokens
- Comprehensive color system with palettes
- Spacing and layout system
- Typography scales and font management
- Elevation and shadow system

### 🏗️ Styles System
- ITCSS architecture documentation
- Complete utility class reference (500+ classes)
- Theming and customization guide
- CSS API reference

### 📐 Layouts
- 12-column responsive grid system
- Masonry grid for dynamic layouts
- Responsive patterns and breakpoints
- Performance optimization strategies

### 🧩 Components (40+)
- React and vanilla JavaScript implementations
- Interactive examples and API documentation
- AtomixGlass WebGL effects
- Charts (15+ types with animations)
- Forms, navigation, overlays, and more

### 📚 Guides & Examples
- Advanced theming techniques
- AtomixGlass performance optimization
- Real-world implementation patterns
- Best practices and guidelines

## Development

### Adding New Documentation

1. Add component metadata to `src/data/components.ts`
2. Create component examples in the appropriate showcase component
3. Update navigation structure in `src/data/navigation.ts`
4. Add design token documentation to `src/data/design-tokens.ts`
5. Create comprehensive guides in the pages directory

### Theming

The site uses CSS custom properties for theming. Themes are defined in `src/styles/globals.css` and can be customized by overriding CSS variables.

### Search

The advanced search functionality uses Fuse.js for fuzzy searching across:
- All 40+ component names and descriptions
- Navigation items and documentation sections
- Design tokens and utility classes
- Code examples and API references
- Guides and tutorial content

## Build Configuration

The project uses Vite with the following configuration:
- React + TypeScript with strict type checking
- CSS Modules support for component styling
- Path aliases for clean imports
- Optimized builds with code splitting
- Hot module replacement for fast development
- Bundle analysis and performance optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Related Projects

- **[Atomix Core](../atomix-src/)** - The main Atomix component library
- **[Atomix Themes](../atomix-src/themes/)** - Built-in theme collection
- **[Documentation Content](../docs/)** - Markdown documentation source

## License

MIT License - see LICENSE file for details.