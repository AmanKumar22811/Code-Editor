import React, { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import { IoClose } from "react-icons/io5";
import { v4 } from "uuid";
import { defaultCodes, PlaygroundContext } from "../PlaygroundProvider";

const CreateCardModal = () => {
  const { closeModal, modalPayload } = useContext(ModalContext);
  const { createPlayground } = useContext(PlaygroundContext);

  const onSubmitModal = (e) => {
    e.preventDefault();
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;
    const file = {
      id: v4(),
      title: fileName,
      language,
      code: defaultCodes[language],
    };

    createPlayground(modalPayload, file);
    closeModal();
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[rgba(153,153,153,0.1)] flex justify-center items-center ">
      <form
        className="w-[40%] h-[35%] bg-white p-5 shadow-[4px_4px_10px_gray] rounded-xl relative flex flex-col gap-5"
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

        <div className="flex justify-center items-center font-medium text-lg">
          <input
            className="border-none bg-gray-300 p-2 rounded-md"
            name="fileName"
            placeholder="Enter Card Title"
            required
          />
        </div>

        <div className="flex justify-evenly items-center">
          <select
            className="border-none bg-gray-300 p-2 rounded-md"
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
            className="border-none p-2 rounded bg-black text-white cursor-pointer hover:bg-blue-500"
          >
            Create Playground
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCardModal;
