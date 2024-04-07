import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import TransactionTable from "../components/Table/TransactionTable";
import Search from "../components/Search";
// import transactionData from "../components/Data/TransactionData";
import axios from "axios";
import { server } from "..";
const Transaction = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [transactionData, setTransactionData] = useState('')

  const fetchTracnsaction = async () => {
    try {
      await axios(`${server}/rider/admin/transactions`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,

        },
      }).then((res) => {

        setTransactionData(res?.data?.transactions)
        setLoading(false)
      })
    } catch (error) {

    }
  }
useEffect(() => {
fetchTracnsaction()
}, [])

  useEffect(() => {

setSearchResults(transactionData)
  }, [transactionData]);

  const handleSearch = (e) => {
    const filteredData = transactionData.filter(
      (data) =>

        data?.rider?.fullname?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data?.rider?.mobileno?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data?._id?.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredData);
  };
  return (
    <div>
      <Layout>

        <div className="flex pl-5">


          <SideNav className={'w-[20vw]'} />

          <div className=" pt-10 flex    justify-between w-[79vw] px-7 ">
            <h1 className="text-4xl ">Transaction</h1>
            <div>
              <Search className={"w-80 h-12"} onChange={handleSearch} />
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
