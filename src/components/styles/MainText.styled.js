import styled from "styled-components";
const StyledMainText = styled.section`
  .head-copy {
    margin-top: 1rem;
    color: var(--pry-orange);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 0.08rem;
    @media screen and (min-width: 729px) {
      & {
        margin-top: 2.5rem;
      }
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

  .info {
    margin-block: 1rem;
    color: var(--dark-grayish-blue);
    @media screen and (min-width: 729px) {
      & {
        margin-top: 1.7rem;
      }
    }
  }
  .price-text {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 1rem;
    @media screen and (min-width: 729px) {
      & {
        flex-direction: column;
        row-gap: 0.5rem;
      }
    }

    div {
      display: flex;
      column-gap: 0.5rem;
    }
  }
  .new-price {
    font-size: 1.4rem;
    font-weight: bold;
  }
  .discount {
    border-radius: 5px;
    background-color: var(--pry-pale-orange);
    color: var(--pry-orange);
    font-weight: bold;
    padding: 0.2rem 0.4rem;
  }
  .price {
    color: var(--dark-grayish-blue);
    font-weight: bold;
  }
  .price-control {
    display: grid;
    row-gap: 1rem;
    margin-bottom: 5rem;
    @media screen and (min-width: 729px) {
      & {
        grid-template-columns: 3.5fr 6.5fr;
        row-gap: 0;
        column-gap: 1rem;
        padding-right: 1rem;
      }
    }

    div {
      background-color: var(--light-grayish-blue);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.3rem 1rem;
      border-radius: 5px;
      font-size: 1.7rem;
      font-weight: bold;
      button {
        background: none;
        border: none;
        cursor: pointer;
        font: inherit;
        color: var(--pry-orange);
      }
      span {
        font-weight: bold;
      }
    }
    .cart-btn {
      background-color: var(--pry-orange);
      border: none;
      border-radius: 5px;
      padding: 0.6rem 0;
      text-align: center;
      color: var(--white);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 0.5rem;
    }
  }
`;
export default StyledMainText;