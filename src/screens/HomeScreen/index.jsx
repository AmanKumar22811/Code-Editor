import { FaFileCode, FaPlus } from "react-icons/fa";
import RightComponent from "./RightComponent";
import Modal from "../../Providers/Modals/Modal";
import { useContext } from "react";
import { ModalContext } from "../../Providers/ModalProvider";
export const HomeScreen = () => {
  const modalFeatures = useContext(ModalContext);
  const openCreatePlaygroundModal = () => {
    modalFeatures.openModal("CREATE_PLAYGROUND");
  };
  return (
    <div className="grid grid-cols-[2fr_3fr]  ">
      {/* left-container */}

      <div className="bg-black text-white flex justify-center items-center h-[100vh]">
        <div className="flex flex-col items-center justify-center gap-3">
          <FaFileCode className="text-9xl  text-cyan-400" />
          <h1 className="font-bold">CODE EDITOR</h1>
          <h2 className="font-semibold text-gray-300 font-serif">
            Code . Complie . Debug
          </h2>
          <button
            className="font-medium cursor-pointer bg-white rounded-full w-full h-12 p-2 text-black hover:shadow-[2px_2px_6px_gray] transition duration-1000 flex gap-1 justify-center items-center"
            onClick={openCreatePlaygroundModal}
          >
            <span>
              <FaPlus />
            </span>

            <span>Create New Playground</span>
          </button>
        </div>
      </div>

      {/* right-container */}

      <RightComponent />
      <Modal />
    </div>
  );
};
