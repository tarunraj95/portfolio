import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

import { useCallbackForEvents } from '../../hooks/customHooks';

const Hamburger = ({ onClick, modalOpen }) => {
  const [infoSectionVisible, setInfoSectionVisible] = useState(false);
  const handleClick = () => {
    onClick();
  };

  const scrollListener = () => {
    if (window.pageYOffset >= 0.25 * window.innerHeight && window.pageYOffset < 1.9 * window.innerHeight && !infoSectionVisible) {
      setInfoSectionVisible(true);
    } else if ((window.pageYOffset < 0.25 * window.innerHeight || window.pageYOffset > 1.9 * window.innerHeight) && infoSectionVisible) {
      setInfoSectionVisible(false);
    }
  };

  const callBackScollListener = useCallbackForEvents(scrollListener, [infoSectionVisible]);


  useEffect(() => {
    window.addEventListener('scroll', callBackScollListener);
    return (() => {
      window.removeEventListener('scroll', callBackScollListener);
    })
  }, []);

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.blobContainer}>
        <div className={clsx([styles.line, infoSectionVisible && styles.whiteLine, modalOpen && styles.crossLine1])} />
        <div className={clsx([styles.line, infoSectionVisible && styles.whiteLine, !modalOpen && styles.line2, modalOpen && styles.crossLine2])} />
      </div>
    </div>
  );
};

export default Hamburger;
