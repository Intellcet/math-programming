import React, { useEffect, useRef, useState } from 'react';

import styles from './MatrixCell.module.pcss';

type MatrixCellProps = {
  value: number;
  onChange: (newValue: number) => void;
};

const MatrixCell = (props: MatrixCellProps) => {
  const { value, onChange } = props;
  const [isCellDisabled, setIsCellDisabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCellWrapperClick = () => {
    setIsCellDisabled(false);
  };

  const handleCellBlur = () => {
    setIsCellDisabled(true);
  };

  const handleCellValueChange = (
    ev: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const {
      currentTarget: { value },
    } = ev;
    if (onChange) {
      onChange(Number(value));
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isCellDisabled]);

  return (
    <span onClick={handleCellWrapperClick} className={styles.cellContainer}>
      <input
        ref={inputRef}
        value={value}
        onChange={handleCellValueChange}
        type="number"
        disabled={isCellDisabled}
        onBlur={handleCellBlur}
        className={styles.cell}
        step="0.00001"
      />
    </span>
  );
};

export default MatrixCell;
