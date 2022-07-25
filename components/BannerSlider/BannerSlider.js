import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import Slide from "./Slide/Slide";

const BannerSlider = ({ slides }) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
    >
      <SwiperSlide>
        <Slide imgSrc="/static/images/banner.jpeg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgSrc="/static/images/banner.jpeg" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide imgSrc="/static/images/banner.jpeg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
