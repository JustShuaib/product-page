import React from "react";
import StyledCart from "./styles/Cart.styled";
import deleteBtn from "../images/icon-delete.svg";
import img1 from "../images/image-product-1-thumbnail.jpg";
const Cart = ({ itemCount, setItemCount }) => {
  function calcTotal() {
    return (125 * itemCount).toFixed(2);
  }
  return (
    <StyledCart>
      <p className="cart-title">cart</p>
      {itemCount > 0 ? (
        <>
          <div className="item-detail">
            <img src={img1} alt="" />
            <div>
              <p>Autumn Limited Edition</p>
              <p>
                <span>$125.00</span> x <span>{itemCount}</span>
                <span className="total"> ${calcTotal()}</span>
              </p>
            </div>
            <button
              className="delete-btn"
              aria-label="delete item"
              onClick={() => setItemCount(0)}
            >
              <img src={deleteBtn} alt="" />
            </button>
          </div>
          <button className="checkout-btn"> checkout</button>
        </>
      ) : (
        <p className="empty-text">Your cart is empty.</p>
      )}
    </StyledCart>
  );
};

export default Cart;
