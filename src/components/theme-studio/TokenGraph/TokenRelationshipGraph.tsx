import { FC, useMemo } from 'react';
import { Card } from '@shohojdhara/atomix';
import { useThemeStudioStore } from '@/stores/themeStudioStore';
import styles from './TokenRelationshipGraph.module.scss';

interface TokenRelationshipGraphProps {
  tokenName?: string;
}

export const TokenRelationshipGraph: FC<TokenRelationshipGraphProps> = ({ tokenName }) => {
  const { lightTokens, darkTokens, activeMode } = useThemeStudioStore();

  const currentTokens = activeMode === 'light' ? lightTokens : darkTokens;

  // Find tokens that reference other tokens
  const relationships = useMemo(() => {
    const deps: Record<string, string[]> = {};

    Object.entries(currentTokens).forEach(([key, value]) => {
      // Find references to other tokens (var(--atomix-*))
      const matches = value.match(/var\(--atomix-[^)]+\)/g);
      if (matches) {
        const referenced = matches.map((match) => {
          const tokenMatch = match.match(/--atomix-[^)]+/);
          return tokenMatch ? tokenMatch[0] : '';
        }).filter(Boolean);

        if (referenced.length > 0) {
          deps[key] = referenced;
        }
      }
    });

    return deps;
  }, [currentTokens]);

  // If a specific token is selected, show its relationships
  const filteredRelationships = useMemo(() => {
    if (!tokenName) return relationships;

    const result: Record<string, string[]> = {};
    
    // Find tokens that reference this token
    Object.entries(relationships).forEach(([key, refs]) => {
      if (refs.includes(tokenName)) {
        result[key] = refs;
      }
    });

    // Also show what this token references
    if (relationships[tokenName]) {
      result[tokenName] = relationships[tokenName];
    }

    return result;
  }, [tokenName, relationships]);

  if (Object.keys(filteredRelationships).length === 0) {
    return (
      <Card className={styles.tokenRelationshipGraph}>
        <div className={styles.tokenRelationshipGraph__empty}>
          <p>No token relationships found.</p>
          {tokenName && <p>Token "{tokenName}" has no dependencies or dependents.</p>}
        </div>
      </Card>
    );
  }

  return (
    <Card className={styles.tokenRelationshipGraph}>
      <h3 className={styles.tokenRelationshipGraph__title}>
        Token Relationships
        {tokenName && <span className={styles.tokenRelationshipGraph__subtitle}>
          for {tokenName}
        </span>}
      </h3>

      <div className={styles.tokenRelationshipGraph__list}>
        {Object.entries(filteredRelationships).map(([token, refs]) => (
          <div key={token} className={styles.tokenRelationshipGraph__item}>
            <div className={styles.tokenRelationshipGraph__token}>
              <code className={styles.tokenRelationshipGraph__tokenName}>{token}</code>
            </div>
            <div className={styles.tokenRelationshipGraph__deps}>
              <span className={styles.tokenRelationshipGraph__depsLabel}>References:</span>
              {refs.map((ref, index) => (
                <code key={index} className={styles.tokenRelationshipGraph__dep}>
                  {ref}
                </code>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

