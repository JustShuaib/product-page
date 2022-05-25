import React from "react";
import StyledNavbar from "./styles/Navbar.styled";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import MobileNav from "./MobileNav";

const toggleCart = () => {
  console.log("You toggled nav bar");
};
function Navbar() {
  const showNavbar = () => {
    document.querySelector(".navbar").classList.add("show-navbar");
    console.log(document.querySelector(".navbar"));
  };

  return (
    <StyledNavbar>
      <button
        type="button"
        onClick={showNavbar}
        className="hamburger"
        aria-label="open navbar"
      >
        <img src={hamburger} alt="menu" />
      </button>
      <img src={logo} alt="logo" />
      <MobileNav />
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
