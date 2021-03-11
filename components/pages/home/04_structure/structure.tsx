import * as React from 'react';

import { SvgBubbleBig, SvgBubbleMedium, SvgBubbleSmall } from '../../../common/bubbles/bubbles';

import styles from './structure.module.scss';
import { H2, P } from '../../../common/typography/typography';
import { useIntersection } from 'react-use';
import { motion, useAnimation } from 'framer-motion';

export const Structure: React.FC = () => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: [0, 0.5, 1],
  });

  const isInView = intersection && intersection.intersectionRatio > 0.25;

  return (
    <div className={styles.wrapper} ref={intersectionRef}>
      <Bubbles />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <H2 size="1">A crypto-native organisational structure</H2>
            <P>
              Edgeware has one of the widest and fairest distributions in crypto, however the core
              challenge remains how best to connect, coordinate and accelerate the collective
              endeavours of its nascent community.
            </P>
            <P>
              With no central authority dictating activities, the answer lies in progressively
              decentralising the management and development of the network via a tiered system of
              organisational structures and reward mechanics that enable different roles to push
              things forward.
            </P>
            <P>
              This framework enables the project to organise its emerging resource pool
              intelligently and efficiently whilst working to expand the utility, value and
              awareness of the network.
            </P>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <StructureChart inView={isInView} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Bubbles: React.FC = () => {
  return (
    <div className={styles.bubbles}>
      <span className={styles.bigBubble}>
        <SvgBubbleBig />
      </span>
      <span className={styles.mediumBubble}>
        <SvgBubbleMedium />
      </span>
      <span className={styles.smallBubble1}>
        <SvgBubbleSmall />
      </span>
      <span className={styles.smallBubble2}>
        <SvgBubbleSmall />
      </span>
    </div>
  );
};

const StructureChart: React.FC<{ inView: boolean }> = ({ inView }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.1 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
      }}
      className={styles.treasuryModel}
    >
      <div className={styles.treasuryModelSimple}>
        <img
          src="/images/home/treasury-simple.png"
          width="1134"
          height="1094"
          loading="lazy"
          // quality="100"
          alt="Edgeware organisation simple model"
        />
      </div>
      <div className={styles.treasuryModelFull}>
        <img
          src="/images/home/treasury-full.png"
          width="1134"
          height="1094"
          loading="lazy"
          // quality="100"
          alt="Edgeware organisation full model"
        />
      </div>
    </motion.div>
  );
};
