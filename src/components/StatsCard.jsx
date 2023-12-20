import React from "react";
import { BiCube } from "react-icons/bi";

const StatsCard = ({ Number, Value }) => {
  return (
    <div className="flex h-36 w-64  bg-white items-center justify-center gap-8 rounded-xl shadow-lg border duration-200 hover:shadow-xl hover:font-bold cursor-pointer ">
      <div className="">
        <BiCube
          style={{
            fontSize: "4em",
            backgroundColor: "#E6FFCC",
            borderRadius: "100px",
            padding: "8px",
          }}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-2xl font-semibold">{Number}</div>
        <div className="text-sm font-medium">{Value}</div>
      </div>
    </div>
  );
};

export default StatsCard;
