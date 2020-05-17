import React, { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import anime from 'animejs';
import withHeroScrollState from '../../hoc/heroScrollStateHOC';
import officeImg1 from '../../assets/images/office1.jpg';
import officeImg2 from '../../assets/images/office4.jpg';
import officeImg3 from '../../assets/images/office3.jpg';


const WorkExp = ({ heroScrollState }) => {
  const [animateTimeline, setAnimateTimeline] = useState(false);
  const timelineBox1 = useRef(null);
  const timelineBox2 = useRef(null);
  const timelineBox3 = useRef(null);
  const polaroid1 = useRef(null);
  const polaroid2 = useRef(null);
  const polaroid3 = useRef(null);

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

  useEffect(() => {
    if (heroScrollState <= 0.5 && !animateTimeline) {
      setAnimateTimeline(true);
      timelineAnimation();
      galleryAnimation();
    }
  }, [heroScrollState]);

  return (
    <div style={{ display: 'flex' }} className="section_container">
      <div className={styles.contentContainer}>
        <p className="section_heading">WORK</p>
        <div className={clsx([styles.timeline, animateTimeline ? styles.ruler : null])}>
          <div className={styles.timelineBoxContainer}>
            <div ref={timelineBox1} className={clsx([styles.timelineBox])}>
              <p className={styles.timelineBoxHeading}>FLYNOTE</p>
              <p className={styles.timelineBoxDuration}>Jan&apos;18 - Mar&apos;18</p>
              <p className={styles.timelineBoxInfo}>
                Amet magna ullamco do labore Lorem labore labore irure do velit excepteur irure pariatur. Ea dolor velit do deserunt non quis ad
              </p>
            </div>
          </div>
          <div className={styles.timelineBoxContainer}>
            <div ref={timelineBox2} className={clsx([styles.timelineBox])}>
              <p className={styles.timelineBoxHeading}>Rentickle</p>
              <p className={styles.timelineBoxDuration}>July&apos;18 - Dec&apos;18 </p>
              <p className={styles.timelineBoxInfo}>
                irure culpa aliqua excepteur. Nulla anim commodo consequat aute id excepteur elit. Laborum do elit exercitation veniam sit laboris ex
              </p>
            </div>

          </div>
          <div className={styles.timelineBoxContainer}>
            <div ref={timelineBox3} className={clsx([styles.timelineBox])}>
              <p className={styles.timelineBoxHeading}>Couch Fashion</p>
              <p className={styles.timelineBoxDuration}>Jan&apos;19 - Current </p>
              <p className={styles.timelineBoxInfo}>
                et adipisicing Lorem esse. Irure occaecat quis qui ut exercitation minim irure a
              </p>
            </div>

          </div>

        </div>
      </div>
      <div className={styles.galleryContainer}>
        <div ref={polaroid1} className={styles.polaroidBox}>
          <img src={officeImg1} className={styles.polaroidImg} />
        </div>
        <div ref={polaroid2} className={styles.polaroidBox}>
          <img src={officeImg2} className={styles.polaroidImg} />
        </div>
        <div ref={polaroid3} className={styles.polaroidBox}>
          <img src={officeImg3} className={styles.polaroidImg} />
        </div>
      </div>
    </div>
  );
};

export default withHeroScrollState(WorkExp);
