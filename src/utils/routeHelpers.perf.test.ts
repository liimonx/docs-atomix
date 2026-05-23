import { describe, it, expect, beforeAll } from 'vitest';
import { getNextRoute, getPreviousRoute, getSiblingRoutes, getSectionForRoute, getRouteHierarchy } from './routeHelpers';
import { navigationData } from '@/data/navigation';
import { NavigationItem } from '@/types';

describe('routeHelpers Performance', () => {
  let itemsToTest: NavigationItem[] = [];

  beforeAll(() => {
    // Collect all items from navigationData
    navigationData.forEach(section => {
      section.items.forEach(item => {
        itemsToTest.push(item);
      });
    });
    // Duplicate array multiple times to increase test duration and see performance easily
    const initialItems = [...itemsToTest];
    for(let i=0; i<100; i++) {
        itemsToTest = itemsToTest.concat(initialItems);
    }
  });

  it('measures getNextRoute performance', () => {
    const start = performance.now();
    for (const item of itemsToTest) {
      getNextRoute(item);
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`getNextRoute for ${itemsToTest.length} calls took ${duration.toFixed(2)}ms`);
    expect(duration).toBeLessThan(1000);
  });

  it('measures getPreviousRoute performance', () => {
    const start = performance.now();
    for (const item of itemsToTest) {
      getPreviousRoute(item);
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`getPreviousRoute for ${itemsToTest.length} calls took ${duration.toFixed(2)}ms`);
    expect(duration).toBeLessThan(1000);
  });

  it('measures getSiblingRoutes performance', () => {
    const start = performance.now();
    for (const item of itemsToTest) {
      getSiblingRoutes(item);
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`getSiblingRoutes for ${itemsToTest.length} calls took ${duration.toFixed(2)}ms`);
    expect(duration).toBeLessThan(1000);
  });

  it('measures getSectionForRoute performance', () => {
    const start = performance.now();
    for (const item of itemsToTest) {
      getSectionForRoute(item.path);
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`getSectionForRoute for ${itemsToTest.length} calls took ${duration.toFixed(2)}ms`);
    expect(duration).toBeLessThan(1000);
  });

  it('measures getRouteHierarchy performance', () => {
    const start = performance.now();
    for (const item of itemsToTest) {
      getRouteHierarchy(item.path);
    }
    const end = performance.now();
    const duration = end - start;
    console.log(`getRouteHierarchy for ${itemsToTest.length} calls took ${duration.toFixed(2)}ms`);
    expect(duration).toBeLessThan(1000);
  });
});
