import React from "react";
import StyledNavbar from "./styles/Navbar.styled";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";

const showNavbar = () => {
  document.querySelector(".nav-container").classList.add("show-navbar");
};
const closeNavbar = () => {
  document.querySelector(".nav-container").classList.remove("show-navbar");
};
const toggleCart = () => {
  console.log("You toggled nav bar");
};
function Navbar() {
  return (
    <StyledNavbar>
      <button type="button" onClick={showNavbar} className="hamburger">
        <img src={hamburger} alt="menu" />
      </button>
      <img src={logo} alt="logo" />
      <div className="nav-container">
        <button onClick={closeNavbar} className="close-btn">
          <img src={close} alt="close button" />
        </button>
        <ul>
          <li>
            <a href="/">collections</a>
          </li>
          <li>
            <a href="/">men</a>
          </li>
          <li>
            <a href="/">women</a>
          </li>

          <li>
            <a href="/">about</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
        </ul>
      </div>
      <div className="cart-detail">
        <button className="cart" onClick={toggleCart}>
          <img src={cart} alt="cart icon" />
          <p className="cart-count">3</p>
        </button>
        <img src={avatar} className="avatar" alt="avatar" />
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
