import { Fragment, useState } from "react";
import GlobalStyle from "./components/styles/Global.styled";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import LightBox from "./components/LightBox";

function App() {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [itemPresent, setItemPresent] = useState(false);

  return (
    <Fragment>
      <GlobalStyle />
      <Navbar
        setShowCart={setShowCart}
        itemPresent={itemPresent}
        count={itemCount}
      />

      <Main
        showCart={showCart}
        setShowCart={setShowCart}
        itemPresent={itemPresent}
        setItemPresent={setItemPresent}
        itemCount={itemCount}
        setItemCount={setItemCount}
        setLightBoxOpen={setLightBoxOpen}
      />
      {lightBoxOpen && <LightBox setLightBoxOpen={setLightBoxOpen} />}
    </Fragment>
  );
}

export default App;
