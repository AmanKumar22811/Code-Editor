import { FaFileCode, FaPlus } from "react-icons/fa";
import RightComponent from "./RightComponent";
export const HomeScreen = () => {
  return (
    <div className="h-dvh grid grid-cols-[2fr_3fr]  ">
      {/* left-container */}

      <div className="bg-black text-white flex justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <FaFileCode className="text-9xl  text-cyan-400" />
          <h1 className="font-bold">CODE EDITOR</h1>
          <h2 className="font-semibold text-gray-300 font-serif">
            Code . Complie . Debug
          </h2>
          <button className="font-medium cursor-pointer bg-white rounded-full w-full h-12 p-2 text-black hover:shadow-[2px_2px_6px_gray] transition duration-1000 flex gap-1 justify-center items-center">
            <span>
              <FaPlus />
            </span>

            <span>Create New Playground</span>
          </button>
        </div>
      </div>

      {/* right-container */}

     <RightComponent/>
    </div>
  );
};
