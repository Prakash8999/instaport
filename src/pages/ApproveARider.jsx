import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import { NavLink } from "react-router-dom";
import Search from "../components/Search";
import Avtar from "../images/Avtar.png";

import ridercardData from "../components/Data/RiderCardData";
const ApproveARider = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className="absolute pt-14 flex  left-[23vw]">
          <div className=" flex lg:gap-[13vw]  w-full  ">
            <div className="flex gap-4  ">
              <NavLink
                to="/approvearider"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Pending Riders
              </NavLink>
              <NavLink
                to="/approvedrider"
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
          <div className="flex items-center justify-center my-8">
            <div className="grid grid-cols-3 gap-y-16 gap-x-16">
              {ridercardData.map((data, index) => {
                return (
                  <div className="relative flex flex-col w-full h-full gap-5 bg-slate-100 rounded-xl   border-2 border-gray-400 hover:shadow-lg">
                    <div
                      className=" flex flex-col w-[inherit] h-[30vh] gap-y-11 items-center justify-center p-[2vw]"
                      key={index}
                    >
                      <div className="flex  items-start  gap-8">
                        <div>
                          <img src={Avtar} alt="" />
                        </div>
                        <div className="flex flex-col">
                          <div className="font-semibold">{data?.RiderName}</div>
                          <div className="flex gap-3">
                            <div className="text-sm text-slate-400">
                              Age:{data?.RiderAge}
                            </div>
                            <span>|</span>
                            <div className="text-sm text-slate-400">
                              {data?.VechileNumber}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex  items-center gap-[1vw]">
                        <button className="border-2 bg-[#FFFDE6] text-black px-6 py-2 rounded-xl  border-green-400 hover:border-green-500 hover:border-dashed hover:bg-green-100  hover:shadow-lg ">
                          Confirm
                        </button>
                        <button className="border-2 bg-[#FFFDE6] text-black px-8 py-2 rounded-xl   border-red-600 hover:border-red-500 hover:border-dashed hover:bg-red-100  hover:shadow-lg">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Layout2>
      </Layout>
    </div>
  );
};

export default ApproveARider;
