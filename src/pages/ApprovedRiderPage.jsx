import React, { useEffect, useState } from "react";
import ApprovedRiderData from "../components/Data/ApprovedRiderData";
import ApprovedRiderTable from "../components/Table/ApprovedRiderTable";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import { NavLink } from "react-router-dom";
import Layout2 from "../components/Layout2";
import Search from "../components/Search";

const ApprovedRiderPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading,setLoading] = useState(true)

  useEffect(() => {
    setSearchResults(ApprovedRiderData);
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 500);

    return () =>{
      clearTimeout(timeout)
    }
  }, [ApprovedRiderData]);

  const handleSearch = (e) => {
    const filteredData = ApprovedRiderData.filter(
      (data) =>
        data.RiderName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.RiderId.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.Date.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.RiderNo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  return (
    <>
      <Layout>
        <SideNav classNameApprovedrider={"bg-[#ffd12e]" } className={'w-[20vw]'}/>
        <div className="absolute pt-7 flex  left-[23vw]">
          <div className=" flex lg:gap-[13vw]  w-full  ">
            <div className="flex gap-4  ">
              <NavLink
                to="/pending"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4 bg-white  `}
              >
                Pending Riders
              </NavLink>
              {/* <NavLink
                to="/approve-rider/approved"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Approved Riders
              </NavLink> */}
            </div>
            <div className="  pr-6">
              <Search
                onChange={handleSearch}
                className={"w-[20vw] h-12"}
              ></Search>
            </div>
          </div>
        </div>
        <Layout2 loading={isLoading}>
          <ApprovedRiderTable dataArray={searchResults} />
        </Layout2>
      </Layout>
    </>
  );
};

export default ApprovedRiderPage;
