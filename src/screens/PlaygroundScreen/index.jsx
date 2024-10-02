import { BiDownload } from "react-icons/bi";
import { DiCodeigniter } from "react-icons/di";
import { RiUpload2Line } from "react-icons/ri";
import { useParams } from "react-router-dom";
import EditorContainer from "./EditorContainer";
import { useCallback, useState } from "react";
import { makeSubmission } from "./service";

export const PlaygroundScreen = () => {
  const params = useParams();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [showLoader, setShowLoader] = useState(false);

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

  const callback = ({ apiStatus, data, message }) => {
    if (apiStatus === "loading") {
      setShowLoader(true);
    } else if (apiStatus === "error") {
      setShowLoader(false);
      setOutput("Something went wrong");

    } else {
      setShowLoader(false);
      if (data.status.id === 3) {
        setOutput(atob(data.stdout));
      } else {
        setOutput(atob(data.stderr));
      }
    }
  };

  const runCode = useCallback(
    ({ code, language }) => {
      makeSubmission({ code, language, input, callback });
    },
    [input]
  );

  return (
    <div className="h-[100vh] flex flex-col">
      <div className="self-stretch flex justify-center items-center gap-3 text-3xl bg-black text-white p-2">
        <DiCodeigniter />
        <h1>Code Flow</h1>
      </div>

      <div className="flex-grow grid grid-cols-[3fr_2fr]">
        {/* Editor-Container */}

        <div className="row-span-2">
          <EditorContainer
            fileId={fileId}
            folderId={folderId}
            runCode={runCode}
          />
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
            onChange={(e) => setOutput(e.target.value)}
          ></textarea>
        </div>
      </div>

      {showLoader && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.534)] flex justify-center items-center">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-loader"></div>
        </div>
      )}
    </div>
  );
};
