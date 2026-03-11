export interface SlideData {
  id: string;
  headlineLine1: string;
  headlineLine2: string;
  description: string;
}

export const SLIDES: SlideData[] = [
  {
    id: "slide-1",
    headlineLine1: "Atomix Design System",
    headlineLine2: "One Token to Rule Them All.",
    description:
      "Centralized design truths that scale seamlessly across your entire frontend ecosystem.",
  },
  {
    id: "slide-2",
    headlineLine1: "Glassmorphism Reimagined",
    headlineLine2: "Cinematic Depth & Precision.",
    description:
      "Layer surfaces with advanced frosted effects, noise textures, and pixel-perfect realism.",
  },
  {
    id: "slide-3",
    headlineLine1: "Accessibility First",
    headlineLine2: "Inclusive by Default.",
    description:
      "WCAG 2.1 AA compliance that automatically adjusts contrast without compromising aesthetics.",
  },
  {
    id: "slide-4",
    headlineLine1: "Developer Experience",
    headlineLine2: "Built for Performance & Speed.",
    description:
      "High-performance, type-safe components designed to handle the most demanding enterprise needs.",
  },
  {
    id: "slide-5",
    headlineLine1: "Infinite Customization",
    headlineLine2: "Your Brand, Your Vision.",
    description:
      "Tailor every layer, shadow, and blur strength through a flexible, versioned token engine.",
  },
  {
    id: "slide-6",
    headlineLine1: "Production Ready",
    headlineLine2: "Battle-Tested Architecture.",
    description:
      "40+ accessible React components ready to power high-stakes applications out of the box.",
  },
];
