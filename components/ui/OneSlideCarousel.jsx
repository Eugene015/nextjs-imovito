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
        pagination={{
          clickable: true,
        }}
        loop={true}
        className=""
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
      </Swiper>
    </>
  );
}
