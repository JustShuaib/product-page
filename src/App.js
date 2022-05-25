import { Fragment } from "react";
import GlobalStyle from "./components/styles/Global.styled";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar></Navbar>
      <Cart />
    </Fragment>
  );
}

export default App;
