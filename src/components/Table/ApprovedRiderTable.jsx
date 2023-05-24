import React, { useEffect, useState } from "react";

import ApprovedRiderHeader from "../Data/ApprovedRiderHeader";
import ApprovedRiderData from "../Data/ApprovedRiderData";
import ModalApprovedRider from "../Modal/ModalApprovedRider";
import datanotfound from "../../images/datanotfound (2).svg";
const ApprovedRiderTable = ({dataArray}) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });


  return (
    <>
      {modal.show && (
        <ModalApprovedRider
          datamodal={modal.show && modal.datamodal}
          setmodal={setmodal}
        />
      )}
    
          <div className="relative flex justify-center items-center w-full ">
            <div className="w-full">
              <table className="w-[100%]">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    {ApprovedRiderHeader.map((head, index) => {
                      return (
                        <th key={index} className="px-4 py-2 gap-2">
                          {head.riderhead}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                {dataArray.length > 0 ? (
                  <tbody className="text-center mt-4">
                    {dataArray.map((data, index) => {
                      return (
                        <tr
                          key={index}
                          onClick={() => {
                            setmodal({ show: true, datamodal: data });
                          }}
                          className="border-b-2 border-slate-100 bg-white odd:bg-gray-100  w-[100%] cursor-pointer "
                        >
                          <td className=" py-2">{data?.RiderId}</td>
                          <td>{data?.RiderName}</td>
                          <td>{data?.RiderNo}</td>
                          <td>{data?.Date}</td>
                          <td>{data?.Time}</td>
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
    
    </>
  );
};

export default ApprovedRiderTable;
