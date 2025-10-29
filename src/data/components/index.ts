// Simplified index file for testing
console.log('Importing buttonMetadata...');
import { buttonMetadata } from './button';
import { badgeMetadata } from './badge';
import { cardMetadata } from './card';
import { accordionMetadata } from './accordion';
import { atomixGlassMetadata } from './atomix-glass';

export {
  buttonMetadata,
  badgeMetadata,
  cardMetadata,
  accordionMetadata,
  atomixGlassMetadata
};

export const componentMetadata = [
  buttonMetadata,
  badgeMetadata,
  cardMetadata,
  accordionMetadata,
  atomixGlassMetadata,
];

export const getComponentById = (id: string) => {
  return componentMetadata.find((component) => component.id === id);
};

export const getComponentsByCategory = (category: string) => {
  return componentMetadata.filter((component) => component.category === category);
};

export const getAllCategories = () => {
  const categories = new Set(componentMetadata.map((component) => component.category));
  return Array.from(categories);
};