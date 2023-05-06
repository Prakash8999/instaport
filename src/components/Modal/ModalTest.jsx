import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";

function Modal() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    content: "",
  });

  function toggleModal() {
    setIsModalActive(!isModalActive);
  }

  function openModal(data) {
    setModalData(data);
    setIsModalActive(true);
  }

  return (
    <>
      <button
        onClick={() =>
          openModal({
            title: "Modal Title",
            content: "Modal content goes here.",
            className: "backdrop-blur",
          })
        }
      >
        Open Modal
      </button>
      {isModalActive && (
        <div className="modal-container flex justify-center items-center w-screen h-screen backdrop-blur-sm absolute">
          <div className="modal-container relative flex justify-center items-center w-[60%] h-[40%]  border-2 border-black">
            <button onClick={toggleModal} className=" absolute top-2 right-2">
              <GrFormClose
                style={{
                  fontSize: "1em",
                  backgroundColor: "white",
                  color: "red",
                  borderRadius: "25px",
                }}
              />
            </button>
            <div className="modal relative">
              <h2>{modalData.title}</h2>
              <p>{modalData.content}</p>
            </div>

            <div className="backdrop-blur-lg bg-white/30"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
