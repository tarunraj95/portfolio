import React, { useState, useEffect, useRef } from 'react';
import avatar from '../../assets/images/avatarIllustr.svg';
import styles from './index.module.css';
import { useCallbackForEvents } from '../../hooks/customHooks';
import anime from 'animejs';

const Hero = () => {
  const [hideHero, setHideHero] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const dynamicTextRef = useRef(null);
  const infoTextRef = useRef(null);
  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const avatarRef = useRef(null);
  const introTextRef = useRef(null);

  const scrollListener = () => {
    if (!hideHero && window.pageYOffset > window.innerHeight) {
      setHideHero(true);
    }
    if (hideHero && window.pageYOffset <= 0) {
      setHideHero(false);
    }
    if (window.pageYOffset >= 0.25 * window.innerHeight && !showInfo) {
      setShowInfo(true);
    }
    if (window.pageYOffset < 0.25 * window.innerHeight && showInfo) {
      setShowInfo(false);
    }

    if (hideHero) {
      if (window.pageYOffset > window.innerHeight) {
        heroRef.current.style.transform = `translateY(${-0.2 * (window.pageYOffset - window.innerHeight)}px)`;
      } else heroRef.current.style.transform = 'translateY(0px)';
    }
  };

  const callBackScollListener = useCallbackForEvents(scrollListener, [hideHero, showInfo]);

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
        targets: infoRef.current,
        right: 0,
      });
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
        visibility: 'hidden',
      }, 200);
      animTimeline.add({
        targets: avatarRef.current,
        translateX: window.innerWidth / 4,
        scale: 0.70
      }, 300);
    } else {
      const animTimeline = anime.timeline({
        duration: 1000,
        easing: 'easeInOutExpo'
      });
      animTimeline.add({
        targets: infoTextRef.current,
        opacity: 0,
        translateY: 80,
        duration: 400,
        easing: 'easeInOutExpo'
      });
      animTimeline.add({
        targets: infoRef.current,
        right: '-100%',
      });
      animTimeline.add({
        targets: avatarRef.current,
        translateX: 0,
        scale: 1
      }, 200);
      animTimeline.add({
        targets: introTextRef.current,
        opacity: 1,
        visibility: 'visible',
      }, 400);
    }
  }, [showInfo]);

  return (
    <div ref={heroRef} className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.titleContainer}>
          <img ref={avatarRef} src={avatar} className={styles.avatar} />
          <div ref={introTextRef}>
            <p className={styles.title}>Hi !</p>
            <p className={styles.title}>I am Tarun</p>
          </div>
        </div>
        <div ref={infoRef} className={styles.infoContainer}>
          <div className={styles.infoContentContainer}>
            <p ref={infoTextRef} className={styles.infoText}>
              Javascript Application developer with experience in
              <span ref={dynamicTextRef} className={styles.skillText}>React .</span>
            </p>
          </div>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="2.96" height="767.983" viewBox="0 0 2.96 767.983">
        <path className={styles.menuSvg}
          d="M4701,1115v35.266s1.818-7.411,0,72.148-1.93,51.068,0,130.362c3.5,68.37,0,21.8,0,175.74s1.863,123.816,0,200.2c0,118.434.8,44.033,0,88.186s0,66.083,0,66.083Z"
          transform="translate(-4699.594 -1115)" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="1368.156" height="769.897" viewBox="0 0 1368.156 769.897">
        <path className={styles.menuSvg}
          d="M4701,1115H3333.478s.163,39.406,0,117.8.657,46.365,0,145.492c1.294,62.014.975,34.289,0,172.495s-.7,75.137,0,156.147c1.061,125.107,0,177.96,0,177.96L4701,1882.983Z"
          transform="translate(-3332.844 -1115)" />
      </svg> */}
    </div>
  );
};

export default Hero;
