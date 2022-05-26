import { createContext, Fragment, useState } from "react";
import GlobalStyle from "./components/styles/Global.styled";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LightBox from "./components/LightBox";

export const Lightbox = createContext(false);
function App() {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  return (
    <Fragment>
      <GlobalStyle />
      <Navbar />
      <Lightbox.Provider value={setLightBoxOpen}>
        <Main />
      </Lightbox.Provider>
      {lightBoxOpen && <LightBox setLightBoxOpen={setLightBoxOpen} />}
    </Fragment>
  );
}

export default App;
