import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Modal } from "./components/Modal";
import { PopUpPlayer } from "./components/PopupPlayer";
import data from "./data.json";

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
    setPopUp(true);
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
