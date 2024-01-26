import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import Search from "../components/Search";
import CouponsTable from "../components/Table/CouponsTable";
import { server } from "..";
import axios from "axios";
import { UseCouponsContext } from "../context/Coupons";
const CouponsAndOffer = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { couponData, setCouponData } = UseCouponsContext()
  console.log(couponData);
  useEffect(() => {
    setSearchResults(couponData);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);
    return () => {
      clearTimeout(timeout);
    };
  }, [couponData]);

  const handleSearch = (e) => {
    const filteredData = couponData?.filter(
      (data) =>
        data?.code?.toLowerCase().includes(e.target.value.toLowerCase()) || 
        (data?.maxAmount?.toString().toLowerCase().includes(e.target.value.toLowerCase())) ||
        (data?.percentOff?.toString().toLowerCase().includes(e.target.value.toLowerCase()))
    );
    setSearchResults(filteredData);
  };
  return (
    <div>
    
      <Layout>
      <div className="flex pl-5">
      <SideNav className={'w-[20vw]'}/>
        <div className="pt-10 flex    justify-between w-[79vw] px-7  ">
          <div>
            <h1 className="text-4xl  ">Coupons And Offer</h1>
          </div>
          <div className="pl-18">
            <Search
              divclass={"w-80 h-10"}
              onChange={handleSearch}
              placeholder={"Search Coupon Code or Amount or Discount"}
              className={"w-80 h-12"}
            />
          </div>
        </div>
        <Layout2 loading={isLoading}>
          <CouponsTable dataArray={searchResults}></CouponsTable>
        </Layout2>
              </div>
      </Layout>
    </div>
  );
};

export default CouponsAndOffer;
