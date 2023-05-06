import React from "react";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import Layout2 from "../components/Layout2";

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <Layout2></Layout2>
      </Layout>
    </div>
  );
};

export default Dashboard;
