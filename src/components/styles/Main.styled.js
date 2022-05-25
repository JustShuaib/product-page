import styled from "styled-components";
const StyledMain = styled.main`
  display: grid;
  padding: 0 1.5rem;
  @media screen and (min-width: 729px) {
    & {
      margin-top: 3rem;
      grid-template-columns: repeat(2, 1fr);
      padding-inline: 1rem;
      column-gap: 5rem;
      margin-inline: 5rem;
      max-width: 1440px;
      padding-right: 2rem;
    }
  }
`;
export default StyledMain;
