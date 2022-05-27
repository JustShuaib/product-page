import React from "react";
import Carousel from "./Carousel";
import Cart from "./Cart";
import MainText from "./MainText";
import StyledMain from "./styles/Main.styled";

const Main = ({
  showCart,
  setShowCart,
  itemCount,
  setItemCount,
  setItemPresent,
}) => {
  return (
    <StyledMain>
      {showCart && (
        <Cart
          itemCount={itemCount}
          setShowCart={setShowCart}
          setItemCount={setItemCount}
        />
      )}
      <Carousel />
      <MainText
        itemCount={itemCount}
        setItemPresent={setItemPresent}
        setShowCart={setShowCart}
        setItemCount={setItemCount}
      />
    </StyledMain>
  );
};

export default Main;
