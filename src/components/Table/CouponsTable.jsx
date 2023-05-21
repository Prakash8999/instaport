import React, { useState } from "react";
import couponsTableHead from "../Data/CouponsHeader";
import couponData from "../Data/CouponData";
import { AiOutlinePlus, AiOutlinePlusCircle } from "react-icons/ai";
import ModalCouponandOffers from "../Modal/ModalCouponsandOffers"

const CouponsTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({show:false, datamodal:{}})
  return (
    <>
    {
      modal.show && (
        <ModalCouponandOffers
        datamodal ={modal.show && modal.datamodal}
        setmodal ={setmodal}
        />

      )
    }
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
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.Name}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-medium bg-slate-300 ">
                      {data?.Code}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.Amount}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.Status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>



      <button onClick={()=>{
        setmodal({show:true})
      }} className="absolute right-6 text-5xl p-2 bottom-12 text-white bg-yellow-400 rounded-full">
      <AiOutlinePlus/>
      </button>
    </div>
                  </>
  );
};

export default CouponsTable;
