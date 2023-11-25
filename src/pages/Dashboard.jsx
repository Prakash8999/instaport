import React from "react";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import Search from "../components/Search";
import StatsCard from "../components/StatsCard";
import { Link } from "react-router-dom";
import { ContextAuth } from "../context/Context";

const Dashboard = () => {
  const { orders } = ContextAuth()
  console.log();

  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className=" absolute flex w-[24vw] bg-slate-50 rounded-lg shadow-lg  top-7 left-[26vw] ">
          <div className="  ">
            <Search className={"w-96 h-12"}></Search>
          </div>
        </div>
        <div className="absolute h-fit w-[76vw]    top-48 right-4">
          <div className="flex items-center justify-around my-8">
            {/* <Link to="/orders?query=processing"> */}
              <StatsCard Number={orders?.length > 0 ? orders?.length : 0} Value={"Total Order"}></StatsCard>
            {/* </Link> */}
            <Link to="/orders?query=processing">
              <StatsCard Number={"54202"} Value={"Processing"}></StatsCard>
            </Link>
            <Link to="/orders?query=assigned">
              <StatsCard Number={"54202"} Value={"Assigned Order"}></StatsCard>
            </Link>
          </div>
          <div className="flex items-center justify-around mt-14">
            <Link to="/orders?query=outforpickup">
              <StatsCard
                Number={"54202"}
                Value={" Out For Pickup"}
              ></StatsCard>
            </Link>
            <Link to="/orders?query=outfordelivery">
              <StatsCard Number={"54202"} Value={"Out For Delivery"}></StatsCard>
            </Link>
            <Link to="/orders?query=cancelled">
              <StatsCard
                Number={"54202"}
                Value={" Cancelled Orders"}
              ></StatsCard>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
