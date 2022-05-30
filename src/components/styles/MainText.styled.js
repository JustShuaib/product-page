import styled from "styled-components";
const StyledMainText = styled.section`
  .head-copy {
    margin-top: 1rem;
    color: var(--pry-orange);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
  }

  h1 {
    text-transform: capitalize;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 0.5rem;
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
    margin-bottom: 2rem;
    margin-top: 2rem;
    @media screen and (min-width: 729px) {
      & {
        flex-direction: column;
        row-gap: 0.5rem;
      }
    }

    div {
      display: flex;
      column-gap: 1rem;
    }
  }
  .new-price {
    font-size: 1.6rem;
    font-weight: bold;
  }
  .discount {
    border-radius: 5px;
    background-color: var(--pry-pale-orange);
    color: var(--pry-orange);
    font-weight: bold;
    padding: 0.4rem;
    padding-bottom: 0.2rem;
  }
  .price {
    color: var(--dark-grayish-blue);
    font-weight: bold;
    text-decoration: line-through;
  }
  .price-control {
    display: grid;
    row-gap: 1rem;
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
      padding: 0.5rem 1rem;
      border-radius: 10px;
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
      border-radius: 10px;
      padding: 1rem 0;
      text-align: center;
      color: var(--white);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1rem;
      box-shadow: 5px 15px 20px 10px var(--pry-pale-orange);
    }
  }
`;
export default StyledMainText;
