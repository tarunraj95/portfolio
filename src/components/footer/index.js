import React from 'react';
import waveSvg from '../../assets/images/wave.svg';
import styles from './index.module.css';
import { getPlatform } from '../../helpers';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        {getPlatform().desktop ? <p className={styles.copyrightText}>© 2020 - Designed and developed by Tarun Khanna</p> : null}
        <div className={styles.socialContainer}>
          <p className={styles.socialLink}>LINKEDIN</p>
          <p className={styles.socialLink}>INSTAGRAM</p>
          <p className={styles.socialLink}>FACEBOOK</p>
        </div>
        {getPlatform().mobile ? <p className={styles.copyrightText}>© 2020 - Designed and developed by Tarun Khanna</p> : null}
      </div>
      <img className={styles.footerImg} src={waveSvg} />
    </div>
  )
}

export default Footer
