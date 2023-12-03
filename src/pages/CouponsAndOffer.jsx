import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import Search from "../components/Search";
import CouponsTable from "../components/Table/CouponsTable";
import couponData from "../components/Data/CouponData";
const CouponsAndOffer = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setSearchResults(couponData);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
return () =>{
  clearTimeout(timeout)
}

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
        <div className="absolute pt-7 flex items-center justify-around  left-[10%] w-full ">
          <div>
            <h1 className="text-4xl  pl-6">Coupons And Offer</h1>
          </div>
          <div className="pl-18">
            <Search
              divclass={"w-80 h-10"}
              onChange={handleSearch}
              className={"w-80 h-12"}
            />
          </div>
        </div>
        <Layout2 loading={isLoading}>
          <CouponsTable dataArray={searchResults}></CouponsTable>
        </Layout2>
      </Layout>
    </div>
  );
};

export default CouponsAndOffer;
