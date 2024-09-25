import React, { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const PlaygroundContext = createContext();

const initailData = [
  {
    id: v4(),
    title: "DSA",
    files: [
      {
        id: v4(),
        title: "index",
        code: 'cout<<"helloe World";',
        language: "cpp",
      },
    ],
  },
  {
    id: v4(),
    title: "frontend",
    files: [
      {
        id: v4(),
        title: "test",
        code: 'console.log("hello");',
        language: "javascript",
      },
    ],
  },
];

const defaultCodes = {
  cpp: `
  #include <iostream>
  using namespace std;
  
  int main(){
    cout<<"Hello World!"<<endl;
    return 0;
  }
    `,
  javascript: `console.log("hello World!")`,
  python: `print("Hello World!")`,
  java: `
  class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");
    }
}
    `,
};

const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(initailData);

  const createNewPlayground = ({ fileName, folderName, language }) => {
    const newFolders = [...folders];
    newFolders.push({
      id: v4,
      title: folderName,
      files: [
        {
          id: v4(),
          title: fileName,
          code: defaultCodes[language],
          language,
        },
      ],
    });
    localStorage.setItem("data", JSON.stringify(newFolders));
    setFolders(newFolders);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(folders));
  }, []);

  const playgroundFeatures = {
    folders,
    createNewPlayground,
  };

  return (
    <PlaygroundContext.Provider value={playgroundFeatures}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
