import React from "react";
import Carousel from "./Carousel";
import Cart from "./Cart";
import MainText from "./MainText";
import StyledMain from "./styles/Main.styled";

const Main = ({ showCart, setShowCart, itemCount, setItemCount }) => {
  return (
    <StyledMain>
      {showCart && <Cart itemCount={itemCount} />}
      <Carousel />
      <MainText
        itemCount={itemCount}
        setShowCart={setShowCart}
        setItemCount={setItemCount}
      />
    </StyledMain>
  );
};

export default Main;
