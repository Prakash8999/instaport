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
        <SideNav className={'w-[20vw]'} />
        
        <div className="absolute h-fit w-[76vw]    top-32 pt-2 right-4">
          <div className="flex items-center justify-around my-8">
            {/* <Link to="/orders?query=processing"> */}
            <StatsCard Number={orders?.length > 0 ? orders?.length : 0} Value={"Total Order"}></StatsCard>
            {/* </Link> */}
            <Link to="/orders?query=processing">
              <StatsCard Number={orders?.filter(data => data?.status == 'processing').length} Value={"Processing"}></StatsCard>
            </Link>
            <Link to="/orders?query=assigned">
              <StatsCard Number={orders?.filter(data => data?.status == 'assigned').length} Value={"Assigned Order"}></StatsCard>
            </Link>
          </div>
          <div className="flex items-center justify-around mt-14">
            <Link to="/orders?query=outforpickup">
              <StatsCard
                Number={orders?.filter(data => data?.status == 'outforpickup').length}
                Value={" Out For Pickup"}
              ></StatsCard>
            </Link>
            <Link to="/orders?query=outfordelivery">
              <StatsCard Number={orders?.filter(data => data?.status == 'outfordelivery').length} Value={"Out For Delivery"}></StatsCard>
            </Link>
            <Link to="/orders?query=cancelled">
              <StatsCard
                Number={orders?.filter(data => data?.status == 'cancelled').length}
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
