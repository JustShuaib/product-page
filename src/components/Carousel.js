import React, { useState } from "react";
import StyledCarousel from "./styles/Carousel.styled";
import Thumbnail from "./Thumbnail";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
const images = [product1, product2, product3, product4];
const Carousel = () => {
  const [presentImage, setPresentImage] = useState(0);
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
        <img src={prev} alt="" />
      </button>
      <div>
        <img src={images[presentImage]} className="main-img" alt="" />
      </div>
      <button aria-label="next" className="next" onClick={handleNextSlide}>
        <img src={next} alt="" />
      </button>
      <Thumbnail />
    </StyledCarousel>
  );
};

export default Carousel;
