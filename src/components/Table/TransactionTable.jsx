import React, { useState } from "react";
import transactionHead from "../Data/TransactionHeader";
import datanotfound from "../../images/datanotfound (2).svg";

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
          {dataArray.length > 0 ? (
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
                    <td className=" py-2 gap-2 font-light">
                      {data?.RiderName}
                    </td>
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
          ) : (
            <div className="absolute w-[100%] mt-12  bg-gray-100 px-8  ">
              <div className="flex justify-around items-center">
                <div className="w-[40%]">
                  <img className="object-contain" src={datanotfound} alt="" />
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
    </div>
  );
};

export default TransactionTable;
