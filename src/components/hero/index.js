import React, { useState, useEffect, useRef } from 'react';
import avatar from '../../assets/images/avatarIllustr.svg';
import styles from './index.module.css';
import { useCallbackForEvents } from '../../hooks/customHooks';
import anime from 'animejs';
import { getPlatform } from '../../helpers'

const Hero = () => {
  const [showInfo, setShowInfo] = useState(false);
  const dynamicTextRef = useRef(null);
  const infoTextRef = useRef(null);
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const avatarRef = useRef(null);
  const introTextRef = useRef(null);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

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
    'Angular 2+ .',
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
  }, []);

  useEffect(() => {
    if (showInfo) {
      const animTimeline = anime.timeline({
        duration: 1000,
        easing: 'easeInOutExpo'
      });
      animTimeline.add({
        targets: firstNameRef.current,
        translateX: window.innerWidth / 2 + 250
      }, 100);
      animTimeline.add({
        targets: lastNameRef.current,
        translateX: -1 * (window.innerWidth / 2) - 250
      }, 100);
      animTimeline.add({
        targets: infoRef.current,
        translateX: 0,
      }, 200);
      animTimeline.add({
        targets: infoTextRef.current,
        opacity: 1,
        translateY: 0,
        easing: 'easeInOutExpo',
        duration: 400
      }, '-=200');
      animTimeline.add({
        targets: introTextRef.current,
        opacity: 0,
      }, 200);
      animTimeline.add({
        targets: avatarRef.current,
        opacity: 1,
      }, 300);
    } else {
      const animTimeline = anime.timeline({
        duration: 1000,
        easing: 'easeInOutExpo'
      });
      animTimeline.add({
        targets: infoRef.current,
        translateX: window.innerWidth,
      });
      animTimeline.add({
        targets: firstNameRef.current,
        translateX: 0
      }, 200);
      animTimeline.add({
        targets: lastNameRef.current,
        translateX: 0
      }, 200);
      animTimeline.add({
        targets: infoTextRef.current,
        opacity: 0,
        translateY: 80,
        easing: 'easeInOutExpo',
        duration: 400
      }, '-=1000');
      animTimeline.add({
        targets: introTextRef.current,
        opacity: 1,
      }, 200);
      animTimeline.add({
        targets: avatarRef.current,
        opacity: 0
      }, 300);
    }
  }, [showInfo]);

  return (
    <div ref={heroRef} className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <div ref={introTextRef}>
            <p className={styles.greet}>Hey I&apos;m</p>
            <p ref={firstNameRef} className={styles.title}>Tarun</p>
            <p ref={lastNameRef} className={styles.title}>Khanna</p>
          </div>
        </div>
      </div>
      <div ref={infoRef} className={styles.infoContainer}>
        <img ref={avatarRef} src={avatar} className={styles.avatar} />
        <div className={styles.infoTextContainer} ref={infoTextRef}>
          <p className={styles.infoText}>
            Eiusmod fugiat et aliqua non amet minim.Dolore aliquip labore culpa officia.
          </p>
          <br />
          <p className={styles.infoText}>
            Javascript Application developer with experience in
              {getPlatform().desktop ? <span ref={dynamicTextRef} className={styles.skillText}>React .</span> : null}
          </p>
          {getPlatform().mobile ? (
            <p style={{ height: 50 }} className={styles.infoText}>
              <span ref={dynamicTextRef} className={styles.skillText}>React .</span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Hero;
