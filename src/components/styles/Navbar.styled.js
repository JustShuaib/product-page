import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  max-width: 1440px;
  @media screen and (min-width: 729px) {
    & {
      padding-inline: 0;
      margin: 0 5rem;
      border-bottom: 1px solid gray;
    }
  }

  .hamburger {
    width: 1.5rem;
    border: none;
    background: none;
    margin-right: 1rem;
    img {
      width: 100%;
    }
    @media screen and (min-width: 729px) {
      & {
        display: none;
      }
    }
  }

  .cart-detail {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .cart {
    position: relative;
    cursor: pointer;
    background: none;
    border: none;
  }
  .cart-count {
    position: absolute;
    top: -0.5rem;
    right: -30%;
    background-color: orange;
    color: var(--white);
    padding: 0.1rem 0.4rem;
    border-radius: 50%;
    font-size: 0.7rem;
  }
  .avatar {
    margin-left: 1rem;
    width: 2.5rem;
    cursor: pointer;
    &:hover {
      border-radius: 50%;
      border: 2px solid orange;
    }
    @media screen and (min-width: 729px) {
      & {
        margin-left: 2rem;
      }
    }
  }

  .show-navbar {
    display: block;
  }
`;
export default StyledNavbar;
