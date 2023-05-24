import React, { useState } from "react";

import Modaltest from "../Modal/ModalRider";
import { riderdataActive } from "../Data/Riderdata";
import { riderstheadactive } from "../Data/Tableheadingrider";

const ActiveRiderTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });

  return (
    <>
      {modal.show && (
        <Modaltest
          datamodal={modal.show && modal?.datamodal}
          setmodal={setmodal}
        />
      )}
      <div className="relative  flex justify-center items-center w-full">
        <table className=" w-[100%]">
          <thead>
            <tr className=" border-b-2 border-slate-200 ">
              {riderstheadactive.map((head, index) => (
                <th key={index} className=" px-4 py-2 ">
                  {head.riderTableheadActive}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center mt-4 border-spacing-x-2 ">
            {riderdataActive.map((data, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    setmodal({ show: true, datamodal: data });
                  }}
                  className="border-b-2 border-slate-100 bg-white odd:bg-gray-100"
                >
                  <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                    {data?.RiderId}
                  </td>
                  <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                    {data?.RiderName}
                  </td>
                  <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                    {data?.RiderNo}
                  </td>
                  <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                    {data?.OrderType}
                  </td>
                  <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                    {data?.PickupCity}
                  </td>
                  <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                    {data?.DropCity}
                  </td>
                  <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                    {data?.Date}
                  </td>
                  <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                    {data?.Time}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ActiveRiderTable;
