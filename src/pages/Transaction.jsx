import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import TransactionTable from "../components/Table/TransactionTable";
import Search from "../components/Search";
const Transaction = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className="absolute pt-14 flex items-center justify-between gap-[25vw]  left-[23vw] ">
          <h1 className="text-4xl pt-3 ">Transaction</h1>
          <Search divclass={"w-80 h-10"} className={"w-80 h-12"} />
        </div>
        <Layout2>
          <TransactionTable></TransactionTable>
        </Layout2>
      </Layout>
    </div>
  );
};

export default Transaction;
