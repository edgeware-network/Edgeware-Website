import * as React from 'react';
import IconBubbles from 'remixicon/icons/Business/bubble-chart-line.svg';

import styles from './collective.module.scss';
import { Icon } from '../../../common/icon/icon';
import { useModalState } from '../../../modals/useModalState';
import { GetStartedModal } from '../../../modals/get-started/get-started';
import { CTAButton } from '../../../common/button/cta-button';
import { useWindowSize } from 'react-use';

interface CollectiveProps {
  headline: string;
}

export const Collective: React.FC<CollectiveProps> = ({ headline, children }) => {
  const { isOpen, toggleModal } = useModalState();

  return (
    <>
      <div className={styles.wrapper}>
        <MobileBackground section="top" key="bg-up" />

        <div className={styles.content}>
          <span className={styles.icon}>
            <Icon component={IconBubbles} />
          </span>

          <h2 className={styles.headline}>{headline}</h2>

          <div className={styles.text}>{children}</div>

          <div className={styles.cta}>
            <CTAButton arrow="none" onClick={toggleModal} style="large">
              Start your journey
            </CTAButton>
          </div>
        </div>

        <DesktopBackground />
        <MobileBackground section="bottom" key="bg-down" />
      </div>

      <GetStartedModal isOpen={isOpen} onClose={toggleModal} />
    </>
  );
};

const MobileBackground: React.FC<{ section: 'top' | 'bottom' }> = ({ section }) => {
  const variants = {
    top: {
      className: styles.backgroundMobileUp,
      image: {
        src: '/images/home/collectives-mobile-1.png',
        width: Math.round(958 * 0.75),
        height: Math.round(894 * 0.75),
      },
    },
    bottom: {
      className: styles.backgroundMobileDown,
      image: {
        src: '/images/home/collectives-mobile-2.png',
        width: Math.round(822 * 0.5),
        height: Math.round(1056 * 0.5),
      },
    },
  };

  const bg = variants[section];

  const { width } = useWindowSize();
  const [val, setValue] = React.useState(0);

  React.useEffect(() => {
    const diff = (bg.image.width - width) / 2 + 10;
    setValue(diff > 0 ? -1 * diff : 0);
  }, [bg.image.width, width]);

  return (
    <div className={bg.className}>
      <div className={styles.backgroundMobileInner} style={{ left: val }}>
        <img
          src={bg.image.src}
          alt="Edgeware Collectives"
          loading="lazy"
          // layout="fixed"
          width={bg.image.width}
          height={bg.image.height}
          // quality={100}
        />
      </div>
    </div>
  );
};

const DesktopBackground: React.FC = () => {
  const { width } = useWindowSize();
  const [val, setValue] = React.useState(0);

  React.useEffect(() => {
    const diff = (1712 - width) / 2 + 30;
    setValue(-1 * diff);
  }, [width]);

  return (
    <div className={styles.background}>
      <div className={styles.backgroundInner} style={{ left: val }}>
        <img
          src="/images/home/collectives-desktop.png"
          alt="Edgeware Collectives"
          // layout="fixed"
          width="1712"
          loading="eager"
          height="1442"
          // quality={100}
        />
      </div>
    </div>
  );
};
