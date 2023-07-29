import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import Search from "../components/Search";
import { NavLink } from "react-router-dom";
// import { riderdataActive } from "../components/Data/Riderdata";
import ActiveRiderTable from "../components/Table/Ridertable";
import axios from "axios";
const ActiveRider = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [riderdataActive, setRiderDataActive] = useState([]);



  useEffect(() => {
    try {
      axios("https://instaport-api.vercel.app/rider/riders", {
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
          // Authorization: `Bearer `,
        },
      }).then((res) => {
        setRiderDataActive(res?.data?.rider);
        console.log(res?.data?.rider);

      });
    } catch (error) {
      console.log(error);
    }
  }, []);




  useEffect(() => {
    setSearchResults(riderdataActive);
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [riderdataActive]);

  const handleSearch = (e) => {
    const filteredData = riderdataActive.filter(
      (data) =>
        data?.fullname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data?._id.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.Date.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data?.mobileno.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredData)
  };

  return (
    <>
      <div>
        <Layout>
          <SideNav classNameRider={"bg-[#ffd12e]"}></SideNav>
          <div className="absolute pt-14 flex  left-[23vw]  ">
            <div className="flex   lg:gap-[30vw]  w-full ">
              <div className="flex gap-4  ">
                <NavLink
                  to="/riders/available"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
                >
                  Available
                </NavLink>
                <NavLink
                  to="/riders/active"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
                >
                  Active
                </NavLink>
              </div>
              <div className="  pl-16">
                <Search className={"w-[20vw] h-12"} onChange={handleSearch} />
              </div>
            </div>
          </div>
          <Layout2 loading={loading}>
            <ActiveRiderTable dataArray={searchResults} />
          </Layout2>
        </Layout>
      </div>
    </>
  );
};

export default ActiveRider;
