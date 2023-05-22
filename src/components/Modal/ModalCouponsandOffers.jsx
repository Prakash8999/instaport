import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Buttons";
import Search from "../../components/Search";
import ModalInput from "../ModalInput";
import Buttons from "../Buttons";
const CouponsandOffers = ({ setmodal, datamodal }) => {
  return (
    <>
      <div className="h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed left-0 top-0 z-[100]">
        <div className="relative h-[56vh] overflow-hidden w-[38vw] bg-[#FFFDE6]  rounded-lg flex flex-col ">
          <button
            onClick={() => {
              setmodal({ show: false });
            }}
            className="absolute top-4 right-4 font-bold text-lg text-red-600"
          >
            <AiOutlineClose />
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
                className={"bg-yellow-400 text-white rounded-2xl px-4 py-1"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponsandOffers;
