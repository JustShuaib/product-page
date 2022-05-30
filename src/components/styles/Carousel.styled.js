import styled from "styled-components";
const StyledCarousel = styled.div`
  position: relative;
  margin-inline: -1.5rem;
  .main-img {
    width: 100%;
    height: 19.5rem;
    @media screen and (min-width: 729px) {
      & {
        border-radius: 20px;
        height: 30rem;
        object-fit: cover;
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
    padding: 0.7rem 1rem 0.5rem 0.9rem;
  }
  .next {
    right: 1rem;
    padding: 0.7rem 0.9rem 0.5rem 1rem;
  }
`;
export default StyledCarousel;
