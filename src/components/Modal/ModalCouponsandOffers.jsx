import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import Button from "../Buttons";
// import Search from "../../components/Search";
// import ModalInput from "../ModalInput";
import Buttons from "../Buttons";
import "./ModalAnimation.css";
import { CSSTransition } from "react-transition-group";

const CouponsandOffers = ({ setmodal, datamodal }) => {
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
          <div className="relative h-[60vh] overflow-hidden w-[45vw] bg-[#FFFDE6]  rounded-lg flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 font-bold text-xl text-red-600 m-4"
            >
              <AiOutlineClose size={25} />
            </button>

            <div className="pl-5 pt-6 pr-12 ">
              <p className="font-semibold text-2xl pb-5">Add a Coupon</p>

              <div className="flex flex-col gap-y-7">
                <div className="flex items-center gap-x-3 justify-between">
                  <p>Coupon Name - </p>

                  <input
                    placeholder="Enter the Coupon Name"
                    className="w-80 h-12 rounded-lg outline-none border-2 border-yellow-400 border-opacity-80 pl-3"
                  />
                </div>
                <div className="flex items-center gap-x-3 justify-between">
                  <p>Coupon Code - </p>

                  <input
                    placeholder="Enter the Coupon Code"
                    className="w-80 h-12 rounded-lg outline-none border-2 border-yellow-400 border-opacity-80 pl-3"
                  />
                </div>
                <div className="flex items-center gap-x-3 justify-between">
                  <p>Discount % - </p>

                  <input
                    placeholder="Enter the Coupon's Discount"
                    className="w-80 h-12 rounded-lg outline-none border-2 border-yellow-400 border-opacity-80 pl-3"
                  />
                </div>
              </div>

              <div className="flex pt-8 w-[100%] justify-center">
                <Buttons
                  buttonText={"Add Coupon"}
                  className={"bg-yellow-400 text-white rounded-2xl px-6 py-2"}
                />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default CouponsandOffers;
