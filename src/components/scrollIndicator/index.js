import React from 'react';
import styles from './index.module.css'

const ScrollIndicator = ({ containerStyles, scrollerStyles }) => {
  return (
    <div className={styles.container} style={containerStyles}>
      <div className={styles.mouse}>
        <div className={styles.scroller} style={scrollerStyles} />
      </div>
    </div>
  );
};

export default ScrollIndicator;
