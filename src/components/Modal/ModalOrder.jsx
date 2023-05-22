import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import ModalInput from "../ModalInput";
import Buttons from "../Buttons";

const ModalOrder = ({ datamodal, setmodal }) => {
  console.log(datamodal.OrderId);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckednotify, setIsCheckednotify] = useState(false);

  const handleToggledog = () => {
    setIsChecked(!isChecked);
  };
  const handleTogglenotify = () => {
    setIsCheckednotify(!isCheckednotify);
  };

  return (
    <>
      <div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
        <div className="relative h-[70vh]  overflow-auto w-[45vw] pb-5 bg-[#FFFDE6] rounded-lg flex  flex-col   md:gap-y-8  gap-y-16">
          <button
            onClick={() => {
              setmodal({ show: false });
            }}
            className="absolute top-4 right-4 font-bold text-lg text-red-600"
            title="close"
          >
            <AiOutlineClose />
          </button>
          <div className="w-full flex flex-col gap-y-2 pt-2 pl-8">
            <div className="flex gap-x-1 items-center">
              <p className="font-semibold">Order No.- </p>
              <div>
                <ModalInput value={datamodal?.OrderId} className={"w-fit"} />
              </div>
            </div>

            <div className="flex gap-x-1 items-center">
              <p className="font-semibold">Customer Name -</p>
              <div>
                <ModalInput value={datamodal?.CustomerName} />
              </div>
            </div>

            <div className="flex gap-x-1 items-center">
              <p className="font-semibold">Customer No.-</p>
              <div>
                <ModalInput value={datamodal?.CustomerNo} />
              </div>
            </div>

            <div className="pl-1">
              <div className="flex gap-x-1 items-center">
                <p className="font-semibold">1. Pickup Address - </p>
                <div>
                  <ModalInput value={"pickup address"} />
                </div>
              </div>

              <div className="flex gap-x-1 items-center">
                <p className="font-semibold">2. Drop Address - </p>
                <div>
                  <ModalInput value={"drop address"} />
                </div>
              </div>

              <div className="flex gap-x-1 items-center">
                <p className="font-semibold">3. Drop Address - </p>
                <div>
                  <ModalInput value={"drop address"} />
                </div>
              </div>
            </div>

            {/* /// */}
            <div className="flex">
              <div>
                <div className="flex gap-x-1 items-center">
                  <p className="font-semibold">Package Type -</p>
                  <div>
                    <ModalInput value={datamodal?.OrderType} />
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <p className="font-semibold">Payment Type -</p>
                  <div>
                    <ModalInput value={datamodal?.PaymentType} />
                  </div>
                </div>

                <div className="flex gap-x-1 items-center">
                  <p className="font-semibold">Parcel Value -</p>
                  <div>
                    <ModalInput value={datamodal?.ParcelValue} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-semibold">Additional Services</p>
                <div className="flex gap-x-2 items-center justify-between w-full ">
                  <p>Prefer Currier with Delivery Bag</p>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={isChecked}
                      onChange={handleToggledog}
                      id="left-to-right-toggle"
                    />
                    <label
                      htmlFor="left-to-right-toggle"
                      className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${
                        isChecked ? "bg-green-400" : "bg-gray-400"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                          isChecked ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></span>
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex gap-x-2 items-center justify-between w-full ">
                    <p>Notify recipients by sms</p>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isCheckednotify}
                        onChange={handleTogglenotify}
                        id="left-to-right-toggle"
                      />
                      <label
                        htmlFor="left-to-right-toggle"
                        className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${
                          isCheckednotify ? "bg-green-400" : "bg-gray-400"
                        }`}
                      >
                        <span
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                            isCheckednotify ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between pr-10 pl-10 pt-7">
            <Buttons
              buttonText={"Edit Order Details"}
              className={
                "text-white border-yellow-300 self-center bg-gray-400 px-4 h-11 py-0.5 rounded-3xl"
              }
            />
            <Buttons
              buttonText={"Download Invoice"}
              className={
                "text-white border-yellow-300 self-center bg-yellow-400 h-11 py-0.5 px-4 rounded-3xl"
              }
            />
            <Buttons
              buttonText={"Cancle Order"}
              className={
                "text-white border-yellow-300 self-center bg-red-500 h-11 px-4 py-1 rounded-3xl"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalOrder;
