import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import RiderCard from "../components/RiderCard";
import { NavLink } from "react-router-dom";
import Search from "../components/Search";
const ApproveARider = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className=" pt-14 gap-x-64 pr-10 pl-96 flex justify-start  ">
          <div className="flex gap-4  ">
            <NavLink
              to="/approvearider"
              className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center py-[10px] gap-4  `}
            >
              Pending Riders
            </NavLink>
            <NavLink
              to="/riders"
              className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center py-[10px] gap-4  `}
            >
              Approved Riders
            </NavLink>
          </div>
          <div className="pl-5">
            <Search divclass={"w-96 h-10"} className={"w-96 h-12"}></Search>
          </div>
        </div>
        <Layout2>
          <div className="flex items-center justify-center my-8">
            <div className="grid grid-cols-3 gap-y-16 gap-x-10">
              <RiderCard
                RiderName={"Nitish mangesh Dalvi"}
                RiderAge={"21"}
                VechileNumber={"MH04 5678"}
              ></RiderCard>
              <RiderCard
                RiderName={"om"}
                RiderAge={"21"}
                VechileNumber={"MH04 5678"}
              ></RiderCard>
              <RiderCard
                RiderName={"Nitish Dalvi"}
                RiderAge={"21"}
                VechileNumber={"MH04 5678"}
              ></RiderCard>
              <RiderCard
                RiderName={"Nitish Dalvi"}
                RiderAge={"21"}
                VechileNumber={"MH04 5678"}
              ></RiderCard>
              <RiderCard
                RiderName={"Nitish Dalvi"}
                RiderAge={"21"}
                VechileNumber={"MH04 5678"}
              ></RiderCard>
            </div>
          </div>
        </Layout2>
      </Layout>
    </div>
  );
};

export default ApproveARider;
