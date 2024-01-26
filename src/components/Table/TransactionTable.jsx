import React, { useState } from "react";
import transactionHead from "../Data/TransactionHeader";
import datanotfound from "../../images/datanotfound (2).svg";
import TransactionModal from "../Modal/TransactionModal";

const TransactionTable = ({ dataArray }) => {
  const [modal, setModal] = useState({ show: false, datamodal: {} });
console.log(dataArray);
  return (
    <>
    {
      modal.show && (
        <TransactionModal  dataModal={modal.show && modal.datamodal}
          setModal={setModal}
        />
      )
    }
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
                  const dateObj = new Date(data?.timestamp);

                  const options = {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  };
  
                  const formattedDateString = dateObj.toLocaleString(
                    "en-GB",
                    options
                  );
                return (

                  <tr
                    key={index}
                    className="border-b-2 border-slate-100 bg-white odd:bg-gray-100 cursor-pointer"
                    onClick={()=>{
                      setModal({show:true, datamodal:data})
                    }}

                  >
                    <td className=" py-2 gap-2 font-light">
                      #{data?._id.slice(-5)}
                    </td>
                    
                    <td className=" py-2 gap-2 font-light">
                      {data?.rider?.fullname}
                    </td>
                    <td className=" py-2 gap-2 font-light">{data?.rider?.mobileno}</td>
                    <td className=" py-2 gap-2 font-light">{data?.amount}</td>
                  
                    <td className=" py-2 gap-2 font-light">{formattedDateString}</td>
                    <td className=" py-2 gap-2 font-light">{!data?.completed ? 'Incompleted' : 'Completed'}</td>
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
    </>
  );
};

export default TransactionTable;
