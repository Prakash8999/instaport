import React from "react";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import Search from "../components/Search";
import StatsCard from "../components/StatsCard";
import { Link } from "react-router-dom";
import { ContextAuth } from "../context/Context";

const Dashboard = () => {
  const {orders} = ContextAuth()
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
            <Link to="/orders">
              <StatsCard Number={orders?.length} Value={"Total Order"}></StatsCard>
            </Link>
            <Link to="/orders">
              <StatsCard Number={"54202"} Value={"Avilable Order"}></StatsCard>
            </Link>
            <Link to="/orders">
              <StatsCard Number={"54202"} Value={"Active Order"}></StatsCard>
            </Link>
          </div>
          <div className="flex items-center justify-around mt-14">
            <Link to="/orders">
              <StatsCard
                Number={"54202"}
                Value={" Order Completed"}
              ></StatsCard>
            </Link>
            <Link to="/riders">
              <StatsCard Number={"54202"} Value={"Total Rider"}></StatsCard>
            </Link>
            <Link to="/orders">
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
