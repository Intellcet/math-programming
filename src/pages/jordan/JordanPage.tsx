import React from 'react';

import Matrix from './components/MatrixProvider';
import MatrixHandling from './components/MatrixHandling';

const JordanPage = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Matrix>
        <MatrixHandling />
      </Matrix>
    </React.Fragment>
  );
};

export default JordanPage;
