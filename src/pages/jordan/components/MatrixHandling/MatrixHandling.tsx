import React, { useState } from 'react';
import cn from 'clsx';

import PageLayout from '../../../../components/PageLayout';

import { ErrorCodes, errors } from './ErrorsWithCreatingMatrix';

import styles from './MatrixHandling.module.pcss';

const MatrixHandling = (): React.ReactElement => {
  const [errorCode, setErrorCode] = useState<ErrorCodes>(ErrorCodes.noError);
  const [cols, setCols] = useState(0);
  const [rows, setRows] = useState(0);

  const handleRowsChange = (
    ev: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    const {
      currentTarget: { value },
    } = ev;
    if (value.length > 3) {
      setRows(100);
    } else {
      setRows(Number(value));
    }
    setErrorCode(ErrorCodes.noError);
  };

  const handleColsChange = (
    ev: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    const {
      currentTarget: { value },
    } = ev;
    if (value.length > 3) {
      setCols(100);
    } else {
      setCols(Number(value));
    }
    setErrorCode(ErrorCodes.noError);
  };

  const handleCreateMatrix = () => {
    if (cols === 0 && rows === 0) {
      setErrorCode(ErrorCodes.bothError);
    } else {
      setErrorCode(ErrorCodes.noError);
      console.log(cols, rows);
    }
  };

  return (
    <section className={styles.matrixHandlingContainer}>
      <PageLayout>
        <div className={styles.matrixHandlingWrapper}>
          <p className={styles.setMatrixElementContainer}>
            <span className={styles.planeText}>
              Введите количество строк матрицы:{' '}
            </span>
            <input
              value={rows}
              onChange={handleRowsChange}
              className={styles.inputMatrixSize}
              type="number"
            />
          </p>
          <p className={styles.setMatrixElementContainer}>
            <span className={styles.planeText}>
              Введите количество столбцов матрицы:{' '}
            </span>
            <input
              value={cols}
              onChange={handleColsChange}
              className={styles.inputMatrixSize}
              type="number"
            />
          </p>
          <button
            className={styles.createMatrixButton}
            onClick={handleCreateMatrix}
          >
            Создать матрицу
          </button>
          <p
            className={cn(
              styles.errorText,
              errorCode !== ErrorCodes.noError && styles.errorTextShown
            )}
          >
            {errorCode !== ErrorCodes.noError && errors[errorCode]}
          </p>
        </div>
      </PageLayout>
    </section>
  );
};

export default MatrixHandling;
