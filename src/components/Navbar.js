import React from "react";
import StyledNavbar from "./styles/Navbar.styled";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import MobileNav from "./MobileNav";

const showNavbar = () => {
  document.querySelector(".navbar").classList.add("show-navbar");
};

function Navbar({ setShowCart, itemPresent }) {
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
        <button className="cart" onClick={() => setShowCart((prev) => !prev)}>
          <img src={cart} alt="cart icon" />
          {itemPresent && <p className="cart-count">3</p>}
        </button>
        <img src={avatar} className="avatar" alt="avatar" />
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
