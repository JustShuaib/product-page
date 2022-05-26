import styled from "styled-components";
const StyledThumbnail = styled.div`
  width: 100%;
  display: none;
  @media screen and (min-width: 729px) {
    & {
      display: grid;
      margin-top: 2rem;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 2rem;
    }
  }
  div {
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:hover::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--light-white);
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
  .active {
    border: 3px solid var(--pry-orange);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--light-white);
    }
  }
`;
export default StyledThumbnail;
