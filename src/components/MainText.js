import React from "react";
import StyledMainText from "./styles/MainText.styled";

const MainText = () => {
  return (
    <StyledMainText>
      <p className="head-copy">sneaker company</p>
      <h1>fall limited edition sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, so they'll withstand everything
        the weather can offer.
      </p>
    </StyledMainText>
  );
};

export default MainText;
