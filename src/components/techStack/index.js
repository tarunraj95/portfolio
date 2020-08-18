import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import anime from 'animejs';

import styles from './index.module.css';
import { getPlatform } from '../../utilities/helpers';
import webIllustr from '../../assets/images/coding2.svg'
import { TECH_STACK } from '../../utilities/config';

const Chip = ({ title, playAnimation }) => {
  return (
    <div className={styles.chipContainer}>
      <div className={clsx([styles.chip, playAnimation && styles.chipSlideUp])}>
        <p className={styles.chipTitle}>{title}</p>
      </div>
    </div>
  )
}

const StackSection = ({ heading, items, playAnimation }) => {
  return (
    <div className={styles.stackSectionContainer}>
      <p className={styles.stackSectionHeading}>{heading}</p>
      <div className={styles.chipsContainer}>
        {items.map(item => <Chip playAnimation={playAnimation} key={item} title={item} />)}
      </div>
    </div>
  )
}

const TechStack = () => {
  const blobRef = useRef();
  const teckStackPageRef = useRef(null);
  const [playAnimation, setPlayAnimation] = useState(false);
  let observer = null;

  const intersectionListener = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0.25) {
          setPlayAnimation(true);
        }
      }
    });
  };

  useEffect(() => {
    anime({
      targets: blobRef.current,
      d: [
        { value: 'M329.072 37.1694C368.453 66.7054 393.855 104.142 400.5 145C406.9 185.857 394.296 229.888 364.76 263.608C335.225 297.574 300.028 319.479 263.601 328.34C226.928 337.201 189.516 333.263 146.69 325.386C104.11 317.51 56.361 305.942 28.302 274.437C0.00205612 243.179 -9.10994 191.984 10.335 156.787C29.535 121.837 77.035 102.639 114.448 72.8574C151.861 43.0754 182.042 12.36 216.5 3.50001C250.958 -5.11599 289.937 7.87941 329.072 37.1694Z' },
        { value: 'M348 29.5C387.381 59.036 393.855 112.142 400.5 153C406.9 193.857 394.296 237.888 364.76 271.608C335.225 305.574 300.028 327.479 263.601 336.34C226.928 345.201 189.516 341.263 146.69 333.386C104.11 325.51 56.361 313.942 28.302 282.437C0.00205612 251.179 -9.10994 199.984 10.335 164.787C29.535 129.837 68.5 139.5 120.5 86C160.186 45.1694 182.042 20.36 216.5 11.5C250.958 2.884 308.865 0.209999 348 29.5Z' },
        { value: 'M341.5 39.5C380.881 69.036 406.855 103.642 413.5 144.5C419.9 185.357 394.296 228.888 364.76 262.608C335.225 296.574 300.028 318.479 263.601 327.34C226.928 336.201 189.516 332.263 146.69 324.386C104.11 316.51 56.361 304.942 28.302 273.437C0.00205612 242.179 -9.10994 190.984 10.335 155.787C29.535 120.837 68.5 130.5 120.5 77C160.186 36.1694 182.042 11.36 216.5 2.5C250.958 -6.116 302.365 10.21 341.5 39.5Z' },
        { value: 'M329.072 45.1694C368.453 74.7054 404.88 110.639 411.525 151.497C417.925 192.354 394.296 237.888 364.76 271.608C335.225 305.574 300.028 327.479 263.601 336.34C226.928 345.201 189.516 341.263 146.69 333.386C104.11 325.51 56.361 313.942 28.302 282.437C0.00205612 251.179 -9.10994 199.984 10.335 164.787C29.535 129.837 77.035 110.639 114.448 80.8574C151.861 51.0754 178.933 10.7114 213.391 1.8514C247.849 -6.7646 289.937 15.8794 329.072 45.1694Z' },
      ],
      easing: 'linear',
      loop: true,
      autoplay: true,
      duration: 5000
    });
    const options = {
      threshold: [0.25]
    };
    observer = new IntersectionObserver(intersectionListener, options);
    observer.observe(teckStackPageRef.current);
  }, []);

  return (
    <div ref={teckStackPageRef} className="section_container" style={getPlatform().desktop ? { height: '80vh' } : null}>
      <p className="section_heading">Tech stack</p>
      <div className={styles.contentContainer}>
        <div className={styles.stackContainer}>
          {Object.keys(TECH_STACK).map((category) => (
            <StackSection key={category} heading={category} items={TECH_STACK[category]} playAnimation={playAnimation} />
          ))}
        </div>
        {getPlatform().desktop ? (
          <div>
            <div className={styles.blob}>
              <svg width="413" height="342" viewBox="0 0 413 342" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={blobRef} d="M329.072 45.1694C368.453 74.7054 404.88 110.639 411.525 151.497C417.925 192.354 394.296 237.888 364.76 271.608C335.225 305.574 300.028 327.479 263.601 336.34C226.928 345.201 189.516 341.263 146.69 333.386C104.11 325.51 56.361 313.942 28.302 282.437C0.00205612 251.179 -9.10994 199.984 10.335 164.787C29.535 129.837 77.035 110.639 114.448 80.8574C151.861 51.0754 178.933 10.7114 213.391 1.8514C247.849 -6.7646 289.937 15.8794 329.072 45.1694Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1="206.29" y1="9.90052" x2="206.29" y2="341.397" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8EC5FC" stop-opacity="0.675" />
                    <stop offset="1" stop-color="#E0C3FC" stop-opacity="0.675" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <img className={styles.illustrImg} src={webIllustr} />
          </div>

        ) : null}
      </div>
    </div>
  );
};

export default TechStack;
