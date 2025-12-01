'use client';

import { Spinner } from '@shohojdhara/atomix';
import styles from './loading.module.scss';

export default function ComponentLoading() {
  return (
    <div className={styles.componentLoading}>
      <Spinner size="lg" />
    </div>
  );
}

