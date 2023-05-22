import React, { useState } from "react";
import transactionHead from "../Data/TransactionHeader";

const TransactionTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });

  return (
    <div className=" flex justify-center items-start w-full h-[80vh] overflow-y-scroll">
      <div className="w-full">
        <table className="w-[100%] ">
          <thead className=" sticky top-0 z-50 bg-white">
            <tr className=" border-b-2 border-slate-200">
              {transactionHead.map((head, index) => (
                <th key={index} className=" py-2 gap-2 ">
                  {head.tablehead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center mt-4">
            {dataArray.map((data, index) => {
              return (
                <tr
                  key={index}
                  className="border-b-2 border-slate-100 bg-white odd:bg-gray-100"
                >
                  <td className=" py-2 gap-2 font-light">
                    {data?.TransactionId}
                  </td>
                  <td className=" py-2 gap-2 font-light">{data?.OrderId}</td>
                  <td className=" py-2 gap-2 font-light">{data?.RiderName}</td>
                  <td className=" py-2 gap-2 font-light">{data?.RiderNo}</td>
                  <td className=" py-2 gap-2 font-light">
                    {data?.PaymentType}
                  </td>
                  <td className=" py-2 gap-2 font-light">
                    {data?.InstaPortCharges}
                  </td>
                  <td className=" py-2 gap-2 font-light">
                    {data?.RiderCharges}
                  </td>
                  <td className=" py-2 gap-2 font-light">
                    {data?.SecurityFees}
                  </td>
                  <td className=" py-2 gap-2 font-light">{data?.Date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
