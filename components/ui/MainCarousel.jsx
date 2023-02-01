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
        slidesPerView="auto"
        spaceBetween={10}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        loop={true}
        className="relative"
      >
        <SwiperSlide className="flex justify-center">
          <ItemCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <ItemCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <ItemCard />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <ItemCard />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
