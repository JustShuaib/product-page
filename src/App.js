import { Fragment, useState } from "react";
import GlobalStyle from "./components/styles/Global.styled";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LightBox from "./components/LightBox";

function App() {
  const [lightBoxOpen, setLightBoxOpen] = useState(true);
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Main />
      {lightBoxOpen && <LightBox setLightBoxOpen={setLightBoxOpen} />}
    </Fragment>
  );
}

export default App;
