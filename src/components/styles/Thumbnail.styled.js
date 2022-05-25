import styled from "styled-components";
const StyledThumbnail = styled.div`
  width: 100%;
  background-color: yellow;
  display: none;
  @media screen and (min-width: 729px) {
    & {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1rem;
      padding-inline: 1rem;
    }
  }
`;
export default StyledThumbnail;
