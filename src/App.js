import { createContext, Fragment, useState } from "react";
import GlobalStyle from "./components/styles/Global.styled";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LightBox from "./components/LightBox";

export const Lightbox = createContext(false);
function App() {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  return (
    <Fragment>
      <GlobalStyle />
      <Navbar setShowCart={setShowCart} count={itemCount} />
      <Lightbox.Provider value={setLightBoxOpen}>
        <Main
          showCart={showCart}
          setShowCart={setShowCart}
          itemCount={itemCount}
          setItemCount={setItemCount}
        />
      </Lightbox.Provider>
      {lightBoxOpen && <LightBox setLightBoxOpen={setLightBoxOpen} />}
    </Fragment>
  );
}

export default App;
