export enum ErrorCodes {
  noError,
  rowsError,
  colsError,
  bothError
}

export const errors = {
  [ErrorCodes.rowsError]: 'Количество строк матрицы не может быть меньше нуля или равно ему',
  [ErrorCodes.colsError]: 'Количество столбцов матрицы не может быть меньше нуля или равно ему',
  [ErrorCodes.bothError]: 'Не введены данные',
};
