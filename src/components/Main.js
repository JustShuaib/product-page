import React from "react";
import Carousel from "./Carousel";
import Cart from "./Cart";
import MainText from "./MainText";
import StyledMain from "./styles/Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <Cart />
      <Carousel />
      <MainText />
    </StyledMain>
  );
};

export default Main;
