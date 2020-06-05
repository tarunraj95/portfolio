import React, {
  useEffect,
  useState,
  useRef,
  useContext
} from 'react';
import Hero from './components/hero';
import './global.css';
import Timeline from './components/timeline';
import styles from './app.module.css';
import Hamburger from './components/hamburger';
import Modal from './components/modal';
import { HeroScrollContext } from './context/heroScrollContext';
import TechStack from './components/techStack';
import Footer from './components/footer';

const WORK_TIMELINE = {
  heading: 'WORK',
  timelineItems: [
    {
      title: 'FLYNOTE',
      duration: "Jan'19 - CURRENT",
      body: 'Tempor ad adipisicing magna cupidatat ad commodo laboris magna consequat ipsum nostrud in laborum laborum. Dolor.'
    },
    {
      title: 'Rentickle',
      duration: "July'18 - Dec'18",
      body: 'Nulla id temporQuis sunt labore reprehenderit occaecat sunt laborum magna aliqua eiusmod deserunt dolore sunt sunt nostrud.'
    },
    {
      title: 'Couch Fashion',
      duration: "Jan'18 - Mar'18",
      body: 'Adipisicing reprehenderit veniam velit veniam consectetur culpa proident voluptate culpa. Amet officia proident minim sunt enim laboris sit.'
    }
  ]
};

const EDUCATION_TIMELINE = {
  heading: 'EDUCATION',
  timelineItems: [
    {
      title: 'Btech.',
      duration: '2014 - 2018',
      body: 'Tempor ad adipisicing magna cupidatat ad commodo laboris magna consequat ipsum nostrud in laborum laborum. Dolor.'
    },
    {
      title: '12th',
      duration: '2014',
      body: 'Nulla id temporQuis sunt labore reprehenderit occaecat sunt laborum magna aliqua eiusmod deserunt dolore sunt sunt nostrud.'
    },
    {
      title: '10th',
      duration: '2012',
      body: 'Adipisicing reprehenderit veniam velit veniam consectetur culpa proident voluptate culpa. Amet officia proident minim sunt enim laboris sit.'
    }
  ]
};

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
      <div style={{ paddingTop: '200vh', backgroundColor: '#fff' }}>
        <div ref={secondContainer}>
          <Timeline {...WORK_TIMELINE} />
        </div>
        <div>
          <Timeline reverse {...EDUCATION_TIMELINE} />
        </div>
        <TechStack />
        <Footer />
      </div>
    </div>
  );
};

export default App;
