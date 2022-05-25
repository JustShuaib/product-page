import React from "react";
import Carousel from "./Carousel";
import MainText from "./MainText";
import StyledMain from "./styles/Main.styled";

const Main = () => {
  return (
    <StyledMain>
      <Carousel />
      <MainText />
    </StyledMain>
  );
};

export default Main;
