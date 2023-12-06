import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import Ridertable from "../components/Table/Ridertable";
import Search from "../components/Search";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { riderdata } from "../components/Data/Riderdata";
import AvailableRiderTable from "../components/Table/AvailableRiderTable";
import axios from "axios";
import { server } from "..";
import Buttons from "../components/Buttons";

const Riders = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [activeButton, setActiveButton] = useState("available");
  const [isLoading, setLoading] = useState(true);
  const [riderdata, setriderdata] = useState([]);
  // const [showRiders, setShowRiders] = useState([])
  const router = useLocation()
  const [serachParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    try {
      axios(`${server}/rider/riders`, {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => {
        setriderdata(res?.data?.rider);

        setLoading(false)
      });
    } catch (error) {
      console.log(error);
    }
  }, []);


  useEffect(() => {
    const params = new URLSearchParams(router.search)
    handleFilter(params.get("query"));
    // setActiveButton(params.get("query"))
  }, [router, riderdata])


  


  const handleFilter = (e) => {
    console.log(e);

    setActiveButton(e);

    if (e) {
      const data = riderdata?.filter((rider) => {
        return rider?.status === e;
      });
      console.log(data);
      // setriderdata(data);
      setSearchResults(data);
    }
  };


  const handleSearch = (e) => {
    const filteredData = riderdata?.filter(
      (data) =>
        data?.fullname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data?.mobileno.toLowerCase().includes(e.target.value.toLowerCase())

    );

    setSearchResults(filteredData);
  };
  const getButtonClass = (buttonId) => {
    return buttonId === activeButton
      ? "text-black  bg-yellow-400 "
      : "bg-white";
  };
  return (
    <>
      <div>
        <Layout>
          <SideNav></SideNav>
          <div className="absolute pt-7 flex  left-[23vw]  ">
            <div className="flex   lg:gap-[30vw]  w-full ">
              <div className="flex gap-4  ">
                {/* <NavLink
                  to="/riders/available"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-2 gap-4  `}
                >
                  Available
                </NavLink>
                <NavLink
                  to="/riders/active"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-2 gap-4  `}
                >
                  Active
                </NavLink>

                <NavLink
                  to="/riders/active"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-2 gap-4  `}
                >
                  Offline
                </NavLink>

                <NavLink
                  to="/riders/active"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-2 gap-4  `}
                >
                  Disable
                </NavLink> */}
                <Buttons
                  className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                    "available"
                  )}`}
                  onclick={() => {
                    setSearchParams({ ['query']: 'available' })
                  }}
                  buttonText={"Available"}
                />


                <Buttons
                  className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                    "active"
                  )}`}
                  onclick={() => {
                    setSearchParams({ ['query']: 'active' })
                  }}
                  buttonText={"Active"}
                />
                <Buttons
                  className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                    'offline'
                  )}`}
                  onclick={() => {
                    setSearchParams({ ['query']: 'offline' })
                  }}
                  buttonText={"Offline"}
                />
                <Buttons
                  className={`rounded-lg px-4 py-2 mr-2  text-center border-2 text-base font-semibold w-fit border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                    'disabled'
                  )}`}
                  onclick={() => {
                    setSearchParams({ ['query']: 'disabled' })
                  }}
                  buttonText={"Disable"}
                />



              </div>
              <div className="  pl-16">
                <Search className={"w-[20vw] h-12"} onChange={handleSearch} />
              </div>
            </div>
          </div>
          <Layout2 loading={isLoading}>
            <AvailableRiderTable dataArray={searchResults} />
          </Layout2>
        </Layout>
      </div>
    </>
  );
};

export default Riders;
