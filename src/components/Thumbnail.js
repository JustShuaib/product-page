import React from "react";
import StyledThumbnail from "./styles/Thumbnail.styled";
import img1 from "../images/image-product-1-thumbnail.jpg";
import img2 from "../images/image-product-2-thumbnail.jpg";
import img3 from "../images/image-product-3-thumbnail.jpg";
import img4 from "../images/image-product-4-thumbnail.jpg";
const Thumbnail = ({ setImage }) => {
  /**
   * It removes the active class from all the children of the parent element of the clicked element,
   * then adds the active class to the clicked element.
   * @param index - the index of the image in the array
   * @param e - the event object
   */
  const setActiveImage = (index, e) => {
    [...e.target.parentElement.children].forEach((child) => {
      child.classList.remove("active");
    });
    setImage(index);
    e.target.classList.add("active");
  };

  return (
    <StyledThumbnail>
      <div
        className="active"
        onClick={(e) => {
          setActiveImage(0, e);
        }}
      >
        <img src={img1} alt="product one thumbnail" />
      </div>
      <div
        onClick={(e) => {
          setActiveImage(1, e);
        }}
      >
        <img src={img2} alt="product two thumbnail" />
      </div>
      <div
        onClick={(e) => {
          setActiveImage(2, e);
        }}
      >
        <img src={img3} alt="product three thumbnail" />
      </div>
      <div
        onClick={(e) => {
          setActiveImage(3, e);
        }}
      >
        <img src={img4} alt="product four thumbnail" />
      </div>
    </StyledThumbnail>
  );
};

export default Thumbnail;
