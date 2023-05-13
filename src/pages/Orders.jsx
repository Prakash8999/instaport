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
        <div className="absolute pt-14 flex  left-[23vw] ">
          <div className="flex lg:gap-[13vw]  w-full">
            <div className="flex gap-4  ">
              <NavLink
                to="/orders"
                className={`rounded-lg border-2 text-base font-semibold hover:shadow-md  shadow-sm border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Avilable
              </NavLink>
              <NavLink
                to="/riders"
                className={`rounded-lg border-2 text-base font-semibold hover:shadow-md  shadow-sm border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Active
              </NavLink>
              <NavLink
                to="/riders"
                className={`rounded-lg border-2 text-base font-semibold hover:shadow-md  shadow-sm border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Order Histoty
              </NavLink>
              <NavLink
                to="/riders"
                className={`rounded-lg border-2 text-base font-semibold hover:shadow-md  shadow-sm border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Cancal Order
              </NavLink>
            </div>
            <div className="  pr-6">
              <Search className={"w-[20vw] h-12"}></Search>
            </div>
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
