import React, {
  useState,
  useEffect
} from 'react';
import Hero from './components/hero';
import './global.css';
import Timeline from './components/timeline';
import styles from './app.module.css';
import Hamburger from './components/hamburger';
import Modal from './components/modal';
import TechStack from './components/techStack';
import Footer from './components/footer';
import {
  WORK_TIMELINE,
  EDUCATION_TIMELINE
} from './utilities/config'

const App = () => {
  const [modalVisible, setmodalVisible] = useState(false);
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      document.getElementById('loader_wrapper').remove();
      setMounted(true);
    }, 1000);
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <div className={styles.mainApp}>
      <Modal modalVisible={modalVisible} onClose={() => setmodalVisible(false)} />
      <Hamburger onClick={() => setmodalVisible(!modalVisible)} modalOpen={modalVisible} />
      <Hero />
      <div style={{ paddingTop: '200vh', backgroundColor: '#fff' }}>
        <div>
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
