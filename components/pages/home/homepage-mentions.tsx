import * as React from 'react';
import Slider from 'react-slick';

import { TweetCard, TweetCardProps } from '../../common/tweet-card';

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
    <section className="container mx-auto my-6 mb-48 md:my-12 lg:my-24" id="mentions">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl">Mentions from the cryptoverse</h2>
      </div>

      <div className="relative my-8 pb-0">
        <Slider {...settings}>
          {mentions.map((tweet) => (
            <TweetCard {...tweet} key={tweet.date} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
