import React from 'react';

import styles from './MatrixBlock.module.pcss';

type Matrix = string[][];

const defaultMatrix: Matrix = [
  ['1', '2', '3'],
  ['1', '2', '3'],
  ['1', '2', '3'],
];

const MatrixBlock = (): React.ReactElement => {
  return (
    <div className={styles.matrixContainer}>
      <div>
        <span>Введите количество строк матрицы: </span>
        <input type="number" />
        <span>Введите количество столбцов матрицы: </span>
        <input type="number" />
        <button>Создать матрицу</button>
      </div>
    </div>
  );
};

export default MatrixBlock;
