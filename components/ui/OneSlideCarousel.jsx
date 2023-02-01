import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import ItemCard from "./ItemCard";

export default function MainCarousel() {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        loop={true}
        className="relative "
      >
        <SwiperSlide className="flex">
          <ItemCard />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <ItemCard />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <ItemCard />
        </SwiperSlide>
        <SwiperSlide className="flex">
          <ItemCard />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
