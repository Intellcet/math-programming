/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';

import PageLayout from '../../../../components/PageLayout';
import { useMatrix } from '../MatrixProvider';
import MatrixCell from './MatrixCell';

import styles from './MatrixContainer.module.pcss';

const genMatrixForRender = ({
  cols,
  rows,
  values,
}: {
  cols: number;
  rows: number;
  values?: number[][];
}): number[][] | null => {
  if (cols === 0 && rows === 0) return null;
  const matrix: number[][] = [];
  for (let i = 0; i < rows; i += 1) {
    matrix.push([]);
    for (let j = 0; j < cols; j += 1) {
      matrix[i].push(
        values && values[i] && values[i][j] ? values[i][j] : i + j
      );
    }
  }

  return matrix;
};

const MatrixContainer = (): React.ReactElement => {
  const { matrix, setMatrix } = useMatrix();
  const [matrixToRender, setMatrixToRender] = useState(
    genMatrixForRender(matrix)
  );

  const handleOnMatrixCellValueChange = ({ value, i, j }: any): void => {
    if (matrixToRender) {
      matrixToRender[i][j] = value < 1000 ? value : 999;
      setMatrixToRender([...matrixToRender]);
      matrix.values = [...matrixToRender];
    }
  };

  const handleMatrixCellClick = ({ i, j }: { i: number; j: number }): void => {
    if (matrix.values && matrix.isLookingJordanNumber) {
      matrix.jordanNumber = { i, j, value: matrix.values[i][j] };
      setMatrix({ ...matrix });
    }
  };

  useEffect(() => {
    const matr = genMatrixForRender(matrix);
    setMatrixToRender(matr);
    if (matr) {
      matrix.values = [...matr];
    }
  }, [matrix]);

  return (
    <React.Fragment>
      {matrixToRender && (
        <React.Fragment>
          <section className={styles.matrixContainer}>
            <PageLayout className={styles.matrixWrapper}>
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
                      onClick={() =>
                        handleMatrixCellClick({ i: idxCol, j: idxRow })
                      }
                    />
                  ))}
                </div>
              ))}
            </PageLayout>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MatrixContainer;
