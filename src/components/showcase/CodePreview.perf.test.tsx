import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CodePreview } from './CodePreview';

describe('CodePreview Performance', () => {
  it('should measure rendering time for a large number of form elements', () => {
    // Generate a long string of JSX code with many form elements
    const generateCode = (count: number) => {
      let elements = '';
      for (let i = 0; i < count; i++) {
        elements += `
          <input type="text" value="test${i}" />
          <textarea value="test${i}" />
          <select value="test${i}"><option>1</option></select>
          <Checkbox checked={true} />
          <Radio checked={false} />
          <Switch checked={true} />
          <Toggle checked={false} />
        `;
      }
      return `<div className="form-container">${elements}</div>`;
    };

    const code = generateCode(500); // 500 iterations * 7 elements = 3500 form elements

    const start = performance.now();
    const { unmount } = render(<CodePreview code={code} language="tsx" />);
    const end = performance.now();

    const duration = end - start;
    console.log(`[Perf] CodePreview render with 3500 form elements took: ${duration.toFixed(2)}ms`);

    unmount();
    expect(duration).toBeGreaterThan(0);
  });
});
