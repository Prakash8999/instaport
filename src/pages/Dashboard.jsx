import React from "react";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import Search from "../components/Search";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className=" pt-14 gap-x-64 pl-80 flex justify-between  ">
          
        <div className="  ">
          <Search  className={"w-96 h-12"}></Search>
        </div>
        </div>
        <div className="absolute h-fit w-[76vw]    top-48 right-4">
          <div className="flex items-center justify-around my-8">
            <StatsCard Number={"54202"} Value={"Total Order"}></StatsCard>
            <StatsCard Number={"54202"} Value={"Avilable Order"}></StatsCard>
            <StatsCard Number={"54202"} Value={"Active Order"}></StatsCard>
          </div>
          <div className="flex items-center justify-around my-16 mx-16">
            <StatsCard Number={"54202"} Value={"Orders Completed"}></StatsCard>
            <StatsCard Number={"54202"} Value={"Total Rider"}></StatsCard>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
