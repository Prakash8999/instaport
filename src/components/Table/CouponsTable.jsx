import React from "react";
import couponsTableHead from "../Data/CouponsHeader";
import couponData from "../Data/CouponData";

const CouponsTable = () => {
  return (
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
              {couponData.map((data, index) => {
                return (
                  <tr key={index} className="border-b-2 border-slate-100">
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
    </div>
  );
};

export default CouponsTable;
