import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import OrderTable from "../components/Table/OrderTable";
// import orderdata from "../components/Data/Orderdata";
import Search from "../components/Search";
import { useState } from "react";
import { useEffect } from "react";
import Buttons from "../components/Buttons";
import axios from "axios";
import { ContextAuth } from "../context/Context";

const Orders = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showOrders, setShowOrders] = useState([]);
  const [activeButton, setActiveButton] = useState(1);
  // const [isLoading, setLoading] = useState(true);
const { orders, loading} = ContextAuth()

  
  useEffect(() => {
    setSearchResults(orders);
    setShowOrders(orders);
  }, [orders]);

  useEffect(() => {
    setSearchResults(showOrders);
  }, [showOrders]);

  const handleFilter = (e, buttonId) => {
    setActiveButton(buttonId);
    console.log(e);
    if (e[0] === "all") {
      
      setShowOrders(orders);
    } else if (e[0] === "active") {
      const data = orders.filter((order) => {
        return order.active === e[1];
      });
      setShowOrders(data);
      setSearchResults(data);
    } else if (e[0] === "cancelled") {
      const canceldata = orders.filter((order) => {
        return order.cancelled === e[1];
      });
      setShowOrders(canceldata);
    }
  };

  const handleSearch = (e) => {
    const filteredData = showOrders.filter(
      (data) =>
        data.CustomerName.toLowerCase().includes(
          e.target.value.toLowerCase()
        ) ||
        data.PackageType.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.Date.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.CustomerNo.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.OrderId.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setShowOrders(filteredData);
    setSearchResults(filteredData);
  };

  const getButtonClass = (buttonId) => {
    return buttonId === activeButton
      ? "text-black  bg-yellow-400 "
      : "bg-white";
  };

  return (
    <div>
      <Layout>
        <SideNav />
        <div className="absolute pt-7 flex  left-[23vw] ">
          <div className="flex   w-full">
            <div className="flex gap-3 w-full">
              <Buttons
                className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  1
                )}`}
                onclick={() => {
                  handleFilter(["all"], 1);
                }}
                buttonText={"Processing"}
              />
              {/* <Buttons
                className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  2
                )}`}
                onclick={() => {
                  handleFilter(["active", true], 2);
                }}
                buttonText={"Active"}
              /> */}


<Buttons
                className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  2
                )}`}
                onclick={() => {
                  handleFilter(["active", true], 2);
                }}
                buttonText={"Assigned"}
              />
              <Buttons
                className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  3
                )}`}
                onclick={() => {
                  handleFilter(["active", false], 3);
                }}
                buttonText={"Out For Pickup"}
              />
                <Buttons
                className={`rounded-lg px-4 py-2 mr-2  text-center border-2 text-base font-semibold w-fit border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  4
                )}`}
                onclick={() => {
                  handleFilter(["cancelled", true], 4);
                }}
                buttonText={"Out For Delivery"}
              />
              <Buttons
                className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  4
                )}`}
                onclick={() => {
                  handleFilter(["cancelled", true], 4);
                }}
                buttonText={"Cancelled"}
              />
              <Search onChange={handleSearch} className={"w-[20vw] h-11"} />
            </div>
            
            
          </div>
        </div>
        <Layout2 loading={loading}>
          <OrderTable dataArray={searchResults} />
        </Layout2>
      </Layout>
    </div>
  );
};

export default Orders;
