import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import TransactionTable from "../components/Table/TransactionTable";
import Search from "../components/Search";
import transactionData from "../components/Data/TransactionData";
const Transaction = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setSearchResults(transactionData);
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 500);
return () =>{
  clearTimeout(timeout)
}

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
        <div className="absolute pt-7 flex items-center justify-around  left-[10%] w-full ">
          <div>
            <h1 className="text-4xl pl-6">Transaction</h1>
          </div>
          <div className="pl-20">
            <Search
              divclass={"w-80 h-10"}
              onChange={handleSearch}
              className={"w-80 h-12"}
            />
          </div>
        </div>
        <Layout2 loading={isLoading}>
          <TransactionTable dataArray={searchResults} />
        </Layout2>
      </Layout>
    </div>
  );
};

export default Transaction;
