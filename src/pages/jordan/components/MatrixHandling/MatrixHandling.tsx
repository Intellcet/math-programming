import React, { useEffect, useState } from 'react';
import cn from 'clsx';

import PageLayout from '../../../../components/PageLayout';
import { useMatrix } from '../MatrixProvider';

import { ErrorCodes, errors } from './ErrorsWithCreatingMatrix';

import styles from './MatrixHandling.module.pcss';

const MatrixHandling = (): React.ReactElement => {
  const [errorCode, setErrorCode] = useState<ErrorCodes>(ErrorCodes.noError);
  const [cols, setCols] = useState(1);
  const [rows, setRows] = useState(1);
  const { matrix, setMatrix } = useMatrix();

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
    if (cols === 0) {
      setErrorCode(ErrorCodes.colsError);
    } else {
      setErrorCode(ErrorCodes.noError);
    }
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
    if (rows === 0) {
      setErrorCode(ErrorCodes.rowsError);
    } else {
      setErrorCode(ErrorCodes.noError);
    }
  };

  const handleCreateMatrix = () => {
    if (cols === 0 && rows === 0) {
      setErrorCode(ErrorCodes.bothError);
      return;
    }
    if (cols === 0) {
      setErrorCode(ErrorCodes.colsError);
      return;
    }
    if (rows === 0) {
      setErrorCode(ErrorCodes.rowsError);
      return;
    }
    setErrorCode(ErrorCodes.noError);
    matrix.rows = rows;
    matrix.cols = cols;
    setMatrix({ ...matrix });
  };

  const handleCountJordan = () => {
    matrix.isLookingJordanNumber = !matrix.isLookingJordanNumber;
    setMatrix({ ...matrix });
  };

  useEffect(() => {
    if (matrix.jordanNumber && matrix.isLookingJordanNumber) {
      console.log(matrix.jordanNumber);
    }
  }, [matrix]);

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
          <div className={styles.buttonsContainer}>
            <button
              className={styles.handlingButton}
              onClick={handleCreateMatrix}
            >
              Создать матрицу
            </button>
            {matrix.cols !== 0 && matrix.rows !== 0 && (
              <button
                className={styles.handlingButton}
                onClick={handleCountJordan}
              >
                {matrix.isLookingJordanNumber
                  ? 'Отменить выбор Жорданова числа'
                  : 'Выбрать Жорданово число и посчитать'}
              </button>
            )}
          </div>
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
