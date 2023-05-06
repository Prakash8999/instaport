import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import RiderCard from "../components/RiderCard";
import Ridertable from "../components/Table/Ridertable"
const Riders = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <Layout2>
      <Ridertable/>

        </Layout2>
      </Layout>
    </div>
  );
};

export default Riders;
