import { Fragment } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./components/styles/Global.styles";
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar></Navbar>
    </Fragment>
  );
}

export default App;
