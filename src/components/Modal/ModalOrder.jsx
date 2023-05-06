import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import orderdata from "../Data/Orderdata";

const ModalOrder = ({ datamodal, setmodal }) => {
  console.log(datamodal.OrderId);
  return (
    <>
      <div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
        <div className="relative h-[70vh]  overflow-auto w-[45vw] pb-5 bg-[#FFFDE6] rounded-lg flex items-center flex-col justify-center  md:gap-y-8 md:pt-[17rem] gap-y-16">
          <button
            onClick={() => {
              setmodal({ show: false });
            }}
            className="absolute top-4 right-4 font-bold text-lg text-red-600"
            title="close"
          >
            <AiOutlineClose />
          </button>
          <div>
            {orderdata?.map((data, index) => {
              return (
                <div key={index}>
                  <p className="text-black">Order No- {data?.OrderId}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalOrder;
