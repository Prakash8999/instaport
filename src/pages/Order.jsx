import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { server } from "..";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import DownloadInvoice from "../components/DownloadInvoice";
import Buttons from "../components/Buttons";
import { AiOutlineClose } from "react-icons/ai";
import InputComp from "../components/InputComp";
import Spinner from "../components/Spinner";

const Order = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({});
  const [isEditable, setisEditable] = useState(false);

  const [isBagChecked, setBagIsChecked] = useState(false);
  const [isCheckednotify, setIsCheckednotify] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeButton, setActiveButton] = useState("proccessing");
  //   const [serachParams, setSearchParams] = useSearchParams();

  const fetchOrderById = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/order/customer/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setOrder(data.order);
      console.log("data :: fetchOrderByID", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchOrderById();
  }, []);

  const handleEditClick = () => {
    setOrder((prevData) => ({
      ...prevData,
    }));
    setisEditable(true);
  };
  const handleChange = (e) => {
    setOrder((prevdata) => ({
      ...prevdata,
      [e.target.id]: e.target.value,
    }));
  };

  const [serachParams, setSearchParams] = useSearchParams();
  const router = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(router.search);
    handleFilter(params.get("query"));
  }, [router]);

  // useEffect(() => {
  //   setSearchResults(orders);
  //   setShowOrders(orders);
  // }, [orders]);

  // useEffect(() => {
  //   setSearchResults(showOrders);
  // }, [showOrders]);

  const handleFilter = (e) => {
    setActiveButton(e);

    if (e) {
      const data = order?.filter((order) => {
        return order.status === e;
      });
      // setShowOrders(data);
      setSearchResults(data);
    }
  };



  const getButtonClass = (buttonId) => {
    return buttonId === activeButton
      ? "text-black  bg-yellow-400 "
      : "bg-white";
  };



  return (
    <div className="">
      <Layout>
        <div className="flex">
          <SideNav className={"w-[20vw]"} />
          {/* <Layout2 loading={loading} className="h-[95vh]"> */}
          <div className="p-5 absolute right-5 h-[95vh] mt-5 overflow-hidden w-[76vw] shadow-lg bg-white rounded-lg flex  flex-col   md:gap-y-1  gap-y">

            <div className="rounded-lg px-4 py-2 w-[10vw] mr-2 text-center border-2 text-base flex justify-center font-semibold bg-[#ffd12e] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm">
              {order?.status ? order?.status?.charAt(0).toUpperCase() + order?.status?.slice(1) : <Spinner />}
            </div>



            <div
              className="w-full grid grid-cols-2 gap-y-2 gap-x-6 pt-2 p-5"
              id="testid"
            >
              <InputComp value={order?._id} label={"Order No:"} />
              <InputComp
                disabled={!isEditable}
                value={order?.payment_method}
                label={"Payment Type:"}
                onChange={handleChange}
              />
              <InputComp
                value={order?.customer?.fullname}
                label={"Customer Name:"}
              />
              <InputComp
                value={order?.phone_number}
                label={"Customer No:"}
                onChange={handleChange}
                disabled={!isEditable}
              />
              <InputComp
                value={order?.pickup?.text}
                label={"Pickup Address:"}
              />
              <InputComp value={order?.drop?.text} label={"Drop Address:"} />
              <InputComp
                value={order?.delivery_type}
                label={"Package Type:"}
                onChange={handleChange}
                disabled={!isEditable}
              />
              <InputComp value={order?.ParcelValue} label={"Package Value:"} />

              {/* /// */}
              <div className="flex">
                <div className="flex flex-col gap-y-2">
                  <p className="font-semibold">Additional Services</p>
                  <div className="flex gap-x-2 items-center justify-between w-full ">
                    <p>Prefer Currier with Delivery Bag</p>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isBagChecked}
                        onChange={(e) => {
                          setBagIsChecked(e.target.checked);
                        }}
                        id="bag"
                      />
                      <label
                        htmlFor="bag"
                        className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${isBagChecked ? "bg-green-400" : "bg-gray-400"
                          }`}
                      >
                        <span
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isBagChecked ? "translate-x-5" : "translate-x-0"
                            }`}
                        ></span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-x-2 items-center justify-between w-full ">
                      <p>Notify recipients by sms</p>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isCheckednotify}
                          onChange={(e) => {
                            setIsCheckednotify(e.target.checked);
                          }}
                          id="notify"
                        />
                        <label
                          htmlFor="notify"
                          className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${isCheckednotify ? "bg-green-400" : "bg-gray-400"
                            }`}
                        >
                          <span
                            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isCheckednotify
                              ? "translate-x-5"
                              : "translate-x-0"
                              }`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between px-5">
              {/* <Buttons
                onClick={handleEditClick}
                buttonText={!readOnly ? "Cancel" : "Edit Order Details"}
                className={
                  "text-white border-yellow-300 self-center bg-gray-400 h-11 px-4 py-1 w-48 rounded-3xl"
                }
              /> */}

              {isEditable ? (
                <div className="">
                  <button
                    type="button"
                    //   onClick={handleSubmit}
                    className={
                      "text-white border-yellow-300 self-center bg-gray-400 h-11 px-4 py-1 w-48 rounded-3xl"
                    }
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="">
                  <button
                    type="button"
                    //   onClick={handleEditClick}
                    className={
                      "text-white border-yellow-300 self-center bg-gray-400 h-11 px-4 py-1 w-48 rounded-3xl"
                    }
                  >
                    Edit Order Details
                  </button>
                </div>
              )}
              <DownloadInvoice
                downloadFileName={order?._id}
                rootElementId={"testid"}
              />
              <Buttons
                buttonText={"Cancel Order"}
                className={
                  "text-white border-yellow-300 self-center bg-red-500 h-11 px-4 py-1 w-48 rounded-3xl"
                }
              />
            </div>
          </div>
          {/* </Layout2> */}
        </div>
      </Layout>
    </div>
  );
};

export default Order;
