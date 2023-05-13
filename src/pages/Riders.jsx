import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import Ridertable from "../components/Table/Ridertable";
import Search from "../components/Search";
import { NavLink } from "react-router-dom";
const Riders = () => {
  return (
    <>
      <div>
        <Layout>
          <SideNav></SideNav>
          <div className="absolute pt-14 flex  left-[23vw]  ">
            <div className="flex   lg:gap-[30vw]  w-full ">
              <div className="flex gap-4  ">
                <NavLink
                  to="/orders"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
                >
                  Avilable
                </NavLink>
                <NavLink
                  to="/riders"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
                >
                  Active
                </NavLink>
              </div>
              <div className="  pr-6">
                <Search className={"w-[20vw] h-12"}></Search>
              </div>
            </div>
          </div>
          <Layout2>
            <Ridertable />
          </Layout2>
        </Layout>
      </div>
    </>
  );
};

export default Riders;
