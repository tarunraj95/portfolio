import React, { useEffect } from 'react';
import './index.css';
import styles from './index.module.css';
import { CSSTransition } from 'react-transition-group';
import clsx from 'clsx';

const Modal = ({ modalVisible }) => {
  useEffect(() => {
    if (modalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalVisible]);

  return (
    <>
      <CSSTransition
        in={modalVisible}
        timeout={300}
        classNames="overlay"
        unmountOnExit
      >
        <div className="overlay" />
      </CSSTransition>
      <CSSTransition
        in={modalVisible}
        timeout={500}
        classNames="modal"
        unmountOnExit
      >
        <div className="modal">
          <span className={clsx([styles.modalText, styles.modalTextActive])}>HOME</span>
          <span className={styles.modalText}>WORK</span>
          <span className={styles.modalText}>ABOUT</span>
          <span className={styles.modalText}>SKILLS</span>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
