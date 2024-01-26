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

        <div className="flex pl-5">


        <SideNav className={'w-[20vw]'}/>
    
            <div className=" pt-10 flex    justify-between w-[79vw] px-7 ">
            <h1 className="text-4xl ">Transaction</h1>
            <div>
              <Search className={"w-80 h-12"} onChange={handleSearch}/>
            </div>
          </div>
        <Layout2 loading={isLoading}>
          <TransactionTable dataArray={searchResults} />
        </Layout2>
        </div>
      </Layout>
    </div>
  );
};

export default Transaction;
