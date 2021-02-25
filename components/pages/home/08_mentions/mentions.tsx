import * as React from 'react';

import { H2 } from '../../../common/typography/typography';

import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './mentions.module.scss';
import { TweetCard, TweetCardProps } from '../../../common/tweet-card/tweet-card';

const swiperOptions = {
  spaceBetween: 12,
  autoplay: {
    delay: 10000,
  },
  loop: true,
  slidesPerView: 1,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    480: {
      spaceBetween: 16,
      slidesPerView: 2,
    },

    720: {
      spaceBetween: 16,
      slidesPerView: 2,
    },

    960: {
      spaceBetween: 16,
      slidesPerView: 4,
    },
  },
};

const TWEETS: TweetCardProps[] = [
  {
    name: 'Ryan Zurrer',
    handle: '@rzurrer',
    text:
      'Huge congrats to @hicommonwealth as @HeyEdgeware #Lockdrop just passed 1 million ETH locked &/or signalled, absolutely crushing our most optimistic projections. 🙌 The global community rising up around this protocol is inspiring, especially the excitement out here in China.🇨🇳✌️',
    date: '11:58 PM · Jun 12, 2019',
    avatar:
      'https://pbs.twimg.com/profile_images/1192930256694329344/dE3bE6OQ_reasonably_small.jpg',
  },
  {
    name: 'Du Capital',
    handle: '@DuCapital_SG',
    text:
      'Amazing turnout at the @web3foundation @polkadotnetwork & ecosystem meetup in China’s tech hub Shenzhen. Crowd also got excited by @HeyEdgeware and @chainx_org , both of which has a token distribution mechanism that really emphasises on the community. Pleasure hosting you guys!',
    date: '6:36 PM · Jun 11, 2019',
    avatar:
      'https://pbs.twimg.com/profile_images/1037239349543194625/6-nu5UOC_reasonably_small.jpg',
  },
  {
    name: 'Parity Technologies',
    handle: '@ParityTech',
    text:
      'Congratulations to @HeyEdgeware for launching! 🎉 Check out this #Substrate-based chain at https://t.co/Eo5ugKqK1K. https://t.co/lmpkUvWtpa',
    date: '5:11 PM · Feb 17, 2020',
    avatar:
      'https://pbs.twimg.com/profile_images/1010173347659993089/zbuCwSRG_reasonably_small.jpg',
  },
  {
    name: 'Quantstamp',
    handle: '@Quantstamp',
    text: 'Congratulations @HeyEdgeware on the continued traction! #securedbyqsp',
    date: '6:47 PM · Jun 17, 2019',
    avatar: 'https://pbs.twimg.com/profile_images/973356164581810177/c5O-DcFd_reasonably_small.jpg',
  },
];

export const Mentions: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className="text-center">
        <H2 size="2">Mentions from the cryptoverse</H2>
      </div>

      <div className={styles.carousel}>
        <Swiper {...swiperOptions}>
          {TWEETS.map((tweet, index) => (
            <SwiperSlide key={index}>
              <TweetCard {...tweet} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
