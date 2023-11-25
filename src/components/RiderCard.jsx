import React from "react";
import Avtar from "../images/Avtar.png";

const RiderCard = ({ RiderName, RiderAge, VechileNumber }) => {

  return (
    <div className="relative flex flex-col w-full h-full gap-5 bg-slate-100 rounded-xl   border-2 border-gray-400 hover:shadow-lg">
      <div className=" flex flex-col w-[inherit] h-[30vh] gap-y-11 items-center justify-center p-[2vw]">
        <div className="flex  items-start  gap-8">
          <div>
            <img src={Avtar} alt="" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{RiderName}</div>
            <div className="flex gap-3">
              <div className="text-sm text-slate-400">Age:{RiderAge}</div>
              <span>|</span>
              <div className="text-sm text-slate-400">{VechileNumber}</div>
            </div>
          </div>
        </div>
        <div className="flex  items-center gap-[1vw]">
          <button className="border-2 bg-[#FFFDE6] text-black px-6 py-2 rounded-xl  border-green-400 hover:border-green-500 hover:border-dashed hover:bg-green-100  hover:shadow-lg ">
            Confirm
          </button>
          <button  className="border-2 bg-[#FFFDE6] text-black px-8 py-2 rounded-xl   border-red-600 hover:border-red-500 hover:border-dashed hover:bg-red-100  hover:shadow-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiderCard;
