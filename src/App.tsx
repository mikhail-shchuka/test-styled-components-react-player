import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Modal } from "./components/Modal";
import { PopUpPlayer } from "./components/PopupPlayer";
import data from "./data.json";
import logo from "./logo.svg";

function App() {
  const [modal, setModal] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const activeProduct = data.products[0];

  useEffect(() => {
    setTimeout(() => setPopUp(true), 2000);
  }, []);

  const openModal = () => {
    setModal(true);
    setPopUp(false);
  };

  const closePopUp = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    setPopUp(false);
  };

  const closeModal = () => {
    setModal(false);
  };

  const theme = {
    media: {
      phone: "(max-width: 600px)",
      tablet: "(max-width: 1024px) and (min-width: 600px)",
      desktop: "(min-width: 1024px)",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      {popUp && (
        <PopUpPlayer
          onOpenModal={openModal}
          onClosePopUp={closePopUp}
          url={activeProduct.previewVideo.url}
        />
      )}
      {modal && (
        <Modal product={activeProduct} right onCloseModal={closeModal} />
      )}
    </ThemeProvider>
  );
}

export default App;
