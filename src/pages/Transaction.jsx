import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import TransactionTable from "../components/Table/TransactionTable";
import Search from "../components/Search";
import transactionData from "../components/Data/TransactionData";
const Transaction = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(transactionData);
  }, [transactionData]);

  const handleSearch = (e) => {
    const filteredData = transactionData.filter(
      (data) =>
        data.TransactionId.toLowerCase().includes(
          e.target.value.toLowerCase()
        ) ||
        data.RiderName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.RiderNo.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.Date.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.OrderId.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredData);
  };
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className="absolute pt-14 flex items-center justify-around  left-[10%] w-full ">
          <div>
            <h1 className="text-4xl pt-3 ">Transaction</h1>
          </div>
          <div>
            <Search
              divclass={"w-80 h-10"}
              onChange={handleSearch}
              className={"w-80 h-12"}
            />
          </div>
        </div>
        <Layout2>
          <TransactionTable dataArray={searchResults} />
        </Layout2>
      </Layout>
    </div>
  );
};

export default Transaction;
