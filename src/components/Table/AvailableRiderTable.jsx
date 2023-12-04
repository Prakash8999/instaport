import React, { useState } from "react";
import { ridersthead } from "../Data/Tableheadingrider";
import datanotfound from "../../images/datanotfound (2).svg";

const AvailableRiderTable = ({ dataArray }) => {
  console.log(dataArray);
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <>
      <div className="relative flex justify-center items-center w-full ">
        <table className="w-[100%]">
          <thead>
            <tr className="border-b-2 border-slate-200">
              {ridersthead.map((head, index) => {
                return (
                  <th key={index} className="px-4 py-2 gap-2">
                    {head.riderTablehead}
                  </th>
                );
              })}
            </tr>
          </thead>

          {dataArray.length > 0  && dataArray.filter(data => data?.approve).length > 0 ? (
            <tbody className="text-center mt-4">
              {dataArray?.filter(data => data?.approve ).map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b-2 border-slate-100 bg-white odd:bg-gray-100  w-[100%] "
                  >
                    <td className=" py-2">#{data?._id.slice(-5)}</td>
                    <td>{data?.fullname}</td>
                    <td>{data?.mobileno}</td>
                    <td>{data?.date}</td>
                    <td>{data?.status}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <div className="absolute w-[100%]  mt-12  px-8  ">
            <div className="flex justify-around h-full items-center">

              {/* <div className="flex flex-col justify-center  items-center  gap-y-10"> */}
                <span className="font-semibold  text-3xl">No Available Rider Currently.</span>
                  {/* </div> */}
            </div>
          </div>
          )}
        </table>
      </div>
    </>
  );
};

export default AvailableRiderTable;
