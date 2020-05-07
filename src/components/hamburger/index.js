import React, { useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

const Hamburger = ({ onClick }) => {
  const [isCross, setIsCross] = useState(false);

  const handleClick = () => {
    setIsCross(!isCross);
    onClick();
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={clsx([styles.line, isCross && styles.crossLine1])} />
      <div className={clsx([styles.line, isCross && styles.crossLine2])} />
    </div>
  );
};

export default Hamburger;
