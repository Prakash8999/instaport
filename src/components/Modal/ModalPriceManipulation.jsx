import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Buttons from "../Buttons";
import './ModalAnimation.css'
import { CSSTransition } from "react-transition-group";

const ModalPriceManipulation = ({ datamodal, setmodal }) => {


  const [showModal, setShowModal] = useState(false);

  // Open the modal when `datamodal` prop changes
  useEffect(() => {
    setShowModal(true);
  }, [datamodal]);

  // Close the modal when `showModal` state changes
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setmodal({ show: false });
    }, 300); // Wait for the closing animation to complete (300ms)
  };



  return (
    <>
             <CSSTransition
        in={showModal}
        classNames="modal"
        timeout={300}
        unmountOnExit
      >
        <div className="h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed left-0 top-0 z-[100]">
          <div className="relative h-[30vh] overflow-auto w-[35vw] bg-[#FFFDE6]  rounded-lg flex flex-col items-center justify-center ">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 font-bold text-lg text-red-600"
            >
              <AiOutlineClose />
            </button>

          <div className="flex flex-col justify-center items-center gap-y-6">
			<div className="flex flex-col items-center gap-y-1">

            <h1 className="bold">Are you sure about changes?</h1>

            <p className="font-light"> are you sure you want to change this?</p>
			</div>

			<div className="flex justify-center gap-x-20">
				<Buttons className={"border-2 border-black rounded-3xl py-1 px-5"} buttonText={"No, Cancel"}>

				</Buttons>
				<Buttons className={" rounded-3xl py-1 border-2 px-5 border-yellow-300  bg-yellow-300" } buttonText={"Yes Confirm"}>

				</Buttons>
			</div>
          </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ModalPriceManipulation;
