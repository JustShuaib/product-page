import styled from "styled-components";

const StyledCart = styled.div`
  position: absolute;
  top: 7rem;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  width: 95%;
  height: 18rem;
  border-radius: 10px;
  background-color: var(--white);
  @media screen and (min-width: 729px) {
    & {
      width: 20rem;
      left: 62rem;
      box-shadow: 0 5px 15px var(--grayish-blue);
      transform: translateX(0);
      height: 15rem;
    }
  }
  .cart-title {
    text-transform: capitalize;
    font-weight: bold;
    padding: 1rem;
    border-bottom: 1px solid var(--grayish-blue);
  }
  .item-detail {
    display: flex;
    align-items: center;
    margin: 1.5rem auto;
    column-gap: 0.5rem;
    margin-top: 3.5rem;
    width: 90%;
    img {
      width: 3rem;
      border-radius: 5px;
      margin-right: 1rem;
    }
    @media screen and (min-width: 729px) {
      & {
        margin-top: 1.8rem;
      }
      img {
        margin-right: 0.7rem;
      }
    }
  }
  .delete-btn {
    background: none;
    border: none;
    width: 1.2rem;
    margin-left: auto;
    img {
      border-radius: 0;
      width: 100%;
    }
  }
  .total {
    font-weight: bold;
  }
  .checkout-btn {
    background-color: var(--pry-orange);
    color: white;
    width: 90%;
    display: block;
    border: none;
    border-radius: 10px;
    padding: 1rem;
    margin: 0 auto;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: 0.05rem;
  }
  .empty-text {
    text-align: center;
    color: var(--dark-grayish-blue);
    margin-top: 20%;
    font-weight: bold;
  }
`;

export default StyledCart;
