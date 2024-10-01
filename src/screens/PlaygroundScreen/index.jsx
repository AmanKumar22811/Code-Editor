import { BiDownload } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { RiUpload2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import EditorContainer from "./EditorContainer";
import { useState } from "react";

export const PlaygroundScreen = () => {
  const params = useParams();
  const [input, setInput] = useState();
  const [output, setOutput] = useState();

  const { fileId, folderId } = params;

  const importInput = (e) => {
    const file = e.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = (e) => {
        setInput(e.target.result);
      };
    } else {
      alert("Please choose a program file");
    }
  };

  const exportOutput = () => {
    const outputValue = output.trim();
    if (!outputValue) {
      alert("Output is Empty");
      return;
    }

    const blob = new Blob([outputValue], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `output.text`;
    link.click();
  };

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
            <input
              type="file"
              id="input"
              className="hidden"
              onChange={importInput}
            />
          </div>
          <textarea
            className="flex-grow border-none outline-none resize-none p-2 text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>

        {/* Output-Container */}

        <div className="flex flex-col">
          <div className="p-4 flex justify-between bg-slate-200">
            <b>Output:</b>
            <button className="flex items-center gap-3" onClick={exportOutput}>
              <span className="text-2xl">
                <RiUpload2Line />
              </span>
              <b>Export Output</b>
            </button>
          </div>
          <textarea
            readOnly
            className="flex-grow border-none outline-none resize-none"
            value={output}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
