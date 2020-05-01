import React, { useState, useEffect, useRef } from 'react';
import avatar from '../../assets/images/avatarIllustr.svg';
import styles from './index.module.css';
import { useCallbackForEvents } from '../../hooks/customHooks';
import clsx from 'clsx';

const Hero = () => {
  const [hideHero, setHideHero] = useState(false);
  const heroRef = useRef(null);
  const scrollListener = () => {
    if (!hideHero && window.pageYOffset > window.innerHeight) {
      setHideHero(true);
    }
    // if (hideHero && window.pageYOffset < window.innerHeight) {
    //   setHideHero(false);
    // }
    // if (!hideHero && window.pageYOffset < window.innerHeight) {
    //   heroRef.current.style.transform = `translateY(${-0.2 * window.pageYOffset}px)`;
    // }
    if (window.pageYOffset <= 0) {
      setHideHero(false);
    }
    if (hideHero) {
      heroRef.current.style.transform = `translateY(${-0.1 * window.pageYOffset}px)`;
    }
  };

  const callBackScollListener = useCallbackForEvents(scrollListener, [hideHero]);

  useEffect(() => {
    window.addEventListener('scroll', callBackScollListener);
  }, []);
  return (
    <div ref={heroRef} className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <img src={avatar} className={styles.avatar} />
          <p className={styles.title}>Hi !</p>
          <p className={styles.title}>I am Tarun</p>
        </div>
        <div className={clsx([styles.infoContainer, hideHero ? styles.infoContainerVisible : styles.infoContainerHidden])}>

        </div>
      </div>
    </div>
  );
};

export default Hero;
