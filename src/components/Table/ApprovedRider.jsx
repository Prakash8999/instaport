import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Layout from "../Layout";
import SideNav from "../SideNav";
import Search from "../Search";
import Layout2 from "../Layout2";
import ApprovedRiderHeader from "../Data/ApprovedRiderHeader";
import ApprovedRiderData from "../Data/ApprovedRiderData";
import ModalApprovedRider from "../Modal/ModalApprovedRider";
const ApprovedRider = () => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });
  return (
    <>
      {modal.show && (
        <ModalApprovedRider
          datamodal={modal.show && modal.datamodal}
          setmodal={setmodal}
        />
      )}
      <Layout>
        <SideNav></SideNav>
        <div className="absolute pt-14 flex  left-[23vw]  ">
          <div className=" flex lg:gap-[13vw]  w-full  ">
            <div className="flex gap-4  ">
              <NavLink
                to="/approvearider"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Pending Riders
              </NavLink>
              <NavLink
                to="/approvearider/approvedrider"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Approved Riders
              </NavLink>
            </div>
            <div className="  pr-6">
              <Search className={"w-[20vw] h-12"}></Search>
            </div>
          </div>
        </div>

        <Layout2>
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

                <tbody className="text-center mt-4">
                  {ApprovedRiderData.map((data, index) => {
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
              </table>
            </div>
          </div>
        </Layout2>
      </Layout>
    </>
  );
};

export default ApprovedRider;
