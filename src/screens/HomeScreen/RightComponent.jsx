import React, { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { FaCode, FaFolder, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { PlaygroundContext } from "../../Providers/PlaygroundProvider";
import { modalConstants, ModalContext } from "../../Providers/ModalProvider";
import { useNavigate } from "react-router-dom";

const Folder = ({ folderTitle, cards, folderId }) => {
  const { deleteFolder, deleteFile } = useContext(PlaygroundContext);
  const { openModal, setModalPayload } = useContext(ModalContext);
  const navigate = useNavigate();

  const onDeleteFolder = () => {
    deleteFolder(folderId);
  };

  const onEditFolderTitle = () => {
    setModalPayload(folderId);
    openModal(modalConstants.UPDATE_FOLDER_TITLE);
  };

  const openCreateCardModal = () => {
    setModalPayload(folderId);
    openModal(modalConstants.CREATE_CARD);
  };

  return (
    <>
      <div className="flex justify-between items-center p-3 border-b-2 border-black">
        <div className="flex gap-3 justify-center items-center">
          <span className="text-yellow-400">
            <FaFolder />
          </span>
          <span className="text-lg">{folderTitle}</span>
        </div>
        <div className="flex  items-center gap-3">
          <span className="cursor-pointer" onClick={onDeleteFolder}>
            <FaRegTrashAlt />
          </span>
          <span className="text-xl cursor-pointer" onClick={onEditFolderTitle}>
            <CiEdit />
          </span>
          <button
            className="flex items-center gap-1"
            onClick={openCreateCardModal}
          >
            <span>
              <FaPlus />
            </span>
            <span>New Playground</span>
          </button>
        </div>
      </div>

      {/* Card */}

      <div className="flex flex-wrap gap-2 justify-between">
        {cards?.map((file, index) => {
          const onEditFile = () => {
            setModalPayload({ fileId: file.id, folderId: folderId });
            openModal(modalConstants.UPDATE_FILE_TITLE);
          };

          const onDeleteFile = () => {
            deleteFile(folderId, file.id);
          };

          const navigateToPlaygroundScreen = () => {
            navigate(`/playground/${file.id}/${folderId}`);
          };

          return (
            <div
              key={index}
              className="flex justify-between w-[45%] p-4 border border-gray-500 rounded-lg m-2 border-x-fuchsia-600  shadow-[2px_2px_5px_gray] cursor-pointer hover:shadow-[2px_2px_10px_gray] hover:transition duration-200"
              onClick={navigateToPlaygroundScreen}
            >
              <div className="flex justify-center gap-6 items-center">
                <FaCode className="text-4xl" />
                <div className="flex flex-col">
                  <span>{file.title}</span>
                  <span>Language : {file.language}</span>
                </div>
              </div>

              <div className="flex justify-center items-center gap-3">
                <span onClick={onDeleteFile}>
                  <FaRegTrashAlt />
                </span>

                <span className="text-xl" onClick={onEditFile}>
                  <CiEdit />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
const RightComponent = () => {
  const { folders } = useContext(PlaygroundContext);
  const modalFeatures = useContext(ModalContext);
  const openCreateNewFolder = () => {
    modalFeatures.openModal(modalConstants.CREATE_FOLDER);
  };
  return (
    <div className="p-5 h-[100vh] overflow-y-scroll ">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-black p-2">
        <div className="text-xl ">
          My <span className="font-extrabold">Playground</span>
        </div>
        <button
          className="flex justify-center items-center gap-2"
          onClick={openCreateNewFolder}
        >
          <span>
            <FaPlus />
          </span>
          <span className="font-bold">New Folder</span>
        </button>
      </div>
      {folders?.map((folder) => {
        return (
          <Folder
            key={folder.id}
            folderTitle={folder?.title}
            cards={folder?.files}
            folderId={folder.id}
          />
        );
      })}
    </div>
  );
};

export default RightComponent;
