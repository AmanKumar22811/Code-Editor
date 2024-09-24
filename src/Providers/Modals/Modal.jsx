import React, { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import CreatePlaygroundModal from "./CreatePlaygroundModal";

const Modal = () => {
  const modalFeatures = useContext(ModalContext);
  return (
    <div>
      {modalFeatures.activeModal === "CREATE_PLAYGROUND" && (
        <CreatePlaygroundModal />
      )}
    </div>
  );
};

export default Modal;
