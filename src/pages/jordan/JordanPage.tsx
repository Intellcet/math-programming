import React from 'react';

import Matrix from './components/MatrixProvider';
import MatrixHandling from './components/MatrixHandling';
import MatrixContainer from './components/MatrixContainer';

const JordanPage = (): React.ReactElement => {
  return (
    <React.Fragment>
      <Matrix>
        <MatrixHandling />
        <MatrixContainer />
      </Matrix>
    </React.Fragment>
  );
};

export default JordanPage;
