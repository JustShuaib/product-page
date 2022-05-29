import React, { useState } from "react";
import StyledCarousel from "./styles/Carousel.styled";
import Thumbnail from "./Thumbnail";
import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";
const Carousel = ({ setLightBoxOpen }) => {
  const [presentImage, setPresentImage] = useState(0);
  const images = [product1, product2, product3, product4];

  const lightboxImages =
    document.querySelector(".container")?.lastElementChild.lastElementChild
      .children;

  const handlePreviousSlide = () => {
    setPresentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));

    [...lightboxImages].forEach((img) => img.classList.remove("active"));

    lightboxImages[presentImage > 0 ? presentImage - 1 : 3].classList.add(
      "active"
    );
  };

  const handleNextSlide = () => {
    setPresentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    [...lightboxImages].forEach((img) => img.classList.remove("active"));
    lightboxImages[presentImage === 3 ? 0 : presentImage + 1].classList.add(
      "active"
    );
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
      <div onClick={() => setLightBoxOpen(true)}>
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
      <Thumbnail setPresentImage={setPresentImage} />
    </StyledCarousel>
  );
};

export default Carousel;
