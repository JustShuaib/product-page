import styled from "styled-components";
const StyledMobileNav = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: var(--nav-bg);
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
    background-color: var(--white);
    list-style-type: none;
    @media screen and (min-width: 729px) {
      & {
        padding: 0;
        width: auto;
        flex-direction: row;
        row-gap: 0;
        column-gap: 1.5rem;
        margin-left: 1.5rem;
      }
    }

    a {
      text-transform: capitalize;
      text-decoration: none;
      font-weight: bold;
      color: var(--very-dark-blue);
      @media screen and (min-width: 729px) {
        & {
          position: relative;
          color: var(--dark-grayish-blue);
          font-weight: normal;
          transition: all 0.3s ease-in;
          &:hover {
            color: var(--black);
          }
          &::after {
            content: "";
            position: absolute;
            bottom: -2.1rem;
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
`;
export default StyledMobileNav;
