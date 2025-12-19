import { FC } from 'react';
import { CategoryNav } from './CategoryNav';
import { TokenList } from './TokenList';
import { BulkOperations } from './BulkOperations';
import styles from './TokenEditorPanel.module.scss';

export const TokenEditorPanel: FC = () => {
  return (
    <div className="u-mt-4 u-px-2">
      <BulkOperations />
      
      <div className={styles.tokenEditorPanel__content}>
        <aside className={styles.tokenEditorPanel__sidebar} aria-label="Token categories">
          <CategoryNav />
        </aside>
        
        <main className={styles.tokenEditorPanel__main} aria-label="Token editor">
          <TokenList />
        </main>
      </div>
    </div>
  );
};

