import { FC, useMemo, useState, useRef, useCallback, useEffect } from 'react';
import { Badge } from '@shohojdhara/atomix';
import styles from './DiffViewer.module.scss';

interface DiffViewerProps {
  current: Record<string, string>;
  comparison: Record<string, string>;
}

export const DiffViewer: FC<DiffViewerProps> = ({ current, comparison }) => {
  const [splitWidth, setSplitWidth] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const differences = useMemo(() => {
    const allKeys = new Set([...Object.keys(current), ...Object.keys(comparison)]);
    const diffs: Array<{
      key: string;
      current: string;
      comparison: string;
      changed: boolean;
    }> = [];

    allKeys.forEach((key) => {
      const currentValue = current[key] || '';
      const comparisonValue = comparison[key] || '';
      const changed = currentValue !== comparisonValue;

      diffs.push({
        key,
        current: currentValue,
        comparison: comparisonValue,
        changed,
      });
    });

    return diffs.sort((a, b) => {
      if (a.changed && !b.changed) return -1;
      if (!a.changed && b.changed) return 1;
      return a.key.localeCompare(b.key);
    });
  }, [current, comparison]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      
      // Constrain between 20% and 80%
      const constrainedWidth = Math.max(20, Math.min(80, newWidth));
      setSplitWidth(constrainedWidth);
    },
    [isDragging]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const changedCount = differences.filter((d) => d.changed).length;
  const unchangedCount = differences.length - changedCount;

  return (
    <div className={styles.diffViewer}>
      <div className={styles.diffViewer__summary}>
        <Badge variant="info" size="sm" label={`${changedCount} changed`} />
        <Badge variant="secondary" size="sm" label={`${unchangedCount} unchanged`} />
      </div>

      <div className={styles.diffViewer__splitContainer} ref={containerRef}>
        <div
          id="diff-viewer-panel-current"
          className={styles.diffViewer__panel}
          style={{ width: `${splitWidth}%` }}
          role="region"
          aria-label="Current theme values"
        >
          <div className={styles.diffViewer__panelHeader}>
            <h4 className={styles.diffViewer__panelTitle}>Current</h4>
          </div>
          <div className={styles.diffViewer__list} role="list">
            {differences.map((diff) => (
              <div
                key={diff.key}
                className={`${styles.diffViewer__item} ${
                  diff.changed ? styles['diffViewer__item--changed'] : ''
                }`}
                role="listitem"
                aria-label={`Token ${diff.key}: ${diff.current || 'not set'}`}
              >
                <div className={styles.diffViewer__key}>{diff.key}</div>
                <div className={styles.diffViewer__value}>
                  <code className={styles.diffViewer__code}>
                    {diff.current || '(not set)'}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          id="diff-viewer-divider"
          className={styles.diffViewer__divider}
          onMouseDown={handleMouseDown}
          role="separator"
          aria-label="Resize comparison panels"
          aria-orientation="vertical"
          aria-valuemin={20}
          aria-valuemax={80}
          aria-valuenow={splitWidth}
          tabIndex={0}
        >
          <div className={styles.diffViewer__dividerHandle} aria-hidden="true" />
        </div>

        <div
          id="diff-viewer-panel-comparison"
          className={styles.diffViewer__panel}
          style={{ width: `${100 - splitWidth}%` }}
          role="region"
          aria-label="Comparison theme values"
        >
          <div className={styles.diffViewer__panelHeader}>
            <h4 className={styles.diffViewer__panelTitle}>Comparison</h4>
          </div>
          <div className={styles.diffViewer__list} role="list">
            {differences.map((diff) => (
              <div
                key={diff.key}
                className={`${styles.diffViewer__item} ${
                  diff.changed ? styles['diffViewer__item--changed'] : ''
                }`}
                role="listitem"
                aria-label={`Token ${diff.key}: ${diff.comparison || 'not set'}`}
              >
                <div className={styles.diffViewer__key}>{diff.key}</div>
                <div className={styles.diffViewer__value}>
                  <code className={styles.diffViewer__code}>
                    {diff.comparison || '(not set)'}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

