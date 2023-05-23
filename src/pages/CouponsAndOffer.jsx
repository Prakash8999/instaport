import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import Search from "../components/Search";
import CouponsTable from "../components/Table/CouponsTable";
import couponData from "../components/Data/CouponData";
const CouponsAndOffer = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(couponData);
  }, [couponData]);

  const handleSearch = (e) => {
    const filteredData = couponData.filter(
      (data) =>
        data.CouponId.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.Name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.Code.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredData);
  };
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className="absolute pt-14 flex items-center justify-around  left-[10%] w-full ">
          <div>
            <h1 className="text-4xl pt-3 ">Coupons And Offer</h1>
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
          <CouponsTable dataArray={searchResults}></CouponsTable>
        </Layout2>
      </Layout>
    </div>
  );
};

export default CouponsAndOffer;
