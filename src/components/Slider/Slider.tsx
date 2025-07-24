import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import classes from './Slider.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type SliderProps = {
  slides: {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
  }[];
};

export const Slider: FC<SliderProps> = ({ slides }) => {
  return (
    <div className={classes.sliderContainer}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={classes.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className={classes.slide}>
            <div className={classes.slideContent}>
              <img src={slide.imageUrl} alt={slide.title} className={classes.slideImage} />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}; 