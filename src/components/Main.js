import React from "react";
import Carousel from "./Carousel";
import Cart from "./Cart";
import MainText from "./MainText";
import StyledMain from "./styles/Main.styled";

const Main = ({ showCart, itemPresent }) => {
  return (
    <StyledMain>
      {showCart && <Cart itemPresent={itemPresent} />}
      <Carousel />
      <MainText />
    </StyledMain>
  );
};

export default Main;
