import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import { NavLink } from "react-router-dom";
import Search from "../components/Search";
import Avtar from "../images/Avtar.png";
import datanotfound from "../images/datanotfound (2).svg";

import ridercardData from "../components/Data/RiderCardData";
import axios from "axios";
import toast from "react-hot-toast";


const ApproveARider = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [appliedRider, setAppliedRider] = useState('')
  const [buttonLoading, setButtonLoading] = useState(false)
  useEffect(() => {
    try {
      axios("https://instaport-backend-master.vercel.app/rider/riders", {
        // headers: {
        //   // Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJlYTA0ODIyNTU0MmI5NWQ4NDQyYWUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTAyNzk2MTh9.l1QGtnaHsV0H4VvMhElihdv4MzuGeIP_PF0aAoluTGg`,
        // },
      }).then((res) => {

        setAppliedRider(res?.data?.rider);

        setLoading(false)
      });
    } catch (error) {
      toast.error(error?.message)
    }
  }, []);




  useEffect(() => {
    setSearchResults(appliedRider);


  }, [appliedRider]);

  const acceptRider = async (id, status) => {
    console.log(id);
    console.log(status);
    try {
      setButtonLoading(true)


      await axios("https://instaport-backend-master.vercel.app/rider/riderstatus", {
        method: "PATCH",
        data: {
          approve: !status,
          _id: id,
        },
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUwYzMyZjFmNTEwNjViMzJlOTRlMmMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTk3OTE2NzV9.DzMADlo2mJayrDMgTpUnVuia2rWOmY7Pk_cz6XTtG5I`,

        },

      }).then((res) => {
        // setAppliedRider(res?.data?.rider);


        setLoading(false)
        toast.success(res?.data?.message)
        setButtonLoading(false)
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
      setButtonLoading(false)
    }
  }


  const handleSearch = (e) => {
    const filteredData = appliedRider.filter(
      (data) =>
        data?.fullname.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data?.mobileno.toLowerCase().includes(e.target.value.toLowerCase())
    
    );
    setSearchResults(filteredData);
  };




  const handleDelete = async (id) => {
    setButtonLoading(true)
    try {
      await axios(`https://instaport-backend-master.vercel.app/rider/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUwYzMyZjFmNTEwNjViMzJlOTRlMmMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2OTk3OTE2NzV9.DzMADlo2mJayrDMgTpUnVuia2rWOmY7Pk_cz6XTtG5I`,

        },
      }).then((res) => {
        toast.success(res?.data?.message)
        window.location.reload()
        setButtonLoading(false)
      }).catch((err) => {
        console.log(err);
        setButtonLoading(false)
      })
    } catch (error) {
      console.log(error);
      setButtonLoading(false)
    }

  }
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className="absolute pt-7 flex  left-[23vw]">
          <div className=" flex lg:gap-[13vw]  w-full  ">
            <div className="flex gap-4  ">
              <NavLink
                to="/pending"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold  shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Pending Riders
              </NavLink>

            </div>
            <div className=" pl-40 pr-6">
              <Search
                onChange={handleSearch}
                className={"w-[20vw] h-12"}
              ></Search>
            </div>
          </div>
        </div>
        <Layout2 loading={isLoading}>
          {searchResults.length > 0 && searchResults.filter(data => !data?.approve).length > 0 ? (
            <div className="flex items-center justify-center my-8">
              <div className="grid grid-cols-3 gap-y-8 gap-x-9">
                {searchResults.filter(data => !data.approve).map((data, index) => {
                  return (
                    <div key={index} className="relative flex flex-col w-full h-full gap-5 bg-slate-100 rounded-xl   border-2 border-gray-400 hover:shadow-lg">

                      <div
                        className=" flex flex-col w-[inherit] h-[30vh] gap-y-11 items-center justify-center p-[2vw]"

                      >
                        <div className="flex  items-start  gap-8">
                          <div>
                            <img src={Avtar} alt="" />
                          </div>
                          <div className="flex flex-col">
                            <div className="font-semibold">
                              {data?.fullname}
                            </div>
                            <div className="flex  flex-col  ">
                              <div className="text-sm text-slate-400 text-start">
                                Age:{data?.RiderAge}
                              </div>

                              <div className="text-sm text-slate-400 text-start">
                                MobileNo:  {data?.mobileno
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex  items-center gap-[1vw]">
                          <button onClick={() => {
                            acceptRider(data?._id, data?.approve)
                          }}
                            disabled={buttonLoading}
                            className="border-2 bg-[#FFFDE6] text-black px-6 py-2 rounded-xl  border-green-400 hover:border-green-500 hover:border-dashed hover:bg-green-100  hover:shadow-lg ">
                            Confirm
                          </button>
                          <button disabled={buttonLoading} onClick={() => {
                            handleDelete(data?._id)
                          }} className="border-2 bg-[#FFFDE6] text-black px-8 py-2 rounded-xl   border-red-600 hover:border-red-500 hover:border-dashed hover:bg-red-100  hover:shadow-lg">
                            Delete
                          </button>
                        </div>
                      </div>


                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="absolute w-[100%] mt-12  h-[80%]  text-center my-auto text-4xl flex justify-center items-center overflow-y-clip">
              No Recent Applied
            </div>
          )}
        </Layout2>
      </Layout>

    </div>
  );
};

export default ApproveARider;
