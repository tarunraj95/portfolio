import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

import avatar from '../../assets/images/profile.jpg';
import styles from './index.module.css';
import { useCallbackForEvents } from '../../hooks/customHooks';
import { getPlatform } from '../../utilities/helpers'
import ScrollIndicator from '../scrollIndicator';
import { EXP_MONTHS, TOTAL_EXP_YEARS } from '../../utilities/config';

const Hero = () => {
  const [showInfo, setShowInfo] = useState(false);
  const dynamicTextRef = useRef(null);
  const heroRef = useRef(null);

  const scrollListener = () => {
    if (window.pageYOffset >= 0.25 * window.innerHeight && !showInfo) {
      setShowInfo(true);
    }
    if (window.pageYOffset < 0.25 * window.innerHeight && showInfo) {
      setShowInfo(false);
    }
  };

  const callBackScollListener = useCallbackForEvents(scrollListener, [showInfo]);

  // List of dynamic skill words
  const _CONTENT = [
    'React .',
    'Javascript .',
    'Svelte .',
    'Angular .',
    'React Native .',
    'HTML/CSS .'
  ];

  // Current sentence being processed
  let _ACTIVE_WORD = 0;

  // Character number of the current sentence being processed
  let _ACTIVE_WORD_INDEX = 0;

  // Holds the handle returned from setInterval
  let _INTERVAL_VAL;

  // Implements deleting effect
  function Delete() {
    // Get substring with 1 characater deleted
    const text = _CONTENT[_ACTIVE_WORD].substring(0, _ACTIVE_WORD_INDEX - 1);
    dynamicTextRef.current.innerHTML = text;
    _ACTIVE_WORD_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === '') {
      clearInterval(_INTERVAL_VAL);

      // If current sentence was last then display the first one, else move to the next
      if (_ACTIVE_WORD === (_CONTENT.length - 1)) _ACTIVE_WORD = 0;
      else _ACTIVE_WORD++;

      _ACTIVE_WORD_INDEX = 0;

      // Start to display the next sentence after some time
      setTimeout(() => {
        _INTERVAL_VAL = setInterval(Type, 100);//eslint-disable-line
      }, 200);
    }
  }

  // Implements typing effect
  function Type() {
    // Get substring with 1 characater added
    const text = _CONTENT[_ACTIVE_WORD].substring(0, _ACTIVE_WORD_INDEX + 1);
    dynamicTextRef.current.innerHTML = text;
    _ACTIVE_WORD_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_ACTIVE_WORD]) {
      clearInterval(_INTERVAL_VAL);
      setTimeout(() => {
        _INTERVAL_VAL = setInterval(Delete, 50);
      }, 1000);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', callBackScollListener);
    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);

    return (() => {
      window.removeEventListener('scroll', callBackScollListener);
    })
  }, []);

  return (
    <div ref={heroRef} className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <div className={clsx([styles.introTitle, showInfo ? styles.introTitleFadeOut : styles.introTitleFadeIn])}>
            <p className={styles.greet}>Hey I&apos;m</p>
            <p className={clsx([styles.name, showInfo ? styles.firstNameSlideOut : styles.firstNameSlideIn])}>Tarun</p>
            <p className={clsx([styles.name, showInfo ? styles.lastNameSlideOut : styles.lastNameSlideIn])}>Khanna</p>
            <p className={clsx([styles.designationText])}>A Software Engineer</p>
          </div>
        </div>
      </div>
      <div className={clsx([styles.infoContainer, showInfo ? styles.infoContainerSlideIn : styles.infoContainerSlideOut])}>
        <img src={avatar} className={clsx([styles.avatar, showInfo ? styles.avatarFadeIn : styles.avatarFadeOut])} />
        <div className={clsx([styles.infoTextContainer, showInfo ? styles.infoTextSlideIn : styles.infoTextSlideOut])}>
          <p className={styles.infoText}>
            Hey there, fellow digital explorer! 🚀
          </p>
          <p className={styles.infoText}>
            I'm Tarun - a frontend fanatic. I craft captivating web and mobile apps that'll make your heart race with excitement.✨
          </p>
          <br />
          <p className={clsx([styles.infoText, styles.dynamicTextWrapper])}>
            I have over {TOTAL_EXP_YEARS} years {EXP_MONTHS ? `and ${EXP_MONTHS} months ` : ''}of professional experience working with
              {getPlatform().desktop ? <span ref={dynamicTextRef} className={styles.skillText}>React .</span> : null}
          </p>
          {getPlatform().mobile ? (
            <p style={{ height: 50 }} className={styles.infoText}>
              <span ref={dynamicTextRef} className={styles.skillText}>React .</span>
            </p>
          ) : null}
        </div>
      </div>
      <ScrollIndicator scrollerStyles={showInfo ? { backgroundColor: '#fff' } : null} containerStyles={showInfo ? { borderColor: '#fff' } : null} />
    </div>
  );
};

export default Hero;
