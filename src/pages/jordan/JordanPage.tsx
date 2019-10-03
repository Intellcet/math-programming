import React from 'react';

import styles from './JordanPage.module.pcss';
import MatrixHandling from './components/MatrixHandling';

const JordanPage = (): React.ReactElement => {
  return (
    <div className={styles.pageContainer}>
      <MatrixHandling />
    </div>
  );
};

export default JordanPage;
