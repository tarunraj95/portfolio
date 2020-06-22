import React, { useEffect, useState } from 'react';
import './index.css';
import styles from './index.module.css';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';
import { getPlatform } from '../../utilities/helpers';
import fb from '../../assets/images/fb.svg';
import insta from '../../assets/images/insta.svg';
import linkedin from '../../assets/images/linkedin.svg';
import download from '../../assets/images/download.svg';
import downloadColor from '../../assets/images/downloadColor.svg';
import { LINKS } from '../../utilities/config'

const Modal = ({ modalVisible, onClose }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [ctaHovered, setCtaHovered] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalVisible]);

  const onLinkClick = (url) => {
    window.open(url, '_blank')
  }

  const navigateTo = (index) => {
    switch (index) {
      case 0:
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setActiveSection(0);
        break;

      case 1:
        window.scrollTo({
          top: 2 * window.innerHeight,
          behavior: 'smooth'
        });
        setActiveSection(1);
        break;

      case 2:
        window.scrollTo({
          top: 3 * window.innerHeight,
          behavior: 'smooth'
        });
        setActiveSection(2);
        break;

      case 3:
        window.scrollTo({
          top: 4 * window.innerHeight,
          behavior: 'smooth'
        });
        setActiveSection(3);
        break;

      default:
        break;
    }
    onClose();
  }

  return (
    <>
      <CSSTransition
        in={modalVisible}
        timeout={300}
        classNames="overlay"
        unmountOnExit
      >
        <div className="overlay" onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        in={modalVisible}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <div className="modal">
          <span onClick={() => navigateTo(0)} className={clsx([styles.modalText, activeSection === 0 && styles.modalTextActive])}>ABOUT</span>
          <span onClick={() => navigateTo(1)} className={clsx([styles.modalText, activeSection === 1 && styles.modalTextActive])}>WORK</span>
          <span onClick={() => navigateTo(2)} className={clsx([styles.modalText, activeSection === 2 && styles.modalTextActive])}>{getPlatform().desktop ? 'EDUCATION' : 'STUDY'}</span>
          <span onClick={() => navigateTo(3)} className={clsx([styles.modalText, activeSection === 3 && styles.modalTextActive])}>{getPlatform().desktop ? 'TECH STACK' : 'SKILLS'}</span>
          <div className={styles.ctaSection}>
            <div className={styles.socialSection}>
              <div onClick={() => onLinkClick(LINKS.linkedin)} className={styles.socialIconContainer}>
                <img className={clsx([styles.socialIcon])} src={linkedin} />
                <div className={styles.socialIconShadow} />
              </div>
              <div onClick={() => onLinkClick(LINKS.instagram)} className={styles.socialIconContainer}>
                <img className={clsx([styles.socialIcon])} src={insta} />
                <div className={styles.socialIconShadow} />
              </div>
              <div onClick={() => onLinkClick(LINKS.facebook)} className={styles.socialIconContainer}>
                <img className={clsx([styles.socialIcon])} src={fb} />
                <div className={styles.socialIconShadow} />
              </div>
            </div>
            <button onClick={() => onLinkClick(LINKS.resume)} onMouseEnter={() => setCtaHovered(true)} onMouseLeave={() => setCtaHovered(false)} className={styles.resumeBtn}>
              <img className={styles.resumeIcon} src={ctaHovered ? downloadColor : download} />
              <span className={styles.resumeLink}>RESUME</span>
              <div className={styles.resumeBtnOverlay} />
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
// 6a11cb
// 2575fc