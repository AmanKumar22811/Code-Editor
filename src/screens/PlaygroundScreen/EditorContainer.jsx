import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { TfiExport, TfiImport } from "react-icons/tfi";

const EditorContainer = () => {
  return (
    <div className="h-[100%] flex flex-col border-r border-black">
      {/* header */}

      <div className="flex justify-between p-3 bg-[#313131] text-white">
        <div className="flex items-center gap-4">
          <b className="text-lg">title</b>
          <span>
            <CiEdit />
          </span>
          <button className="border-none bg-blue-600 rounded-md p-1 hover:bg-blue-800 transition duration-500">
            Save Code
          </button>
        </div>

        <div className="flex items-center gap-3">
          <select
            name=""
            id=""
            className="border-none bg-[#1A1A1A] p-1 rounded-md outline-none"
          >
            <option value="cpp">cpp</option>
            <option value="java">java</option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>

          <select
            name=""
            id=""
            className="border-none bg-[#1A1A1A] p-1 rounded-md outline-none"
          >
            <option value="">dark</option>
            <option value="">light</option>
          </select>
        </div>
      </div>

      {/* body */}

      <div className="flex-grow border"></div>

      {/* footer */}

      <div className="bg-[#1A1A1A] text-white flex justify-between items-center p-2">
        <button className="flex items-center gap-2 p-2 bg-[#3E3E3E] text-[#C3C4C8] border-none rounded-lg hover:bg-[#8d8e94] hover:text-white transition duration-[800ms]">
          <span className="text-xl">
            <MdFullscreen />
          </span>
          <span>Full Screen</span>
        </button>

        <label
          htmlFor="tmport-code"
          className="cursor-pointer flex items-center gap-2 p-2 bg-[#3E3E3E] text-[#C3C4C8] border-none rounded-lg hover:bg-[#8d8e94] hover:text-white transition duration-[800ms]"
        >
          <span>
            <TfiImport />
          </span>
          <span>Import Code</span>
        </label>

        <input type="file" id="tmport-code" className="hidden" />

        <button className="flex items-center gap-2 p-2 bg-[#3E3E3E] text-[#C3C4C8] border-none rounded-lg hover:bg-[#8d8e94] hover:text-white transition duration-[800ms]">
          <span>
            <TfiExport />
          </span>
          <span>Export Code</span>
        </button>

        <button className="flex items-center gap-2 p-2 bg-[#3E3E3E] text-[#C3C4C8] border-none rounded-lg hover:bg-[#8d8e94] hover:text-white transition duration-[800ms]">
          <span>
            <FaPlay />
          </span>
          <span>Run Code</span>
        </button>
      </div>
    </div>
  );
};

export default EditorContainer;
