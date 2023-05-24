import React from "react";
import { ridersthead } from "../Data/Tableheadingrider";
import datanotfound from "../../images/datanotfound (2).svg";
const AvailableRiderTable = ({ dataArray }) => {
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

          {dataArray.length > 0 ? (
            <tbody className="text-center mt-4">
              {dataArray.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b-2 border-slate-100 bg-white odd:bg-gray-100  w-[100%] cursor-pointer "
                  >
                    <td className=" py-2">{data?.RiderId}</td>
                    <td>{data?.RiderName}</td>
                    <td>{data?.RiderNo}</td>
                    <td>{data?.Date}</td>
                    <td>{data?.Time}</td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <div className="absolute w-[100%] mt-12  bg-gray-100 px-8  ">
              <div className="flex justify-around items-center">
                <div className="w-[40%]">
                  <img src={datanotfound} alt="" />
                </div>
                <div className="flex flex-col justify-center items-center  gap-y-10">
                  <span className="font-mono   text-5xl">Oop's Data</span>
                  <span className="font-mono   text-5xl">Not Found </span>
                </div>
              </div>
            </div>
          )}
        </table>
      </div>
    </>
  );
};

export default AvailableRiderTable;
