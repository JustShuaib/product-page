import { Fragment } from "react";
import GlobalStyle from "./components/styles/Global.styled";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar></Navbar>
    </Fragment>
  );
}

export default App;
