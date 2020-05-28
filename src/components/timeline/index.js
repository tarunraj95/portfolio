import React, { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import anime from 'animejs';
import withHeroScrollState from '../../hoc/heroScrollStateHOC';
import officeImg1 from '../../assets/images/office1.jpg';
import officeImg2 from '../../assets/images/office4.jpg';
import officeImg3 from '../../assets/images/office3.jpg';
import { getPlatform } from '../../helpers';


const Timeline = ({
  heading,
  timelineItems,
  reverse
}) => {
  const [animateTimeline, setAnimateTimeline] = useState(false);
  const [animationPlay, setAnimationPlay] = useState(false);
  const timelineBox1 = useRef(null);
  const timelineBox2 = useRef(null);
  const timelineBox3 = useRef(null);
  const polaroid1 = useRef(null);
  const polaroid2 = useRef(null);
  const polaroid3 = useRef(null);
  const timelinePageRef = useRef(null);
  let observer = null;


  const reverseGalleryAnimation = () => {
    const animeTimeline = anime.timeline({
      duration: 4000,
    });
    animeTimeline.add({
      targets: polaroid1.current,
      left: [-500, 200],
      rotate: [0, 10],
      easing: 'spring(1, 80, 50, 0)'
    });
    animeTimeline.add({
      targets: polaroid2.current,
      left: [-500, 100],
      rotate: [0, -20],
      easing: 'spring(1, 80, 50, 0)'
    }, '-=500');
    animeTimeline.add({
      targets: polaroid3.current,
      left: [-500, 180],
      translateY: 100,
      rotate: [0, 20],
      easing: 'spring(1, 80, 50, 0)'
    }, '-=500');
  };

  const galleryAnimation = () => {
    const animeTimeline = anime.timeline({
      duration: 4000,
    });
    animeTimeline.add({
      targets: polaroid1.current,
      right: [-500, 200],
      rotate: [0, -10],
      easing: 'spring(1, 80, 50, 0)'
    });
    animeTimeline.add({
      targets: polaroid2.current,
      right: [-500, 100],
      rotate: [0, 20],
      easing: 'spring(1, 80, 50, 0)'
    }, '-=500');
    animeTimeline.add({
      targets: polaroid3.current,
      right: [-500, 180],
      translateY: 100,
      rotate: [0, -20],
      easing: 'spring(1, 80, 50, 0)'
    }, '-=500');
  };

  const timelineAnimation = () => {
    const animTimeline = anime.timeline({
      duration: 1000,
      easing: 'easeInOutExpo'
    });
    animTimeline.add({
      targets: timelineBox1.current,
      translateY: [100, 0],
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 800,
    });
    animTimeline.add({
      targets: timelineBox2.current,
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 800,
      translateY: [100, 0],
    }, '-=400');
    animTimeline.add({
      targets: timelineBox3.current,
      opacity: [0, 1],
      easing: 'easeInOutExpo',
      duration: 800,
      translateY: [100, 0]
    }, '-=400');
  };

  const intersectionListener = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0.5) {
          setAnimationPlay(true);
        }
      }
    });
  };

  useEffect(() => {
    if (animationPlay && !animateTimeline) {
      setAnimateTimeline(true);
      timelineAnimation();
      if (reverse && getPlatform().desktop) { reverseGalleryAnimation(); } else galleryAnimation();
    }
  }, [animationPlay]);

  useEffect(() => {
    const options = {
      threshold: [0.25, 0.50, 0.75, 0.90]
    };
    observer = new IntersectionObserver(intersectionListener, options);
    observer.observe(timelinePageRef.current);
  }, []);


  return (
    <div ref={timelinePageRef} style={{ display: 'flex' }} className="section_container">
      <div className={clsx([styles.contentContainer, reverse && getPlatform().desktop && styles.reverseContentContainer])}>
        <p className="section_heading">{heading}</p>
        <div className={clsx([styles.timeline, animateTimeline ? styles.ruler : null])}>
          {timelineItems[0] ? (
            <div className={styles.timelineBoxContainer}>
              <div ref={timelineBox1} className={clsx([styles.timelineBox])}>
                <p className={styles.timelineBoxHeading}>{timelineItems[0].title}</p>
                <p className={styles.timelineBoxDuration}>{timelineItems[0].duration}</p>
                <p className={styles.timelineBoxInfo}>
                  {timelineItems[0].body}
                </p>
              </div>
            </div>
          ) : null}

          {timelineItems[1] ? (
            <div className={styles.timelineBoxContainer}>
              <div ref={timelineBox2} className={clsx([styles.timelineBox])}>
                <p className={styles.timelineBoxHeading}>{timelineItems[1].title}</p>
                <p className={styles.timelineBoxDuration}>{timelineItems[1].duration}</p>
                <p className={styles.timelineBoxInfo}>
                  {timelineItems[1].body}
                </p>
              </div>
            </div>
          ) : null}

          {timelineItems[2] ? (
            <div className={styles.timelineBoxContainer}>
              <div ref={timelineBox3} className={clsx([styles.timelineBox])}>
                <p className={styles.timelineBoxHeading}>{timelineItems[2].title}</p>
                <p className={styles.timelineBoxDuration}>{timelineItems[2].duration}</p>
                <p className={styles.timelineBoxInfo}>
                  {timelineItems[2].body}
                </p>
              </div>
            </div>
          ) : null}

        </div>
      </div>
      {getPlatform().desktop ? (
        <div className={styles.galleryContainer}>
          <div ref={polaroid1} className={clsx([styles.polaroidBox, reverse && getPlatform().desktop && styles.reversePolaroidBox])}>
            <img src={officeImg1} className={styles.polaroidImg} />
          </div>
          <div ref={polaroid2} className={clsx([styles.polaroidBox, reverse && getPlatform().desktop && styles.reversePolaroidBox])}>
            <img src={officeImg2} className={styles.polaroidImg} />
          </div>
          <div ref={polaroid3} className={clsx([styles.polaroidBox, reverse && getPlatform().desktop && styles.reversePolaroidBox])}>
            <img src={officeImg3} className={styles.polaroidImg} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default withHeroScrollState(Timeline);
