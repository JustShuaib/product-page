import React from "react";
import StyledThumbnail from "./styles/Thumbnail.styled";
import img1 from "../images/image-product-1-thumbnail.jpg";
import img2 from "../images/image-product-2-thumbnail.jpg";
import img3 from "../images/image-product-3-thumbnail.jpg";
import img4 from "../images/image-product-4-thumbnail.jpg";
const Thumbnail = () => {
  return (
    <StyledThumbnail>
      <div>
        <img src={img1} alt="product one thumbnail" />
      </div>
      <div>
        <img src={img2} alt="product two thumbnail" />
      </div>
      <div>
        <img src={img3} alt="product three thumbnail" />
      </div>
      <div>
        <img src={img4} alt="product four thumbnail" />
      </div>
    </StyledThumbnail>
  );
};

export default Thumbnail;
