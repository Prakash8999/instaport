import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import OrderTable from "../components/Table/OrderTable";
import { NavLink } from "react-router-dom";
import Search from "../components/Search";

const Orders = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className=" pt-14 gap-x-[20rem]  pr-10 pl-[22rem] flex justify-start  ">
          <div className="flex items-center justify-around">
            <div className="flex gap-4  ">
              <NavLink
                to="/orders"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Avilable
              </NavLink>
              <NavLink
                to="/riders"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Active
              </NavLink>
              <NavLink
                to="/riders"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Order Histoty
              </NavLink>
            </div>
          </div>
          <div className="pl-5">
            <Search
              divclass={"w-[21rem] h-10"}
              className={"w-96 h-12"}
            ></Search>
          </div>
        </div>
        <Layout2>
          <OrderTable></OrderTable>
        </Layout2>
      </Layout>
    </div>
  );
};

export default Orders;
