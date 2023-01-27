import React from 'react';

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Reviews.css"

import { Review } from "../components/product/Review";

export const Reviews = () => {
    return (
      <section className="reviews-section">
        <div className="review-bg"></div>

        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="review-swiper"
        >
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
          <SwiperSlide>
            <Review />
          </SwiperSlide>
        </Swiper>
      </section>
    );
}