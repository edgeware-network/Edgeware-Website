import * as React from 'react';
import * as ReactDom from 'react-dom';

import IconDiscord from 'remixicon/icons/Logos/discord-fill.svg';
import IconBubbles from 'remixicon/icons/Business/bubble-chart-line.svg';
import IconCode from 'remixicon/icons/Development/code-s-slash-fill.svg';

import IconClose from 'remixicon/icons/System/close-circle-fill.svg';

import { ActionCard } from '../../common/action-card/action-card';

import styles from './get-started.module.scss';
import { Icon } from '../../common/icon/icon';
import { motion, AnimatePresence } from 'framer-motion';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const modalRoot = document.getElementById('modal-root');

  return ReactDom.createPortal(
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <AnimatePresence>
              <AnimatedCardsList />
            </AnimatePresence>
          </div>
          <button className={styles.buttonClose} onClick={onClose}>
            Close
            <Icon component={IconClose} />
          </button>
        </div>
      </div>
      <div className={styles.backdrop}></div>
    </>,
    modalRoot
  );
};

export const AnimatedCardsList: React.FC = () => {
  const list = {
    hidden: {
      opacity: 1,
      // transition: {
      //   when: "afterChildren",
      // },
    },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        type: 'spring',
      },
    },
  };

  const item = {
    hidden: { opacity: 0, top: -100 },
    visible: { opacity: 1, top: 0, scale: 1 },
  };

  return (
    <motion.div className={styles.cards} variants={list} initial="hidden" animate="visible">
      <motion.div className={styles.cardItem} variants={item} initial="hidden">
        <ActionCard
          headline="Join the Conversation"
          text="Start talking to all of the groups and participate in the ecosystem"
          buttonText="Join Discord"
          iconComponent={IconDiscord}
        />
      </motion.div>
      <motion.div className={styles.cardItem} variants={item} initial="hidden">
        <ActionCard
          headline="Browse Collectives  "
          text="See all open collectives and join them or start you own"
          buttonText="See Collectives"
          iconComponent={IconBubbles}
        />
      </motion.div>
      <motion.div className={styles.cardItem} variants={item} initial="hidden">
        <ActionCard
          headline="Start Developing"
          text="Access our documentation to start developing on Edgeware"
          buttonText="Read the docs"
          iconComponent={IconCode}
        />
      </motion.div>
    </motion.div>
  );
};
