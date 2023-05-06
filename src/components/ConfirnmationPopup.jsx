import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const ConfirnmationPopup = ({ Content, Subcontent, Resolve, Reject }) => {
  return (
    <div className=" relative w-72 h-30 bg-yellow-100 px-4 py-2 rounded-md">
      <div className="absolute top-2 right-2 ">
        <AiFillCloseCircle
          className="icon "
          style={{
            fontSize: "1em",
            backgroundColor: "white",
            borderRadius: "25px",
          }}
        />
      </div>
      <h1 className="text-lg font-semibold pt-6 text-center">{Content}</h1>
      <h1 className="text-sm font-medium text-center">{Subcontent}</h1>
      <div className="flex  justify-center items-center gap-3 mt-4">
        <button className="border-2 rounded-lg py-2 px-4 bg-white hover:bg-yellow-400 hover:text-white hover:font-semibold hover:shadow-md">
          {Resolve}
        </button>
        <button className="border-2 rounded-lg py-2 px-4 bg-white hover:bg-yellow-400 hover:text-white hover:font-semibold hover:shadow-md">
          {Reject}
        </button>
      </div>
    </div>
  );
};

export default ConfirnmationPopup;
