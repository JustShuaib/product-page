import styled from "styled-components";
const StyledLightBox = styled.div`
  display: none;
  background-color: var(--nav-bg);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 135%;
  z-index: 3;

  @media screen and (min-width: 729px) {
    & {
      display: block;
    }
  }
  @media screen and (min-width: 1399px) {
    & {
      height: 100%;
    }
  }
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 35%;
    transform: translate(-50%, -50%);
    button {
      display: block;
      top: 40%;
      cursor: pointer;
      &:hover path {
        stroke: var(--pry-orange);
      }
      &.prev {
        left: -1rem;
      }
      &.next {
        right: -1rem;
      }
    }
    .close-btn {
      position: absolute;
      top: -4rem;
      right: 0;
      border: none;
      background: none;
      &:hover path {
        fill: var(--pry-orange);
      }
    }
  }
`;
export default StyledLightBox;
