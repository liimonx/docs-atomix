// Loading State for Dynamic Documentation Routes
// =============================================================================

'use client';

import { Spinner, Card, Row, GridCol } from '@shohojdhara/atomix';
import styles from './loading.module.scss';

export default function DynamicDocsLoading() {
  return (
    <div className={`container ${styles.container}`}>
      <Row justifyContent="center">
        <GridCol xs={12} md={10}>
          <div className={styles.headerSkeleton}>
            <div className={`${styles.line} ${styles.titleSkeleton} u-mb-3`} />
            <div className={`${styles.line} ${styles.subtitleSkeleton}`} />
          </div>
          <Card className={styles.cardSkeleton}>
            <div className="u-mb-6">
              <div className={`${styles.line} ${styles.lineMd} u-mb-4`} style={{ width: '40%' }} />
              <div className={`${styles.line} ${styles.lineSm} u-mb-2`} style={{ width: '100%' }} />
              <div className={`${styles.line} ${styles.lineSm} u-mb-2`} style={{ width: '95%' }} />
              <div className={`${styles.line} ${styles.lineSm}`} style={{ width: '90%' }} />
            </div>
            <div className="u-mb-6">
              <div className={`${styles.line} ${styles.lineMd} u-mb-4`} style={{ width: '35%' }} />
              <div className={`${styles.line} ${styles.lineSm} u-mb-2`} style={{ width: '100%' }} />
              <div className={`${styles.line} ${styles.lineSm} u-mb-2`} style={{ width: '98%' }} />
              <div className={`${styles.line} ${styles.lineSm}`} style={{ width: '92%' }} />
            </div>
            <div className="u-mb-6">
              <div className={`${styles.line} ${styles.codeSkeleton}`} style={{ width: '100%' }} />
            </div>
            <div className={styles.center}>
              <Spinner size="lg" />
            </div>
          </Card>
        </GridCol>
      </Row>
    </div>
  );
}

