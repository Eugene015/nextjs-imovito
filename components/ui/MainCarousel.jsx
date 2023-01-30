import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import ItemCard from "./ItemCard";

function MainCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <AiOutlineArrowLeft
          onClick={onClickHandler}
          className="absolute top-[50%] left-0 p-2 z-10"
        />
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <AiOutlineArrowRight
          onClick={onClickHandler}
          className="absolute top-[50%] right-0 p-2 z-10"
        />
      )}
    >
      <div>
        <ItemCard />
      </div>
      <div>
        <ItemCard />
      </div>
      <div>
        <ItemCard />
      </div>
    </Carousel>
  );
}

export default MainCarousel;
