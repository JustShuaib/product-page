import React, { useContext, useState } from "react";
import StyledCarousel from "./styles/Carousel.styled";
import Thumbnail from "./Thumbnail";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import { Lightbox } from "../App";
const Carousel = () => {
  const [presentImage, setPresentImage] = useState(0);
  const openLightBox = useContext(Lightbox);

  const images = [product1, product2, product3, product4];

  const handlePreviousSlide = () => {
    setPresentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextSlide = () => {
    setPresentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <StyledCarousel>
      <button
        aria-label="previous"
        className="prev"
        onClick={handlePreviousSlide}
      >
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div onClick={() => openLightBox(true)}>
        <img src={images[presentImage]} className="main-img" alt="" />
      </div>
      <button aria-label="next" className="next" onClick={handleNextSlide}>
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <Thumbnail setImage={setPresentImage} />
    </StyledCarousel>
  );
};

export default Carousel;
