import * as React from 'react';
import Slider from 'react-slick';

import { H2 } from '../../common/typography/typography';

import { TweetCard, TweetCardProps } from '../../common/tweet-card/tweet-card';

type HomepageMentionsProps = {
  mentions: TweetCardProps[];
};

export const HomepageMentions = ({ mentions }: HomepageMentionsProps) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <div className="text-center">
        <H2 size="2">Mentions from the cryptoverse</H2>
      </div>

      <div className="relative p-4 pb-0">
        <Slider {...settings}>
          {mentions.map((tweet) => (
            <TweetCard {...tweet} key={tweet.date} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
