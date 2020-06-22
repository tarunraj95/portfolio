import React, { useRef, useEffect, useState } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';
import { getPlatform } from '../../utilities/helpers';


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
    }
    if (reverse) {
      polaroid1Styles = {
        ...polaroid1Styles,
        transform: 'translateX(780px) rotate(-10deg)'
      }
    } else {
      polaroid1Styles = {
        ...polaroid1Styles,
        transform: 'translateX(-780px) rotate(10deg)'
      }
    }
    return polaroid1Styles;
  }

  const getPolariod2Styles = () => {
    if (!animationPlay) return null;
    let polaroid2Styles = {
      transitionDelay: '400ms',
    }
    if (reverse) {
      polaroid2Styles = {
        ...polaroid2Styles,
        transform: 'translateX(680px) rotate(20deg)'
      }
    } else {
      polaroid2Styles = {
        ...polaroid2Styles,
        transform: 'translateX(-680px) rotate(-20deg)'
      }
    }
    return polaroid2Styles;
  }


  const getPolariod3Styles = () => {
    if (!animationPlay) return null;
    let polaroid3Styles = {
      transitionDelay: '800ms',
    }
    if (reverse) {
      polaroid3Styles = {
        ...polaroid3Styles,
        transform: 'translate(680px, 60px) rotate(-20deg)'
      }
    } else {
      polaroid3Styles = {
        ...polaroid3Styles,
        transform: 'translate(-680px, 60px) rotate(20deg)'
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
            <div className={styles.timelineBoxContainer} style={{ height: getPlatform().desktop ? timelineItems[0].height.desktop : timelineItems[0].height.mobile }}>
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
            <div className={styles.timelineBoxContainer} style={{ height: getPlatform().desktop ? timelineItems[1].height.desktop : timelineItems[1].height.mobile }}>
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
            <div className={styles.timelineBoxContainer} style={{ height: getPlatform().desktop ? timelineItems[2].height.desktop : timelineItems[2].height.mobile }}>
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
              className={clsx([styles.polaroidBox, reverse && styles.reversePolaroidBox])}
              style={getPolariod1Styles()}
            >
              <img src={timelineItems[0].image} className={styles.polaroidImg} />
            </div>
            <div
              className={clsx([styles.polaroidBox, reverse && styles.reversePolaroidBox])}
              style={getPolariod2Styles()}
            >
              <img src={timelineItems[1].image} className={styles.polaroidImg} />
            </div>
            <div
              className={clsx([styles.polaroidBox, reverse && styles.reversePolaroidBox])}
              style={getPolariod3Styles()}
            >
              <img src={timelineItems[2].image} className={styles.polaroidImg} />
            </div>
          </div>
        ) : null
      }
    </div>
  );
};

export default Timeline;
