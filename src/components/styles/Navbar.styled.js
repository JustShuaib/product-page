import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  max-width: 1220px;
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

  .nav-container {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.2);
    @media screen and (min-width: 729px) {
      & {
        position: relative;
        z-index: 1;
        display: flex;
        background-color: white;
      }
    }

    .close-btn {
      width: 1.5rem;
      background: none;
      border: none;
      position: absolute;
      top: 8%;
      left: 9%;
      @media screen and (min-width: 729px) {
        display: none;
      }
      img {
        width: 100%;
      }
    }

    ul {
      width: 70%;
      height: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      padding-top: 6rem;
      padding-left: 2rem;
      background-color: white;
      list-style-type: none;
      @media screen and (min-width: 729px) {
        & {
          padding: 0;
          width: auto;
          flex-direction: row;
          row-gap: 0;
          column-gap: 1rem;
          margin-left: 1.5rem;
        }
      }

      a {
        text-transform: capitalize;
        text-decoration: none;
        font-weight: bold;
        @media screen and (min-width: 729px) {
          & {
            position: relative;
            transition: all 0.3s ease-in;
            &:hover {
              /* font-weight: bold; */
            }
            &::after {
              content: "";
              position: absolute;
              bottom: -210%;
              width: 100%;
              display: block;
              height: 0;
              background-color: orange;
              transition: all 0.3s linear;
            }
            &:hover::after {
              height: 0.3rem;
            }
          }
        }
      }
    }
  }
  .show-navbar {
    display: block;
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
    color: white;
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
`;
export default StyledNavbar;
