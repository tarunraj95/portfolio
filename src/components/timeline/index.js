import React, { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import withHeroScrollState from '../../hoc/heroScrollStateHOC';
import officeImg1 from '../../assets/images/office1.jpg';
import officeImg2 from '../../assets/images/office2.jpg';
import officeImg3 from '../../assets/images/office3.jpg';
import { getPlatform } from '../../helpers';


const Timeline = ({
  heading,
  timelineItems,
  reverse
}) => {
  const [animationPlay, setAnimationPlay] = useState(false);
  const timelinePageRef = useRef(null);
  let observer = null;

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
    const options = {
      threshold: [0.50]
    };
    observer = new IntersectionObserver(intersectionListener, options);
    observer.observe(timelinePageRef.current);
  }, []);


  const getPolariod1Styles = () => {
    if (!animationPlay) return null;
    let polaroid1Styles = {
      transitionDelay: 0,
      willChange: 'transform',
    }
    if (reverse) {
      polaroid1Styles = {
        ...polaroid1Styles,
        transform: 'translateX(780px) rotate(10deg)'
      }
    } else {
      polaroid1Styles = {
        ...polaroid1Styles,
        transform: 'translateX(-780px) rotate(-10deg)'
      }
    }
    return polaroid1Styles;
  }

  const getPolariod2Styles = () => {
    if (!animationPlay) return null;
    let polaroid2Styles = {
      transitionDelay: '400ms',
      willChange: 'transform',
    }
    if (reverse) {
      polaroid2Styles = {
        ...polaroid2Styles,
        transform: 'translateX(680px) rotate(-20deg)'
      }
    } else {
      polaroid2Styles = {
        ...polaroid2Styles,
        transform: 'translateX(-680px) rotate(20deg)'
      }
    }
    return polaroid2Styles;
  }


  const getPolariod3Styles = () => {
    if (!animationPlay) return null;
    let polaroid3Styles = {
      transitionDelay: '800ms',
      willChange: 'transform',
    }
    if (reverse) {
      polaroid3Styles = {
        ...polaroid3Styles,
        transform: 'translate(680px, 60px) rotate(20deg)'
      }
    } else {
      polaroid3Styles = {
        ...polaroid3Styles,
        transform: 'translate(-680px, 60px) rotate(-20deg)'
      }
    }
    return polaroid3Styles;
  }

  return (
    <div ref={timelinePageRef} style={{ display: 'flex' }} className="section_container" >
      <div className={clsx([styles.contentContainer, reverse && getPlatform().desktop && styles.reverseContentContainer])}>
        <p className="section_heading">{heading}</p>
        <div className={clsx([styles.timeline, animationPlay ? styles.ruler : null])}>
          {timelineItems[0] ? (
            <div className={styles.timelineBoxContainer}>
              <div className={clsx([styles.timelineBox, styles.timelineBox1, animationPlay && styles.animateTimelineBox])}>
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
              <div className={clsx([styles.timelineBox, styles.timelineBox2, animationPlay && styles.animateTimelineBox])}>
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
              <div className={clsx([styles.timelineBox, styles.timelineBox3, animationPlay && styles.animateTimelineBox])}>
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
      {
        getPlatform().desktop ? (
          <div className={styles.galleryContainer}>
            <div
              className={clsx([styles.polaroidBox, reverse && getPlatform().desktop && styles.reversePolaroidBox])}
              style={getPolariod1Styles()}
            >
              <img src={officeImg1} className={styles.polaroidImg} />
            </div>
            <div
              className={clsx([styles.polaroidBox, reverse && getPlatform().desktop && styles.reversePolaroidBox])}
              style={getPolariod2Styles()}
            >
              <img src={officeImg2} className={styles.polaroidImg} />
            </div>
            <div
              className={clsx([styles.polaroidBox, reverse && getPlatform().desktop && styles.reversePolaroidBox])}
              style={getPolariod3Styles()}
            >
              <img src={officeImg3} className={styles.polaroidImg} />
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

export default withHeroScrollState(Timeline);
