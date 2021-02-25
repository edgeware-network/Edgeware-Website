import * as React from 'react';

import SwiperCore, { Pagination, Autoplay } from 'swiper';
SwiperCore.use([Pagination, Autoplay]);
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProjectSlide } from './project-slide';

import styles from './projects-slider.module.scss';

const swiperOptions = {
  spaceBetween: 16,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 1,
  pagination: {
    clickable: true,
  },
};

export const ProjectsSlider: React.FC = () => {
  return (
    <div className={styles.slider}>
      <Swiper {...swiperOptions}>
        <SwiperSlide>
          <ProjectSlide
            funding="Funded 50M EDG / $30,000"
            headline="builDAO"
            subHeadline="September 2020"
            href="#"
            imageUrl="/images/home/projects/car.png"
          >
            For thousands of years humans have evolved organisational technology, making it possible
            to coordinate at ever increasing scale, complexity and value.For thousands of years
            humans have evolved organisational technology, making it possible to coordinate at ever
            increasing scale, complexity and value.
          </ProjectSlide>
        </SwiperSlide>

        <SwiperSlide>
          <ProjectSlide
            funding="Funded 50M EDG / $30,000"
            headline="builDAO"
            subHeadline="September 2020"
            href="#"
            imageUrl="/images/home/projects/car.png"
          >
            For thousands of years humans have evolved organisational technology, making it possible
            to coordinate at ever increasing scale, complexity and value.For thousands of years
            humans have evolved organisational technology, making it possible to coordinate at ever
            increasing scale, complexity and value.
          </ProjectSlide>
        </SwiperSlide>

        <SwiperSlide>
          <ProjectSlide
            funding="Funded 50M EDG / $30,000"
            headline="builDAO"
            subHeadline="September 2020"
            href="#"
            imageUrl="/images/home/projects/car.png"
          >
            For thousands of years humans have evolved organisational technology, making it possible
            to coordinate at ever increasing scale, complexity and value.For thousands of years
            humans have evolved organisational technology, making it possible to coordinate at ever
            increasing scale, complexity and value.
          </ProjectSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
