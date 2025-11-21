'use client';

import { Spinner } from '@shohojdhara/atomix';
import styles from './loading.module.scss';

export default function ComponentLoading() {
  return (
    <div className={styles.container}>
      <Spinner size="lg" />
    </div>
  );
}

