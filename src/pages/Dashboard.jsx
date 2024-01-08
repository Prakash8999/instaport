import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import Search from "../components/Search";
import StatsCard from "../components/StatsCard";
import { Link } from "react-router-dom";
import { ContextAuth } from "../context/Context";
import ChartModal from "../components/Modal/ChartModal";

const Dashboard = () => {
  const { orders } = ContextAuth()
  const [modal, setModal] = useState({ show: false })


  return (
    <div>

      {
        modal.show && (
          <ChartModal dataModal={modal.show}
            setModal={setModal}
          />
        )
      }
      <Layout>
        <SideNav className={'w-[20vw]'} />

        <div className="absolute h-fit w-[76vw]    top-20 pt-4 right-4">
          <div className="flex justify-around  items-center ">

            <Link to={'/orders?query=new'} className="h-16 w-64 flex justify-center items-center  bg-white  rounded-xl shadow-lg border duration-200 hover:shadow-xl cursor-pointer ">
              0 New Orders in last 24 Hours
            </Link>
            <Link to={'/orders?query=new'} className="h-16 w-64 justify-center flex items-center  bg-white  rounded-xl shadow-lg border duration-200 hover:shadow-xl cursor-pointer ">
              0 New Orders in last 24 Hours
            </Link>
            <button onClick={() => {
              setModal({ show: true })
            }}
            className="h-16 w-64 justify-center  flex items-center bg-white rounded-xl shadow-lg border duration-200 hover:shadow-xl cursor-pointer ">
              Chart
            </button>



          </div>
          <div className="flex items-center justify-around mt-14">
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
