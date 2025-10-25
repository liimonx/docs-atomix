# Content Mapping Reference

This document outlines how documentation content from the `/docs` directory is transformed into web pages in the Atomix design system website.

## Documentation Structure

### Directory Hierarchy
```
/docs/
├── components/          # Component documentation
│   ├── button.md
│   ├── badge.md
│   └── ...
├── design-tokens/       # Design token documentation
│   ├── colors.md
│   ├── spacing.md
│   └── ...
├── styles/             # Styling system documentation
│   ├── architecture.md
│   ├── customization.md
│   └── ...
├── layouts/            # Layout system documentation
│   ├── grid.md
│   ├── masonry-grid.md
│   └── ...
├── getting-started/    # Getting started guides
│   ├── installation.md
│   ├── quick-start.md
│   └── ...
├── api/                # API references
│   ├── css.md
│   ├── javascript.md
│   └── ...
├── examples/           # Usage examples
│   └── common-patterns.md
├── guides/             # Advanced guides
│   ├── theming.md
│   └── ...
└── resources/          # Additional resources
    ├── contributing.md
    └── roadmap.md
```

## Content Transformation Rules

### 1. Markdown to Component Documentation

#### Header Processing
- **H1 (#)** → Component name/title
- **H2 (##)** → Section headers (Overview, Installation, Usage, etc.)
- **H3 (###)** → Subsection headers

#### Code Block Processing
- **Language detection**: Extract language from code fence (```jsx, ```css, etc.)
- **Syntax highlighting**: Apply appropriate syntax highlighting
- **Copy functionality**: Add copy-to-clipboard buttons
- **Live preview**: Enable live preview for React components (when applicable)

#### Table Processing
- **Props tables**: Convert markdown tables to structured prop documentation
- **API reference**: Transform tables into interactive API documentation
- **Feature comparison**: Convert feature tables to visual component comparisons

#### Link Processing
- **Internal links**: Convert relative links to React Router navigation
- **External links**: Add external link indicators and security attributes
- **Anchor links**: Generate proper anchor navigation

### 2. Content Structure Mapping

#### Component Documentation Structure
```markdown
# Component Name          → componentData.name
## Overview               → componentData.description
## Installation           → componentData.usage.installation
## Basic Usage            → componentData.examples[0]
## API Reference          → componentData.props
## Examples               → componentData.examples
## Features               → componentData.features
## Accessibility          → componentData.accessibility
```

#### Design Token Documentation Structure
```markdown
# Token Name              → tokenData.name
## Overview               → tokenData.description
## Token Structure        → tokenData.structure
## Usage                  → tokenData.usage
## Examples               → tokenData.examples
```

### 3. Responsive Layout Transformation

#### Mobile-first Approach
- **Content hierarchy**: Maintain logical reading order on small screens
- **Navigation**: Convert to collapsible navigation on mobile
- **Code blocks**: Enable horizontal scrolling for code overflow
- **Tables**: Transform to card-based layouts on mobile

#### Breakpoint Strategy
- **Mobile (< 640px)**: Single column layout, stacked navigation
- **Tablet (640px - 1024px)**: Two-column layout with sidebar
- **Desktop (> 1024px)**: Three-column layout with navigation, content, and examples

### 4. Accessibility Enhancements

#### Semantic HTML
- **Headings**: Proper heading hierarchy (h1 → h6)
- **Lists**: Convert to semantic list elements
- **Tables**: Add proper table headers and captions
- **Code**: Use semantic code elements with language attributes

#### ARIA Attributes
- **Navigation**: Add aria-label and aria-current for active states
- **Interactive elements**: Include proper ARIA roles and states
- **Live regions**: Announce dynamic content changes
- **Landmarks**: Define proper page landmarks

#### Keyboard Navigation
- **Tab order**: Logical tab order throughout the page
- **Focus management**: Visible focus indicators
- **Skip links**: Provide skip navigation options
- **Keyboard shortcuts**: Document available keyboard shortcuts

## Component Integration

### 1. Atomix Component Usage

#### UI Components
```typescript
// Button component for actions
<Button variant="primary" size="md">
  Copy Code
</Button>

// Card component for content sections
<Card>
  <CardHeader>
    <CardTitle>Installation</CardTitle>
  </CardHeader>
  <CardContent>
    {content}
  </CardContent>
</Card>

// Badge component for status indicators
<Badge variant="success">Stable</Badge>
```

#### Layout Components
```typescript
// Grid system for responsive layouts
<Grid>
  <GridItem span={{ mobile: 12, tablet: 6, desktop: 4 }}>
    {content}
  </GridItem>
</Grid>

// Responsive containers
<Container size="lg" padding="md">
  {content}
</Container>
```

### 2. Utility Classes

#### Spacing
```css
/* Consistent spacing using Atomix utilities */
.atomix-spacing-sm    /* 8px */
.atomix-spacing-md    /* 16px */
.atomix-spacing-lg    /* 24px */
.atomix-spacing-xl    /* 32px */
```

#### Typography
```css
/* Typography scale */
.atomix-text-xs      /* 12px */
.atomix-text-sm      /* 14px */
.atomix-text-base    /* 16px */
.atomix-text-lg      /* 18px */
.atomix-text-xl      /* 20px */
```

#### Colors
```css
/* Color system */
.atomix-text-primary      /* Primary text color */
.atomix-text-secondary    /* Secondary text color */
.atomix-bg-surface        /* Surface background */
.atomix-border-subtle     /* Subtle borders */
```

## Content Validation

### 1. Link Validation
- **Internal links**: Verify all internal navigation links
- **External links**: Check external link accessibility
- **Asset links**: Validate image and file references
- **Anchor links**: Ensure anchor targets exist

### 2. Content Accuracy
- **Code examples**: Validate syntax and functionality
- **API references**: Cross-reference with actual component props
- **Installation instructions**: Verify package names and commands
- **Feature descriptions**: Confirm features are actually available

### 3. Responsive Testing
- **Content overflow**: Check for horizontal scrolling issues
- **Text readability**: Ensure readable font sizes at all breakpoints
- **Touch targets**: Verify adequate touch target sizes on mobile
- **Navigation usability**: Test navigation accessibility on all devices

## Performance Optimization

### 1. Content Loading
- **Lazy loading**: Load content sections as needed
- **Code splitting**: Split large documentation into chunks
- **Image optimization**: Optimize images for web delivery
- **Caching**: Implement content caching strategies

### 2. Rendering Performance
- **Virtual scrolling**: For large documentation sets
- **Progressive enhancement**: Enhance content progressively
- **Bundle optimization**: Minimize JavaScript bundle size
- **CSS optimization**: Optimize CSS delivery and rendering

## Error Handling

### 1. Content Loading Errors
- **404 handling**: Graceful handling of missing documentation
- **Network errors**: Retry mechanisms and fallback content
- **Parse errors**: Validation and error reporting
- **Missing assets**: Fallback images and placeholder content

### 2. User Experience
- **Loading states**: Show loading indicators during content fetch
- **Error messages**: Clear and actionable error messages
- **Retry mechanisms**: Allow users to retry failed operations
- **Fallback content**: Provide alternative content when primary fails

## Maintenance and Updates

### 1. Content Synchronization
- **Automated updates**: Regular synchronization with documentation source
- **Change detection**: Monitor for documentation changes
- **Version tracking**: Track documentation versions and updates
- **Rollback capability**: Ability to revert problematic updates

### 2. Quality Assurance
- **Automated testing**: Regular testing of content functionality
- **Link checking**: Automated link validation
- **Content review**: Regular review of documentation accuracy
- **User feedback**: Integration of user feedback mechanisms

This mapping reference ensures consistent, accessible, and maintainable transformation of documentation content into the Atomix design system website.