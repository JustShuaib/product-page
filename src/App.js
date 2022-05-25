import { Fragment } from "react";
import GlobalStyle from "./components/styles/Global.styled";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Main />
    </Fragment>
  );
}

export default App;
