import { BiDownload } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { RiUpload2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import EditorContainer from "./EditorContainer";

export const PlaygroundScreen = () => {
  const params = useParams();
  const { fileId, folderId } = params;
  return (
    <div className="h-[100vh] flex flex-col">
      <div className="self-stretch flex justify-center items-center gap-3 text-3xl bg-black text-white p-2">
        <DiCodeigniter />
        <h1>Code Flow</h1>
      </div>

      <div className="flex-grow grid grid-cols-[3fr_2fr]">
        {/* Editor-Container */}

        <div className="row-span-2">
          <EditorContainer />
        </div>

        {/* Input-Container */}

        <div className="flex flex-col">
          <div className="p-4 flex justify-between bg-slate-200">
            <b>Input:</b>
            <label htmlFor="input" className="flex items-center gap-3">
              <span className="text-2xl cursor-pointer">
                <BiDownload />
              </span>
              <b>Import Input</b>
            </label>
            <input type="file" id="input" className="hidden" />
          </div>
          <textarea className="flex-grow border-none outline-none resize-none p-2 text-lg"></textarea>
        </div>

        {/* Output-Container */}

        <div className="flex flex-col">
          <div className="p-4 flex justify-between bg-slate-200">
            <b>Output:</b>
            <button className="flex items-center gap-3">
              <span className="text-2xl">
                <RiUpload2Line />
              </span>
              <b>Export Output</b>
            </button>
          </div>
          <textarea
            readOnly
            className="flex-grow border-none outline-none resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
};
