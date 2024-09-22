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

const PlaygroundProvider = ({ children }) => {
  const [folders, setFolders] = useState(initailData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(folders));
  }, []);

  return (
    <PlaygroundContext.Provider value={folders}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
