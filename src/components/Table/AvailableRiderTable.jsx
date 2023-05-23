import React, { useEffect, useState } from "react";
import { riderdata, riderdataActive } from "../Data/Riderdata";
import { ridersthead, riderstheadactive } from "../Data/Tableheadingrider";
import Layout from "../Layout";
import SideNav from "../SideNav";
import { NavLink } from "react-router-dom";
import Search from "../Search";
import Layout2 from "../Layout2";


const AvailableRiderTable = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults(riderdata);
  }, [riderdata]);

  const handleSearch = (e) => {
    const filteredData = riderdata.filter(
      (data) =>
        data.RiderName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.RiderId.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.Date.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data.RiderNo.toLowerCase().includes(e.target.value.toLowerCase())
    );

    if (filteredData) {
      setSearchResults(filteredData);
    } else {
      return <p>No Search Found</p>;
    }
  };
  return (
    <>
      {/* <Layout>
        <SideNav />
        <div className="absolute pt-14 flex  left-[23vw]  ">
          <div className="flex   lg:gap-[30vw]  w-full ">
            <div className="flex gap-4  ">
              <NavLink
                to="/availablerider"
                className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Available
              </NavLink>
              <NavLink
                to="/riders"
                className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Active
              </NavLink>
            </div>
            <div className="  pr-6">
              <Search className={"w-[20vw] h-12"} onChange={handleSearch} />
            </div>
          </div>
        </div>

        <div className="relative  flex justify-center items-center w-full">
          <table className=" w-[100%]">
            <thead>
              <tr className=" border-b-2 border-slate-200 ">
                {ridersthead.map((head, index) => (
                  <th key={index} className=" px-4 py-2 ">
                    {head.riderTablehead}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center mt-4 border-spacing-x-2 ">
              {riderdata.map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b-2 border-slate-100 bg-white odd:bg-gray-100"
                  >
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.RiderId}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.RiderName}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.RiderNo}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.OrderType}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.PickupCity}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.DropCity}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.Date}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.Time}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout> */}
      
      <Layout>
        <SideNav></SideNav>
        <div className="absolute pt-14 flex  left-[23vw]  ">
            <div className="flex   lg:gap-[30vw]  w-full ">
              <div className="flex gap-4  ">
                <NavLink
                  to="/riders/availablerider"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
                >
                  Available
                </NavLink>
                <NavLink
                  to="/riders"
                  className={`rounded-lg border-2 text-base font-semibold hover:shadow-lg  shadow-md border-yellow-300 p-1 lg:w-[10vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
                >
                  Active
                </NavLink>
              </div>
              <div className="  pr-6">
                <Search className={"w-[20vw] h-12"} onChange={handleSearch} />
              </div>
            </div>
          </div>
        <Layout2>
          <div className="relative flex justify-center items-center w-full ">
            <div className="w-full">
              <table className="w-[100%]">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    {ridersthead.map((head, index) => {
                      return (
                        <th key={index} className="px-4 py-2 gap-2">
                          {head.riderTablehead}
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody className="text-center mt-4">
                  {riderdata.map((data, index) => {
                    return (
                      <tr
                        key={index}
                    
                        className="border-b-2 border-slate-100 bg-white odd:bg-gray-100  w-[100%] cursor-pointer "
                      >
                        <td className=" py-2">{data?.RiderId}</td>
                        <td>{data?.RiderName}</td>
                        <td>{data?.RiderNo}</td>
                        <td>{data?.Date}</td>
                        <td>{data?.Time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Layout2>
      </Layout>
    </>
  );
};

export default AvailableRiderTable;
