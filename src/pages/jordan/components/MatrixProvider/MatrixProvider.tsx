import React, { useContext, useMemo, useState } from 'react';

type Matrix = {
  cols: number;
  rows: number;
  values?: number[][];
  isLookingJordanNumber?: boolean;
  jordanNumber?: {
    i: number;
    j: number;
    value: number;
  };
};

type MatrixContextType = {
  matrix: Matrix;
  setMatrix: (matrix: Matrix) => void;
};

type MatrixProviderProps = {
  children: React.ReactNode;
};

const MatrixContext = React.createContext<MatrixContextType>({
  matrix: {
    cols: 0,
    rows: 0,
  },
  setMatrix: matrix => {},
});

export const useMatrix = (): MatrixContextType => {
  const context = useContext(MatrixContext);
  if (!context) {
    throw new Error(
      'Matrix compound components cannot be rendered outside the MatrixProvider component'
    );
  }

  return context;
};

const MatrixProvider = (props: MatrixProviderProps) => {
  const { children } = props;
  const [matrix, setMatrix] = useState<Matrix>({ cols: 0, rows: 0 });
  useMatrix();
  const contextValue = useMemo(() => ({ matrix, setMatrix }), [matrix]);

  return (
    <MatrixContext.Provider value={contextValue}>
      {children}
    </MatrixContext.Provider>
  );
};

export default MatrixProvider;
