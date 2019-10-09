import { JordanNumber, Matrix } from '../MatrixProvider';

let startedMatrix: number[][] = [];
let element: JordanNumber | null = null;

const calculateCells = (matrix: Matrix) => {
  const { values } = matrix;
  if (values) {
    const calculate = ({ i, j }: { i: number; j: number }) => {
      if (element) {
        const a = values[i][j];
        const b = values[i][element.j];
        const c = values[element.i][j];
        startedMatrix[i][j] = Number(
          (a - (b * c) / Number(element.value)).toFixed(3)
        );
        return startedMatrix[i][j];
      }
      return null;
    };

    const calculateValueOnPermitRow = ({ i, j }: { i: number; j: number }) => {
      if (element) {
        startedMatrix[i][j] = Number(
          (startedMatrix[i][j] / element.value).toFixed(3)
        );
        return startedMatrix[i][j];
      }
      return null;
    };

    const calculateValueOnPermitColumn = ({
      i,
      j,
    }: {
      i: number;
      j: number;
    }) => {
      if (element) {
        startedMatrix[i][j] = Number(
          (-startedMatrix[i][j] / element.value).toFixed(3)
        );
        return startedMatrix[i][j];
      }
      return null;
    };

    const getValue = ({ i, j }: { i: number; j: number }) => {
      if (element) {
        if (i !== element.i && j !== element.j) {
          return calculate({ i, j });
        }
        if (i === element.i) {
          return calculateValueOnPermitRow({ i, j });
        }
        return calculateValueOnPermitColumn({ i, j });
      }
      return null;
    };

    for (let i = 0; i < values.length; i += 1) {
      for (let j = 0; j < values[i].length; j += 1) {
        const value = getValue({ i, j });
        if (value) {
          startedMatrix[i][j] = value;
        }
      }
    }
  }
};

export const calculateJordan = (matrix: Matrix): number[][] | null => {
  if (matrix.jordanNumber && matrix.values) {
    element = Object.assign({}, matrix.jordanNumber);
    startedMatrix = [...matrix.values];
    calculateCells(matrix);
    startedMatrix[element.i][element.j] = Number(
      (1 / element.value).toFixed(3)
    );
    return startedMatrix;
  }
  return null;
};
