import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaCode, FaFolder, FaPlus, FaRegTrashAlt } from "react-icons/fa";

const RightComponent = () => {
  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-black p-2">
        <div className="text-xl ">
          My <span className="font-extrabold">Playground</span>
        </div>
        <button className="flex justify-center items-center gap-2">
          <span>
            <FaPlus />
          </span>
          <span className="font-bold">New Folder</span>
        </button>
      </div>

      {/* Folder - Container */}

      <div className="flex justify-between items-center p-3 border-b-2 border-black">
        <div className="flex gap-3 justify-center items-center">
          <span className="text-yellow-400">
            <FaFolder />
          </span>
          <span>{"DSA"}</span>
        </div>
        <div className="flex  items-center gap-3">
          <span>
            <FaRegTrashAlt />
          </span>
          <span className="text-xl">
            <CiEdit />
          </span>
          <button className="flex items-center gap-2">
            <span>
              <FaPlus />
            </span>
            <span>New Playground</span>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-around">
        <div className="flex justify-between w-[45%] p-4 border border-gray-500 rounded-lg m-2 border-x-fuchsia-600  shadow-[2px_2px_5px_gray] cursor-pointer hover:shadow-[2px_2px_10px_gray] hover:transition duration-200">
          <div className="flex justify-center gap-6 items-center">
            <FaCode className="text-4xl" />
            <div className="flex flex-col">
              <span>{"Heap Implementataion "}</span>
              <span>Language : {"java"}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <span>
              <FaRegTrashAlt />
            </span>
            <span className="text-xl">
              <CiEdit />
            </span>
          </div>
        </div>
        <div className="flex justify-between w-[45%] p-4 border border-gray-500 rounded-lg m-2 border-x-fuchsia-600  shadow-[2px_2px_5px_gray] cursor-pointer hover:shadow-[2px_2px_10px_gray] hover:transition duration-200">
          <div className="flex justify-center gap-6 items-center">
            <FaCode className="text-4xl" />
            <div className="flex flex-col">
              <span>{"Heap Implementataion "}</span>
              <span>Language : {"java"}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <span>
              <FaRegTrashAlt />
            </span>
            <span className="text-xl">
              <CiEdit />
            </span>
          </div>
        </div>
        <div className="flex justify-between w-[45%] p-4 border border-gray-500 rounded-lg m-2 border-x-fuchsia-600  shadow-[2px_2px_5px_gray] cursor-pointer hover:shadow-[2px_2px_10px_gray] hover:transition duration-200">
          <div className="flex justify-center gap-6 items-center">
            <FaCode className="text-4xl" />
            <div className="flex flex-col">
              <span>{"Heap Implementataion "}</span>
              <span>Language : {"java"}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <span>
              <FaRegTrashAlt />
            </span>
            <span className="text-xl">
              <CiEdit />
            </span>
          </div>
        </div>
        <div className="flex justify-between w-[45%] p-4 border border-gray-500 rounded-lg m-2 border-x-fuchsia-600  shadow-[2px_2px_5px_gray] cursor-pointer hover:shadow-[2px_2px_10px_gray] hover:transition duration-200">
          <div className="flex justify-center gap-6 items-center">
            <FaCode className="text-4xl" />
            <div className="flex flex-col">
              <span>{"Heap Implementataion "}</span>
              <span>Language : {"java"}</span>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3">
            <span>
              <FaRegTrashAlt />
            </span>
            <span className="text-xl">
              <CiEdit />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
