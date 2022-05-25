import React from "react";
import close from "../images/icon-close.svg";
import StyledMobileNav from "./styles/MobileNav.styled";

const closeNavbar = () => {
  document.querySelector(".navbar").classList.remove("show-navbar");
};

const MobileNav = () => {
  return (
    <StyledMobileNav className="navbar">
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
    </StyledMobileNav>
  );
};

export default MobileNav;
