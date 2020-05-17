import React, {
  useEffect,
  useState,
  useRef,
  useContext
} from 'react';
import Hero from './components/hero';
import './global.css';
import WorkExp from './components/workExp';
import styles from './app.module.css';
import Hamburger from './components/hamburger';
import Modal from './components/modal';
import { HeroScrollContext } from './context/heroScrollContext';

const App = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  const secondContainer = useRef(null);
  const { setHeroScrollState } = useContext(HeroScrollContext);
  let observer = null;

  const heroHasPassed = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio >= 0.9) {
          setHeroScrollState(0.1);
          return;
        }
        if (entry.intersectionRatio >= 0.75) {
          setHeroScrollState(0.25);
          return;
        }
        if (entry.intersectionRatio >= 0.5) {
          setHeroScrollState(0.5);
          return;
        }
        if (entry.intersectionRatio >= 0.25) {
          setHeroScrollState(0.75);
        }
      }
    });
  };

  useEffect(() => {
    const options = {
      threshold: [0.25, 0.50, 0.75, 0.90]
    };
    observer = new IntersectionObserver(heroHasPassed, options);
    observer.observe(secondContainer.current);
  }, []);

  return (
    <div className={styles.mainApp}>
      <Modal modalVisible={modalVisible} onClose={() => setmodalVisible(false)} />
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
