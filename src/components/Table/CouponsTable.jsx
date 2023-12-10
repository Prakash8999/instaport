import React, { useState } from "react";
import couponsTableHead from "../Data/CouponsHeader";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import ModalCouponandOffers from "../Modal/ModalCouponsandOffers";
import datanotfound from "../../images/datanotfound (2).svg";

const CouponsTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });
  return (
    <>
      {modal.show && (
        <ModalCouponandOffers
          datamodal={modal.show && modal.datamodal}
          setmodal={setmodal}
        />
      )}
      <div>
        <div className="relative flex justify-center items-center w-full ">
          <div className="w-full">
            <table className="w-[100%] ">
              <thead>
                <tr className=" border-b-2 border-slate-200">
                  {couponsTableHead.map((head, index) => (
                    <th key={index} className=" px-4 py-2 gap-2 ">
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
                        <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                          {data?.CouponId}
                        </td>
                        <td className="cursor-pointer px-4 py-2 gap-2 font-medium bg-slate-300 ">
                          {data?.Code}
                        </td>
                        <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                          {data?.Amount}
                        </td>
                        <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                          {data?.Date}
                        </td>
                        <td className="cursor-pointer px-2 py-2 gap-2 flex justify-center font-light ">
                    
                          <button className="hover:bg-white hover:text-red-600 px-2 py-1 rounded hover:rounded-md">
                            <AiFillDelete />
                          </button>
                        </td>
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
        </div>

        <button
          onClick={() => {
            setmodal({ show: true });
          }}
          className="absolute right-6 text-5xl p-2 bottom-12 text-white bg-yellow-400 rounded-full"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </>
  );
};

export default CouponsTable;



// <td className="cursor-pointer px-4 py-2 gap-2 font-light">
// {data?.Status}
// </td>