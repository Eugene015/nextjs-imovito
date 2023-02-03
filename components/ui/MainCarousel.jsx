import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ItemCard from "./ItemCard";

import b_offer_1 from "@/public/assets/b_offer_1.png";
import b_offer_2 from "@/public/assets/b_offer_2.png";
import b_offer_3 from "@/public/assets/b_offer_3.png";
import b_offer_4 from "@/public/assets/b_offer_4.png";
import { offersData } from "../offersData.json";

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
            spaceBetween: 10,
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
        {offersData.map((data) => {})}
        <SwiperSlide className="flex justify-center">
          <ItemCard image={b_offer_1} offersData={offersData[0]} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <ItemCard image={b_offer_2} offersData={offersData[1]} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <ItemCard image={b_offer_3} offersData={offersData[2]} />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <ItemCard image={b_offer_4} offersData={offersData[3]} />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </>
  );
}
