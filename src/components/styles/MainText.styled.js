import styled from "styled-components";
const StyledMainText = styled.section`
  background-color: yellow;
  @media screen and (min-width: 729px) {
    & {
      padding-right: 2rem;
    }
  }
  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1.5rem;
    @media screen and (min-width: 729px) {
      & {
        font-size: 2.5rem;
      }
    }
  }
`;
export default StyledMainText;
