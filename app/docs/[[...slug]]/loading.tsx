// Loading State for Dynamic Documentation Routes
// =============================================================================

'use client';

import { Spinner, Card, Row, GridCol } from '@shohojdhara/atomix';
import styles from './loading.module.scss';

export default function DynamicDocsLoading() {
  return (
    <div className={`container ${styles.documentationLoading}`}>
      <Row justifyContent="center">
        <GridCol xs={12} md={10}>
          <div className={styles.documentationLoading__headerSkeleton}>
            <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__titleSkeleton} u-mb-3`} />
            <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__subtitleSkeleton}`} />
          </div>
          <Card className={styles.documentationLoading__cardSkeleton}>
            <div className="u-mb-6">
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__lineMd} u-mb-4`} style={{ width: '40%' }} />
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__lineSm} u-mb-2`} style={{ width: '100%' }} />
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__lineSm} u-mb-2`} style={{ width: '95%' }} />
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__lineSm}`} style={{ width: '90%' }} />
            </div>
            <div className="u-mb-6">
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__lineMd} u-mb-4`} style={{ width: '35%' }} />
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__lineSm} u-mb-2`} style={{ width: '100%' }} />
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__lineSm} u-mb-2`} style={{ width: '98%' }} />
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__lineSm}`} style={{ width: '92%' }} />
            </div>
            <div className="u-mb-6">
              <div className={`${styles.documentationLoading__line} ${styles.documentationLoading__codeSkeleton}`} style={{ width: '100%' }} />
            </div>
            <div className={styles.documentationLoading__center}>
              <Spinner size="lg" />
            </div>
          </Card>
        </GridCol>
      </Row>
    </div>
  );
}

