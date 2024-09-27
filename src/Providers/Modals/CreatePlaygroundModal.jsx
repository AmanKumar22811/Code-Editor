import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";

const CreatePlaygroundModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playgroundFeatures = useContext(PlaygroundContext);
  const closeModal = () => {
    modalFeatures.closeModal();
  };
  const onSubmitModal = (e) => {
    e.preventDefault();

    const folderName = e.target.folderName.value;
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;

    playgroundFeatures.createNewPlayground({
      folderName,
      fileName,
      language,
    });

    closeModal();
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(153,153,153,0.1)] flex justify-center items-center ">
      <form
        className="w-[40%] h-[45%] bg-white p-8 shadow-[4px_4px_10px_gray] rounded-xl relative flex flex-col   gap-5"
        onSubmit={onSubmitModal}
      >
        <span
          className="absolute top-2 right-2 text-xl cursor-pointer"
          onClick={closeModal}
        >
          <IoClose />
        </span>
        <h1 className="font-bold text-2xl text-center">
          Create New Playground
        </h1>
        <div className="flex justify-between items-center font-medium text-lg">
          <p>Enter Folder Name</p>
          <input
            className="border-none bg-gray-300 p-1 rounded-md"
            name="folderName"
            required
          />
        </div>
        <div className="flex justify-between items-center font-medium text-lg">
          <p>Enter Card Name</p>
          <input
            className="border-none bg-gray-300 p-1 rounded-md"
            name="fileName"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <select
            className="border-none bg-gray-300 p-1 rounded-md"
            name="language"
            required
          >
            <option value="cpp">cpp</option>
            <option value="java">java</option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>
          <button
            type="submit"
            className="border-none p-2 rounded bg-blue-400 text-white cursor-pointer hover:bg-blue-500"
          >
            Create Playground
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlaygroundModal;
