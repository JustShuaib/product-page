import styled from "styled-components";
const StyledMain = styled.main`
  display: grid;
  padding: 0 1.5rem;
  margin-bottom: 5rem;
  @media screen and (min-width: 729px) {
    & {
      margin-top: 5rem;
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10rem;
      margin-inline: 5rem;
      max-width: 1440px;
      padding-inline: 5rem;
    }
  }
`;
export default StyledMain;
