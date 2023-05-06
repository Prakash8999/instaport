import React, { useState } from "react";
import thead from "../Data/Tableheadingrider";
import orderdata from "../Data/Riderdata";
import Modaltest from "../Modal/ModalOrder";

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
        <table className="max-w-screen-lg ">
          <thead className="flex justify-around items-center">
            <tr className=" border-b-2 border-slate-200 ">
              {thead.map((head, index) => (
                <th key={index} className=" px-4 py-2 ">
                  {head.tablehead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="flex justify-around items-center mt-4 ">
            <tr className="border-b-2 border-slate-100 ">
              {orderdata.map((data, index) => (
                <td
                  key={index}
                  onClick={() => {
                    setmodal({ show: true, datamodal: data });
                  }}
                  className=" px-4 py-2 gap-6"
                >
                  {data.RiderId}
                  {data.RiderName}
                  {data.RiderNo}
                  {data.Date}
                  {data.Time}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderTable;
