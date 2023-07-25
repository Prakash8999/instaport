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

const Orders = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showOrders, setShowOrders] = useState([]);
  const [activeButton, setActiveButton] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [orderdata, setorderdata] = useState([]);

  useEffect(() => {
    try {
      axios("https://instaport-api.vercel.app/order/orders", {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJlYTA0ODIyNTU0MmI5NWQ4NDQyYWUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTAyNzk2MTh9.l1QGtnaHsV0H4VvMhElihdv4MzuGeIP_PF0aAoluTGg`,
        },
      })
        .then((res) => {
          setorderdata(res.data.order);
          console.log(res.data.order);
          console.log(orderdata);
        })
        .then(() => {
          console.log(orderdata);
        });
    } catch (error) {
      console.log(error);
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    setSearchResults(orderdata);
    setShowOrders(orderdata);
  }, [orderdata]);

  useEffect(() => {
    setSearchResults(showOrders);
  }, [showOrders]);

  const handleFilter = (e, buttonId) => {
    setActiveButton(buttonId);
    console.log(e);
    if (e[0] === "all") {
      setShowOrders(orderdata);
    } else if (e[0] === "active") {
      const data = orderdata.filter((order) => {
        return order.active === e[1];
      });
      setShowOrders(data);
      setSearchResults(data);
    } else if (e[0] === "cancelled") {
      const canceldata = orderdata.filter((order) => {
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
        <div className="absolute pt-14 flex  left-[23vw] ">
          <div className="flex lg:gap-[10vw]  w-full">
            <div className="flex gap-3 ">
              <Buttons
                className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  1
                )}`}
                onclick={() => {
                  handleFilter(["all"], 1);
                }}
                buttonText={"Available"}
              />
              <Buttons
                className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  2
                )}`}
                onclick={() => {
                  handleFilter(["active", true], 2);
                }}
                buttonText={"Active"}
              />
              <Buttons
                className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                  3
                )}`}
                onclick={() => {
                  handleFilter(["active", false], 3);
                }}
                buttonText={"Inactive"}
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
            </div>
            <div className="  pr-6 pl-3">
              <Search onChange={handleSearch} className={"w-[20vw] h-12"} />
            </div>
          </div>
        </div>
        <Layout2 loading={isLoading}>
          <OrderTable dataArray={searchResults} />
        </Layout2>
      </Layout>
    </div>
  );
};

export default Orders;
