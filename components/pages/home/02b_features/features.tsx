import * as React from 'react';

import IconFunds from 'remixicon/icons/Finance/funds-line.svg';
import IconBank from 'remixicon/icons/Buildings/bank-line.svg';
import IconFinger from 'remixicon/icons/Device/fingerprint-line.svg';
import IconShuffle from 'remixicon/icons/Media/shuffle-line.svg';
import IconBubbles from 'remixicon/icons/Business/bubble-chart-line.svg';
import IconOrg from 'remixicon/icons/Editor/organization-chart.svg';

import { IconWithText } from '../../../common/icon-with-text/icon-with-text';
import { SvgBubbleMedium, SvgBubbleSmall } from '../../../common/bubbles/bubbles';

import styles from './features.module.scss';
import { H2, P } from '../../../common/typography/typography';
import { motion } from 'framer-motion';

export const Features: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <H2 size="2">
            The best place to <em>work</em> in crypto.
          </H2>
          <P>
            Building new things is hard. Edgeware helps people more easily connect, share skills and
            receive funding for new projects as part of the existing ecosystem and beyond.
          </P>
        </div>

        <div className="container">
          {/* Row 1 */}
          <div className="row">
            <div className="col-lg-5 offset-lg-1">
              <div className="pe-lg-5">
                <IconWithText headline="Own your identity" iconComponent={IconFinger}>
                  With Edgeware you own your identity, control your data and can engage in the
                  community using your real name or as an anonymous contributor.
                </IconWithText>

                <IconWithText
                  headline="Join a Working Group or start your own"
                  iconComponent={IconBubbles}
                >
                  Browse the established working groups and connect with others who share your
                  interests or if you don’t see what you’re looking for start something new.
                </IconWithText>

                <IconWithText headline="Manage your project to success" iconComponent={IconFunds}>
                  Once you have received funding you can access a range of tools that will make the
                  management, tracking and reporting of the project easier.
                </IconWithText>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ps-lg-5">
                <IconWithText headline="Build your reputation" iconComponent={IconOrg}>
                  As you contribute you can develop a reputation through a range of achievements
                  that attribute value to your profile and signal your value to the community.
                </IconWithText>

                <IconWithText headline="Request funding from the treasury" iconComponent={IconBank}>
                  Utilize Edgeware’s community treasury to receive seed funding for your new Working
                  Group or request larger amounts for a fully developed project plan.
                </IconWithText>

                <IconWithText
                  headline="Bridge digital and physical entities"
                  iconComponent={IconShuffle}
                >
                  For more ambitious projects that require the coordination and funding of teams, we
                  are making it easy to link DAOs to established corporate structures.
                </IconWithText>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BubblesBackground />
    </div>
  );
};

const BubblesBackground: React.FC = () => {
  const isClient = typeof window !== 'undefined';

  if (!isClient) {
    return null;
  }

  return (
    <>
      <motion.span
        className={styles.mediumBubble}
        animate={{ translateX: [-5, 5], translateY: 50, rotate: 30 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          type: 'tween',
        }}
      >
        <SvgBubbleMedium />
      </motion.span>
      <motion.span className={styles.smallBubble}>
        <SvgBubbleSmall />
      </motion.span>
      <motion.span
        className={styles.smallBubbleLeft}
        style={{ scale: 0.5 }}
        animate={{ translateX: [-100, 100], translateY: [-5, 5], rotate: 30 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 1,
          type: 'tween',
        }}
      >
        <SvgBubbleSmall />
      </motion.span>
    </>
  );
};
