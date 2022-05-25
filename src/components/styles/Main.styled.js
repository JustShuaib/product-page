import styled from "styled-components";
const StyledMain = styled.main`
  background-color: greenyellow;
  display: grid;
  @media screen and (min-width: 729px) {
    & {
      grid-template-columns: repeat(2, 1fr);
      padding-inline: 1rem;
      column-gap: 5rem;
      margin-inline: 5rem;
      max-width: 1440px;
    }
  }
`;
export default StyledMain;
