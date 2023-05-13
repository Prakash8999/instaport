import React, { useState } from "react";

import Modaltest from "../Modal/ModalRider";
import riderdata from "../Data/Riderdata";
import ridersthead from "../Data/Tableheadingrider";

const OrderTable = () => {
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
              {ridersthead.map((head, index) => (
                <th key={index} className=" px-4 py-2 ">
                  {head.riderTablehead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center mt-4 border-spacing-x-2 ">
            {riderdata.map((data, index) => {
              return (
                <tr
                  key={index}
                  onClick={() => {
                    setmodal({ show: true, datamodal: data });
                  }}
                  className="border-b-2 border-slate-100"
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

export default OrderTable;
