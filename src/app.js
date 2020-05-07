import React, { useEffect, useState, useRef } from 'react';
import Hero from './components/hero';
import './global.css';
import WorkExp from './components/workExp';
import styles from './app.module.css';
import Hamburger from './components/hamburger';
import Modal from './components/modal';

const App = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  const secondContainer = useRef(null);
  let observer = null;

  const heroHasPassed = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0.75) {
          console.log('intersection is=', entry.intersectionRatio);
        }
      }
    });
  };

  useEffect(() => {
    const options = {
      threshold: 0.90
    };
    observer = new IntersectionObserver(heroHasPassed, options);
    observer.observe(secondContainer.current);
  }, []);

  return (
    <div className={styles.mainApp}>
      <Modal modalVisible={modalVisible} />
      <Hamburger onClick={() => setmodalVisible(!modalVisible)} />
      <Hero />
      <div style={{ paddingTop: '200vh' }}>
        <div ref={secondContainer}>
          <WorkExp />
        </div>
      </div>
    </div>
  );
};

export default App;
