import React from 'react';
import styles from './index.module.css'

const ScrollIndicator = ({ containerStyles, scrollerStyles }) => {
  const onIndicatorClick = () => {
    window.scrollTo({
      top: 2 * window.innerHeight,
      behavior: 'smooth'
    });
  }
  return (
    <div onClick={onIndicatorClick} className={styles.container} style={containerStyles}>
      <div className={styles.mouse}>
        <div className={styles.scroller} style={scrollerStyles} />
      </div>
    </div>
  );
};

export default ScrollIndicator;
