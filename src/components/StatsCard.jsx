import React from "react";
import { BiCube } from "react-icons/bi";

const StatsCard = ({ Number, Value }) => {
  return (
    <div className="flex h-20 w-44 bg-slate-200 items-center justify-center gap-4 rounded-md">
      <div className="">
        <BiCube
          style={{
            fontSize: "2.5em",
            backgroundColor: "#E6FFCC",
            borderRadius: "25px",
            padding: "6px",
          }}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-2xl font-semibold">{Number}</div>
        <div className="text-sm font-medium">{Value}</div>
      </div>
    </div>
  );
};

export default StatsCard;
