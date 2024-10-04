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
  const [activeButton, setActiveButton] = useState("online");
  const [isLoading, setLoading] = useState(true);
  const [riderdata, setriderdata] = useState([]);
  // const [showRiders, setShowRiders] = useState([])
  const router = useLocation();
  const [serachParams, setSearchParams] = useSearchParams();
  const fetchRider = () => {
    try {
      axios(`${server}/rider/riders`, {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => {
        setriderdata(res?.data?.rider?.filter((item) => item?.verified));
        console.log(res);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchRider()
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(router.search);
    handleFilter(params.get("query"));
    // setActiveButton(params.get("query"))
  }, [router, riderdata]);

  const handleFilter = (e) => {
    setActiveButton(e);

    if (e) {
      const data = riderdata?.filter((rider) => {
        return rider?.status === e;
      });

      // setriderdata(data);
      setSearchResults(data);
    }
  };

  const handleSearch = (e) => {
    // console.log("search input :: ", e);
    if (e.target.value.length > 0) {
      const filteredData = riderdata?.filter(
        (data) =>
          (data?.status.toLowerCase().includes(serachParams.get("query")) &&
            data?.fullname
              .toLowerCase()
              .includes(e.target.value.toLowerCase())) ||
          data?.mobileno.toLowerCase().includes(e.target.value.toLowerCase()) || data?._id?.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filteredData);
    } else {
      const filteredData = riderdata?.filter((data) =>
        data?.status.toLowerCase().includes(serachParams.get("query"))
      );
      setSearchResults(filteredData);
    }
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
          <div className="flex pl-5">
            <SideNav className={"w-[20vw]"} />

            <div className="pt-10 flex justify-between w-[79vw] px-7  ">
              <div className="flex gap-4  ">
                <Buttons
                  className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                    "available"
                  )}`}
                  onclick={() => {
                    setSearchParams({ ["query"]: "available" });
                  }}
                  buttonText={"Available"}
                />
                <Buttons
                  className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                    "online"
                  )}`}
                  onclick={() => {
                    setSearchParams({ ["query"]: "online" });
                  }}
                  buttonText={"Online"}
                />
                <Buttons
                  className={`rounded-lg px-4 py-2 mr-2 text-center border-2 text-base font-semibold w-[10vw] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                    "offline"
                  )}`}
                  onclick={() => {
                    setSearchParams({ ["query"]: "offline" });
                  }}
                  buttonText={"Offline"}
                />
                <Buttons
                  className={`rounded-lg px-4 py-2 mr-2  text-center border-2 text-base font-semibold w-fit border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm  ${getButtonClass(
                    "disabled"
                  )}`}
                  onclick={() => {
                    setSearchParams({ ["query"]: "disabled" });
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
            <AvailableRiderTable dataArray={searchResults} fetchRider={fetchRider} />
          </Layout2>
        </Layout>
      </div>
    </>
  );
};

export default Riders;
