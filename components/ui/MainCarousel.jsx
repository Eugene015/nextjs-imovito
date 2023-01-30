import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

function MainCarousel({ children }) {
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={true}
      showStatus={false}
      showArrows={false}
      renderIndicator={(onClickHandler, isSelected, index) => {
        const defStyle = {
          margin: 10,
          fontSize: 32,
          color: "gray",
          cursor: "pointer",
        };
        const style = isSelected
          ? { ...defStyle, color: "black" }
          : { ...defStyle };
        return (
          <span
            style={style}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            key={index}
            role="button"
          >
            &bull;
          </span>
        );
      }}
    >
      <div className="flex">{children}</div>
      <div className="flex">{children}</div>
      <div className="flex">{children}</div>
    </Carousel>
  );
}

export default MainCarousel;
