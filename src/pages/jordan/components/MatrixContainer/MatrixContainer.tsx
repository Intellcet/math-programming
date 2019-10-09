/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import PageLayout from '../../../../components/PageLayout';
import { useMatrix } from '../MatrixProvider';
import MatrixCell from './MatrixCell';

import styles from './MatrixContainer.module.pcss';

const genMatrixForRender = ({
  cols,
  rows,
}: {
  cols: number;
  rows: number;
}): number[][] | null => {
  if (cols === 0 && rows === 0) return null;
  const matrix: number[][] = [];
  for (let i = 0; i < rows; i += 1) {
    matrix.push([]);
    for (let j = 0; j < cols; j += 1) {
      matrix[i].push(i + j);
    }
  }

  return matrix;
};

const MatrixContainer = (): React.ReactElement => {
  const { matrix } = useMatrix();
  const [matrixToRender, setMatrixToRender] = useState(
    genMatrixForRender(matrix)
  );

  const handleOnMatrixCellValueChange = ({ value, i, j }: any): void => {
    if (matrixToRender) {
      matrixToRender[i][j] = value < 1000 ? value : 999;
      setMatrixToRender([...matrixToRender]);
    }
  };

  useEffect(() => {
    setMatrixToRender(genMatrixForRender(matrix));
  }, [matrix]);

  const handleCountButtonClick = () => {
    console.log(matrixToRender);
  };

  return (
    <React.Fragment>
      {matrixToRender && (
        <section className={styles.matrixContainer}>
          <PageLayout>
            <div>
              {matrixToRender.map((cols, idxCol) => (
                <div key={idxCol}>
                  {cols.map((el, idxRow) => (
                    <MatrixCell
                      key={idxRow}
                      value={el}
                      onChange={newValue =>
                        handleOnMatrixCellValueChange({
                          value: newValue,
                          i: idxCol,
                          j: idxRow,
                        })
                      }
                    />
                  ))}
                </div>
              ))}
            </div>
          </PageLayout>
        </section>
      )}
    </React.Fragment>
  );
};

export default MatrixContainer;
