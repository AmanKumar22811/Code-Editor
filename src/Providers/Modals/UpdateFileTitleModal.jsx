import React, { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";

const UpdateFileTitleModal = () => {
  const { closeModal, modalPayload } = useContext(ModalContext);
  const { editFileTitle } = useContext(PlaygroundContext);

  const onSubmitModal = (e) => {
    e.preventDefault();

    const fileName = e.target.fileName.value;
    editFileTitle(fileName, modalPayload.folderId, modalPayload.fileId);
    closeModal();
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(153,153,153,0.1)] flex justify-center items-center ">
      <form
        className="w-[40%] h-[25%] bg-white p-5 shadow-[4px_4px_10px_gray] rounded-xl relative flex flex-col gap-5"
        onSubmit={onSubmitModal}
      >
        <span
          className="absolute top-2 right-2 text-xl cursor-pointer"
          onClick={closeModal}
        >
          <IoClose />
        </span>
        <h1 className="font-bold text-2xl text-center">Update Card Title</h1>
        <div className="flex justify-evenly items-center font-medium text-lg">
          <input
            className="border-none bg-gray-300 p-1 rounded-md"
            name="fileName"
            placeholder="Enter Title Name"
            required
          />
          <button
            type="submit"
            className="border-none p-2 rounded bg-black text-white cursor-pointer hover:bg-blue-600 "
          >
            Edit File Title
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFileTitleModal;
