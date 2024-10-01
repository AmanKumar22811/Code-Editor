import React, { useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import { TfiExport, TfiImport } from "react-icons/tfi";
import { Editor } from "@monaco-editor/react";

const editorOptions = {
  fontSize: 15,
  wordWrap: "on",
};

const fileExtensionMapping = {
  cpp: "cpp",
  javascript: "js",
  python: "py",
  java: "java",
};

const EditorContainer = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [theme, setTheme] = useState("vs-dark");
  const codeRef = useRef();

  const onChangeCode = (newCode) => {
    codeRef.current = newCode;
  };

  const importCode = (e) => {
    const file = e.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = function (value) {
        const importedCode = value.target.result;
        setCode(importedCode);
        codeRef.current=importedCode
      };
    } else {
      alert("Please choose a program file");
    }
  };

  const exportCode = () => {
    const codeValue = codeRef.current?.trim();
    if (!codeValue) {
      alert("Please type some code in the editor before export");
    }

    const codeBlob = new Blob([codeValue], { type: "text/plain" });
    const downloadUrl = URL.createObjectURL(codeBlob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `code.${fileExtensionMapping[language]}`;
    link.click();
  };

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const onChangeTheme = (e) => {
    setTheme(e.target.value);
  };

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
            className="border-none bg-[#1A1A1A] p-1 rounded-md outline-none"
            onChange={onChangeLanguage}
            value={language}
          >
            <option value="cpp">cpp</option>
            <option value="java">java</option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>

          <select
            onChange={onChangeTheme}
            value={theme}
            className="border-none bg-[#1A1A1A] p-1 rounded-md outline-none"
          >
            <option value="vs-dark">vs-dark</option>
            <option value="vs-light">vs-light</option>
          </select>
        </div>
      </div>

      {/* body */}

      <div className="flex-grow border">
        <Editor
          language={language}
          options={editorOptions}
          value={code}
          onChange={onChangeCode}
          theme={theme}
        />
      </div>

      {/* footer */}

      <div className="bg-[#1A1A1A] text-white flex justify-between items-center p-2">
        <button className="flex items-center gap-2 p-2 bg-[#3E3E3E] text-[#C3C4C8] border-none rounded-lg hover:bg-[#8d8e94] hover:text-white transition duration-[800ms]">
          <span className="text-xl">
            <MdFullscreen />
          </span>
          <span>Full Screen</span>
        </button>

        <label
          htmlFor="import-code"
          className="cursor-pointer flex items-center gap-2 p-2 bg-[#3E3E3E] text-[#C3C4C8] border-none rounded-lg hover:bg-[#8d8e94] hover:text-white transition duration-[800ms]"
        >
          <span>
            <TfiImport />
          </span>
          <span>Import Code</span>
        </label>

        <input
          type="file"
          id="import-code"
          className="hidden"
          onChange={importCode}
        />

        <button
          className="flex items-center gap-2 p-2 bg-[#3E3E3E] text-[#C3C4C8] border-none rounded-lg hover:bg-[#8d8e94] hover:text-white transition duration-[800ms]"
          onClick={exportCode}
        >
          <span>
            <TfiExport />
          </span>
          <span>Export Code</span>
        </button>

        <button className="flex items-center gap-2 p-2 bg-green-500 text-white border-none rounded-lg hover:bg-green-700 transition duration-[800ms]">
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
