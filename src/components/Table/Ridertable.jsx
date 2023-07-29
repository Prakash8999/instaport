import React, { useState } from "react";
import Modaltest from "../Modal/ModalRider";
import { riderdataActive } from "../Data/Riderdata";
import { riderstheadactive } from "../Data/Tableheadingrider";
import datanotfound from "../../images/datanotfound (2).svg";
const ActiveRiderTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });

  return (
    <>
      {modal.show && (
        <Modaltest
          datamodal={modal.show && modal?.datamodal}
          setmodal={setmodal}
          modal={modal}
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

{dataArray.length>0 ? (
  <tbody className="text-center mt-4 border-spacing-x-2 ">


  {dataArray.map((data, index) => {
    return (
      <tr
        key={index}
        
        onClick={() => {
          setmodal({ show: true, datamodal: data });
        }}
        className="border-b-2 border-slate-100 bg-white odd:bg-gray-100"
      >
        <td className="cursor-pointer px-4 py-2 gap-2 font-light">
          {data?._id.slice(-5)}
        </td>
        <td className="cursor-pointer px-4 py-2 gap-2 font-light">
          {data?.fullname}
        </td>
        <td className="cursor-pointer px-4 py-2 gap-2 font-light">
          {data?.mobileno}
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
):
(
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
)

}


        
        </table>
      </div>
    </>
  );
};

export default ActiveRiderTable;
