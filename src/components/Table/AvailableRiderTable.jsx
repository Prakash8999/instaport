import React, { useEffect, useState } from "react";
import { riderdata } from "../Data/Riderdata";
import { ridersthead } from "../Data/Tableheadingrider";
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
  };
  return (
    <>
      <div className="relative flex justify-center items-center w-full ">
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
    </>
  );
};

export default AvailableRiderTable;
