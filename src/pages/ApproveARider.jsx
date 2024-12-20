import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import { NavLink } from "react-router-dom";
import Search from "../components/Search";
import Avtar from "../images/Avtar.png";
import datanotfound from "../images/datanotfound (2).svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { IoClose } from "react-icons/io5";

import ridercardData from "../components/Data/RiderCardData";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "..";
import InputComp from "../components/InputComp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const ApproveARider = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [appliedRider, setAppliedRider] = useState('')
  const [buttonLoading, setButtonLoading] = useState(false)
  const [openDocument, setOpenDocument] = useState({ show: false, data: undefined });
  const InitialReasonData = {
    imageReason: "",
    aadhaarReason: "",
    panReason: "",
    drivinglicenseReason: "",
    rcBookReason: "",
  }
  const [reason, setReason] = useState(InitialReasonData)

  useEffect(() => {
    try {
      axios(`${server}/rider/riders`, {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => {

        setAppliedRider(res?.data?.rider?.filter((item) => item?.verified));

        setLoading(false)
      });
    } catch (error) {
      toast.error(error?.message)
    }
  }, []);

  useEffect(() => {
    setSearchResults(appliedRider);
  }, [appliedRider]);

  const acceptRider = async (id, status, openDocument) => {
    try {
      if (status) {
        if (openDocument.data && openDocument.data?.aadhar_number.status == "approve" && openDocument.data?.image.status == "approve" && openDocument.data?.pan_number.status == "approve") {
          setButtonLoading(true)
          await axios(`${server}/rider/riderstatus`, {
            method: "PATCH",
            data: {
              approve: true,
              _id: id,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },

          }).then((res) => {
            if (!res?.data?.error) {
              setLoading(false)
              toast.success(res?.data?.message)
              setButtonLoading(false)
              window.location.reload();
            }

            else {
              toast.error(res?.message)
              window.location.reload();

            }
          }).catch((err) => {
            toast.error(err?.message)
          })
        } else {
          toast.error("Approve all the required documents")
        }
      } else {
        setButtonLoading(true)
        await axios(`${server}/rider/riderstatus`, {
          method: "PATCH",
          data: {
            approve: false,
            _id: id,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,

          },

        }).then((res) => {
          // setAppliedRider(res?.data?.rider);

          if (!res?.data?.error) {
            setLoading(false)
            toast.success(res?.data?.message)
            setButtonLoading(false)
            window.location.reload();
          }

          else {
            toast.error(res?.message)
            window.location.reload();

          }
        }).catch((err) => {
          toast.error(err?.message)
        })
      }
    } catch (error) {
      toast.error('Something went Wrong!')

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
      await axios(`${server}/rider/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,

        },
      }).then((res) => {
        toast.success(res?.data?.message)
        window.location.reload()
        setButtonLoading(false)
      }).catch((err) => {
        console.log(err);
        toast.error(err?.message)
        setButtonLoading(false)
      })
    } catch (error) {
      console.log(error);
      setButtonLoading(false)
    }
  }

  const handleDocumentStatus = async (id, data) => {
    setButtonLoading(true)
    try {
      await axios(`${server}/rider/admin/update/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        data: data
      }).then((res) => {
        setOpenDocument({ show: true, data: res.data?.rider })
        toast.success(res?.data?.message)
        setButtonLoading(false)
      }).catch((err) => {
        console.log(err);
        toast.error(err?.message)
        setButtonLoading(false)
      })
    } catch (error) {
      console.log(error);
      setButtonLoading(false)
    }
  }

  const handleReasonChange = (e) => {
    setReason({
      ...reason,
      [e.target.id]: e.target.value
    })
  }

  return (
    <>
      {
        openDocument.show && <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50">
          <div className="w-[50vw] bg-white rounded-lg h-[65vh] flex flex-col">
            <div className="px-3 text-xl font-bold flex justify-between items-center py-2">
              <p>  Documents</p>
              <span onClick={() => setOpenDocument({ show: false, data: undefined })} className="cursor-pointer h-8 w-8 flex items-center justify-center bg-gray-200 rounded-full"><IoClose /></span>
            </div>
            <div className="w-full flex flex-1 relative">
              <p className="flex items-center justify-center cursor-pointer -translate-y-1/2 h-10 w-10 bg-amber-400 rounded-full z-50 prev absolute top-1/2 left-4"><FaArrowLeft /></p>
              <p className="flex items-center justify-center cursor-pointer -translate-y-1/2 h-10 w-10 bg-amber-400 rounded-full z-50 next absolute top-1/2 right-4"><FaArrowRight /></p>
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: '.prev',
                  nextEl: '.next',
                }}
                spaceBetween={50}
                className="w-full"
                slidesPerView={1}
              >
                <SwiperSlide className="flex flex-col relative">
                  <p className="absolute top-5 left-5 bg-amber-400 px-3 py-1 rounded-md text-sm">Image</p>
                  <img alt={openDocument?.data?.image?.status === "upload" && "No image"} src={openDocument?.data?.image?.url} className="flex-1 w-full h-[50vh] object-cover" />
                  <div className="flex items-center gap-3 justify-center mt-2">
                    {openDocument?.data?.image?.status !== "approve" && <InputComp value={reason.imageReason} onChange={handleReasonChange} id={"imageReason"} placeholder={"Image reason"} />}
                    {openDocument?.data?.image?.status !== "approve" &&
                      <button onClick={() => {
                        if (reason.imageReason !== "") {
                          handleDocumentStatus(openDocument.data._id, { "image": { ...openDocument?.data?.image, status: "reject", reason: reason.imageReason } })
                        } else {
                          alert("Please mention the reason")
                        }
                      }} disabled={openDocument?.data?.image?.status === "upload"} className="w-36 px-3 py-2 bg-red-600 rounded-lg text-white">Reject</button>
                    }
                    <button onClick={() => { handleDocumentStatus(openDocument.data._id, { "image": { ...openDocument?.data?.image, status: "approve", reason: "" } }) }} disabled={openDocument?.data?.image?.status === "upload"} className="w-36 px-3 py-2 bg-green-600 rounded-lg text-white">{openDocument?.data?.image?.status === "approve" ? "Accepted" : "Accept"}</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col relative">
                  <p className="absolute top-5 left-5 bg-amber-400 px-3 py-1 rounded-md text-sm">Aadhaar</p>
                  <img alt={openDocument?.data?.aadhar_number?.status === "upload" && "No image"} src={openDocument?.data?.aadhar_number?.url} className="flex-1 w-full h-[50vh] object-cover" />
                  <div className="flex items-center gap-3 justify-center mt-2">
                    <div className="flex gap-3">
                      {openDocument?.data?.aadhar_number?.status !== "approve" && <InputComp value={reason.aadhaarReason} onChange={handleReasonChange} id={"aadhaarReason"} placeholder={"Image reason"} />}
                      {openDocument?.data?.aadhar_number?.status !== "approve" && < button onClick={() => {
                        if (reason.aadhaarReason !== "") {
                          handleDocumentStatus(openDocument.data._id, { "aadhar_number": { ...openDocument?.data?.aadhar_number, status: "reject", reason: reason.aadhaarReason } })
                        } else {
                          alert("Please mention the reason")
                        }
                      }} disabled={openDocument?.data?.aadhar_number?.status === "upload"} className="w-36 px-3 py-2 bg-red-600 rounded-lg text-white">Reject</ button>}
                      <button onClick={() => { handleDocumentStatus(openDocument.data._id, { "aadhar_number": { ...openDocument?.data?.aadhar_number, status: "approve" } }) }} disabled={openDocument?.data?.aadhar_number?.status === "upload"} className="w-36 px-3 py-2 bg-green-600 rounded-lg text-white">{openDocument?.data?.aadhar_number?.status === "approve" ? "Accepted" : "Accept"}</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="relative flex flex-col">
                  <p className="absolute top-5 left-5 bg-amber-400 px-3 py-1 rounded-md text-sm">PAN card</p>
                  <img alt={openDocument?.data?.pan_number?.status !== "upload" && "No image"} src={openDocument?.data?.pan_number?.url} className="flex-1 w-full h-[50vh] object-cover" />
                  <div className="relative flex items-center gap-3 justify-center mt-2">
                    <div className="flex gap-3">
                      {openDocument?.data?.pan_number?.status !== "approve" && <InputComp value={reason.panReason} onChange={handleReasonChange} id={"panReason"} placeholder={"Image reason"} />}
                      {openDocument?.data?.pan_number?.status !== "approve" && <button onClick={() => {
                        if (reason.panReason !== "") {
                          handleDocumentStatus(openDocument.data._id, { "pan_number": { ...openDocument?.data?.pan_number, status: "reject", reason: reason.panReason } })
                        } else {
                          alert("Please mention the reason")
                        }
                      }} disabled={openDocument?.data?.pan_number?.status === "upload"} className="w-36 px-3 py-2 bg-red-600 rounded-lg text-white">Reject</button>}
                      <button onClick={() => { handleDocumentStatus(openDocument.data._id, { "pan_number": { ...openDocument?.data?.pan_number, status: "approve" } }) }} disabled={openDocument?.data?.pan_number?.status === "upload"} className="w-36 px-3 py-2 bg-green-600 rounded-lg text-white">{openDocument?.data?.pan_number?.status === "approve" ? "Accepted" : "Accept"}</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col relative">
                  <p className="absolute top-5 left-5 bg-amber-400 px-3 py-1 rounded-md text-sm">Driving License</p>
                  <img alt={openDocument?.data?.drivinglicense?.status === "upload" && "No image"} src={openDocument?.data?.drivinglicense?.url} className="flex-1 w-full h-[50vh] object-cover" />
                  <div className="flex items-center gap-3 justify-center mt-2">
                    <div className="flex gap-3">
                      {openDocument?.data?.drivinglicense?.status !== "approve" && <InputComp value={reason.drivinglicenseReason} onChange={handleReasonChange} id={"drivinglicenseReason"} placeholder={"Image reason"} />}
                      {openDocument?.data?.drivinglicense?.status !== "approve" && <button onClick={() => {
                        if (reason.drivinglicenseReason !== "") {
                          handleDocumentStatus(openDocument.data._id, { "drivinglicense": { ...openDocument?.data?.drivinglicense, status: "reject", reason: reason.drivinglicenseReason } })
                        } else {
                          alert("Please mention the reason")
                        }
                      }} disabled={openDocument?.data?.drivinglicense?.status === "upload"} className="w-36 px-3 py-2 bg-red-600 rounded-lg text-white">Reject</button>}
                      <button onClick={() => { handleDocumentStatus(openDocument.data._id, { "drivinglicense": { ...openDocument?.data?.drivinglicense, status: "approve" } }) }} disabled={openDocument?.data?.drivinglicense?.status === "upload"} className="w-36 px-3 py-2 bg-green-600 rounded-lg text-white">{openDocument?.data?.drivinglicense?.status === "approve" ? "Accepted" : "Accept"}</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col relative">
                  <p className="absolute top-5 left-5 bg-amber-400 px-3 py-1 rounded-md text-sm">RC book</p>
                  <img alt={openDocument?.data?.rc_book?.status === "upload" && "No image"} src={openDocument?.data?.rc_book?.url} className="flex-1 w-full h-[50vh] object-cover" />
                  <div className="flex items-center gap-3 justify-center mt-2">
                    <div className="flex gap-3">
                      {openDocument?.data?.rc_book?.status !== "approve" && <InputComp value={reason.rcBookReason} onChange={handleReasonChange} id={"rcBookReason"} placeholder={"Image reason"} />}
                      {
                        openDocument?.data?.rc_book?.status !== "approve" && <button onClick={() => {
                          if (reason.rcBookReason !== "") {
                            handleDocumentStatus(openDocument.data._id, { "rc_book": { ...openDocument?.data?.rc_book, status: "reject", reason: reason.rcBookReason } })
                          } else {
                            alert("Please mention the reason")
                          }
                        }} disabled={openDocument?.data?.rc_book?.status === "upload"} className="w-36 px-3 py-2 bg-red-600 rounded-lg text-white">Reject</button>
                      }
                      <button onClick={() => { handleDocumentStatus(openDocument.data._id, { "rc_book": { ...openDocument?.data?.rc_book, status: "approve" } }) }} disabled={openDocument?.data?.rc_book?.status === "upload"} className="w-36 px-3 py-2 bg-green-600 rounded-lg text-white">{openDocument?.data?.rc_book?.status === "approve" ? "Accepted" : "Accept"}</button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div >
      }
      <div>
        <Layout>
          <div className="flex pl-5">

            <SideNav className={'w-[20vw]'} />


            <div className="pt-10 flex    justify-between w-[79vw] px-7  ">
              <NavLink
                to="/pending"
                className={`rounded-lg border-2 text-base font-semibold hover:font-bold h-12 shadow-md border-yellow-300 p-1 lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center py-[10px] gap-4  `}
              >
                Pending Riders
              </NavLink>


              <Search
                onChange={handleSearch}
                className={"w-[28vw] h-12"}
              ></Search>
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
                              <div onClick={() => {
                                setOpenDocument({ show: true, data: data })
                              }}>
                                <img src={data?.image?.url || Avtar} alt="" className={`w-20 h-20 rounded-lg border-2 ${data?.approve ? "border-green-600" : "border-red-600"}`} />
                              </div>
                              <div className="flex flex-col">
                                <div className="font-semibold">
                                  {data?.fullname}
                                </div>
                                <div className="flex  flex-col  ">
                                  <div className="text-sm text-slate-400 text-start">
                                    Age: {data?.age}
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
                                acceptRider(data?._id, true, { data })
                              }}
                                disabled={buttonLoading}
                                className="border-2 bg-[#FFFDE6] text-black px-6 py-2 rounded-xl  border-green-400 hover:border-green-500 hover:border-dashed hover:bg-green-100  hover:shadow-lg ">
                                Onboard
                              </button>
                              <button disabled={buttonLoading} onClick={() => {
                                acceptRider(data?._id, false, { data })
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
          </div>
        </Layout>

      </div>
    </>
  );
};

export default ApproveARider;
