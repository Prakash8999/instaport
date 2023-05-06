import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import OrderTable from "../components/Table/OrderTable";

const Orders = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <Layout2>
          <OrderTable></OrderTable>
        </Layout2>
      </Layout>
    </div>
  );
};

export default Orders;