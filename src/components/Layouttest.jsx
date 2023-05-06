import React from "react";
import Layout from "./Layout";
import Layout2 from "./Layout2";
import SideNav from "./SideNav";

const Layouttest = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <Layout2></Layout2>
      </Layout>
    </div>
  );
};

export default Layouttest;
