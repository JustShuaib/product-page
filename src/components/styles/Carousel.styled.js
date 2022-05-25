import styled from "styled-components";
const StyledCarousel = styled.div`
  position: relative;
  margin-inline: -1.5rem;
  img {
    width: 100%;
    @media screen and (min-width: 729px) {
      & {
        border-radius: 20px;
      }
    }
  }
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--white);
    border: none;
    border-radius: 50%;
    @media screen and (min-width: 729px) {
      & {
        display: none;
      }
    }
  }
  .prev {
    left: 1rem;
    padding: 0.5rem 0.8rem 0.3rem 0.7rem;
  }
  .next {
    right: 1rem;
    padding: 0.5rem 0.7rem 0.3rem 0.8rem;
  }
`;
export default StyledCarousel;
