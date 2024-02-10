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
import toast from "react-hot-toast";
import AssignRider from "../components/AssignRider";
const Order = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({
    status: "",
    _id: "",
    paymentType: "",
    customerName: "",
    customerNo: "",
    pickupAddress: "",
    dropAddress: "",
    package: "",
    packageValue: "",
    courierWithDeliveryBag: "",
    notifyBySms: "",
    recipientPhoneNumber: "",
    deliveryType: "",
    rider: ""
  });
  const [isEditable, setisEditable] = useState(false);

  const [isBagChecked, setBagIsChecked] = useState(false);
  const [isCheckednotify, setIsCheckednotify] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const [activeButton, setActiveButton] = useState("proccessing");
  //   const [serachParams, setSearchParams] = useSearchParams();
  const [savingDataLoading, setSavingDataLoading] = useState(false)
  const fetchOrderById = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/order/customer/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(data);
      setOrder({
        status: data?.order.status,
        _id: data?.order._id,
        paymentType: data?.order.payment_method,
        customerName: data?.order.customer?.fullname,
        customerNo: data?.order.customer?.mobileno,
        pickupAddress: data?.order.pickup?.text,
        dropAddress: data?.order?.drop?.text,
        package: data?.order.package,
        packageValue: data?.order.amount,
        courierWithDeliveryBag: data?.order.courier_bag,
        notifyBySms: data?.order.notify_sms,
        recipientPhoneNumber: data?.order?.phone_number,
        deliveryType: data?.order?.delivery_type,
        rider: data?.order?.rider
      });


      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchOrderById();
  }, []);

  const handleEditClick = () => {
    setisEditable(!isEditable);
  };
  const handleChange = (e) => {
    setOrder((prevdata) => ({
      ...prevdata,
      [e.target.id]: e.target.value,
    }));
  };

  const handleUpdateOrder = async () => {
    setLoading(true);

    try {
      await axios(`${server}/order/update`, {
        method: "PATCH",

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: {
          _id: order._id,
          payment_method: order.paymentType,

          fullname: order.customerName,
          phone_number: order.customerNo,
          pickup: {
            text: order.pickupAddress,
          },
          payment_address: {
            text: order.dropAddress,
          },
          amount: order.packageValue,
          package: order.package,
          courier_bag: order.courierWithDeliveryBag,
          notify_sms: order.notifyBySms,
          phone_number: order.recipientPhoneNumber,
          delivery_type: order.deliveryType
        },
      })
        .then((res) => {
          if (!res?.data?.error) {
            toast.success(res?.data?.message);
            setisEditable(!isEditable);
            fetchOrderById()
            setLoading(false)

          } else {
            toast.error(res?.data?.message);
            setLoading(false)
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false)
        })
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setLoading(false);
  };

  const handleEditRiderInformation = async (e) => {
    e.preventDefault();
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

  const handleCancleOrder = async () => {
    setLoading(true);
    try {
      const { data } = await axios(`${server}/order/update`, {
        method: "PATCH",

        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: {
          _id: order._id,
          status: "cancelled",
        },
      });

      console.log("data", data);
      if (data.error === false) {
        fetchOrderById()
        toast.success(data?.message);
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.log("error in cancelling order", error);
      toast.error(error?.message);
    }
    setLoading(false);
  };

  const getButtonClass = (buttonId) => {
    return buttonId === activeButton
      ? "text-black  bg-yellow-400 "
      : "bg-white";
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        input[type="checkbox"] {
          -webkit-print-color-adjust: exact;
        }
        input[type="checkbox"]:checked + label {
          background-color: #34d399;
        }
        input[type="checkbox"] + label {
          background-color: #e5e7eb;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);


  return (
    <div className="">
      <Layout>
        <div className="flex">
          <SideNav className={"w-[20vw]"} />
          {/* <Layout2 loading={loading} className="h-[95vh]"> */}
          <div className="p-5 absolute right-5 h-[95vh] mt-5 overflow-hidden w-[76vw] shadow-lg bg-white rounded-lg flex  flex-col   md:gap-y-1  gap-y">
            <div className="rounded-lg px-4 py-2 w-[10vw] mr-2 text-center border-2 text-base flex justify-center font-semibold bg-[#ffd12e] border-yellow-300 outline-yellow-400  hover:shadow-md  shadow-sm">
              {order?.status ? (
                order?.status?.charAt(0).toUpperCase() + order?.status?.slice(1)
              ) : (
                <Spinner />
              )}
            </div>

            <div
              className="w-full grid grid-cols-2 gap-y-2 gap-x-6 pt-2 p-5"
              id="testid"
            >
              <InputComp
                value={"#" + order?._id.slice(-5)}
                label={"Order No:"}
                disabled
              />
              <InputComp
                value={order?.paymentType}
                label={"Payment Type:"}
                onChange={handleChange}
                disabled={!isEditable}
                id={"paymentType"}
              />
              <InputComp
                value={order?.customerName}
                label={"Customer Name:"}
                onChange={handleChange}
                disabled
                id={"customerName"}
              />
              <InputComp
                value={order?.customerNo}
                label={"Customer No:"}
                onChange={handleChange}
                disabled
                id={"customerNo"}
              />
              <InputComp
                value={order?.recipientPhoneNumber}
                label={"Recipient Phone Number:"}
                onChange={handleChange}
                disabled={!isEditable}
                id={"recipientPhoneNumber"}
              />
              <InputComp
                value={order?.deliveryType}
                label={"Delivery Type:"}
                onChange={handleChange}
                disabled={!isEditable}
                id={"deliveryType"}
              />
              <InputComp
                value={order?.pickupAddress}
                label={"Pickup Address:"}
                onChange={handleChange}
                disabled={!isEditable}
                id={"pickupAddress"}
              />
              <InputComp
                value={order?.dropAddress}
                label={"Drop Address:"}
                onChange={handleChange}
                disabled={!isEditable}
                id={"dropAddress"}
              />
              <InputComp
                label={"Package Type:"}
                value={order?.package}
                onChange={handleChange}
                disabled={!isEditable}
                id={"package"}
              />
              <InputComp
                value={order?.packageValue}
                label={"Package Value:"}
                onChange={handleChange}
                disabled={!isEditable}
                id={"packageValue"}
              />

              <div className=" w-full  items-center justify-between">

                <label htmlFor="" className="pb-[4px] font-semibold">
                  Rider:
                </label>


                <AssignRider order={order} />


              </div>

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
                        checked={order.courierWithDeliveryBag}
                        onChange={(e) => {
                          setOrder({
                            ...order,
                            [e.target.id]: e.target.checked
                          })
                        }}
                        disabled={!isEditable}
                        id="courierWithDeliveryBag"
                      />
                      <label
                        htmlFor="courierWithDeliveryBag"
                        className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${order.courierWithDeliveryBag ? "bg-green-400" : "bg-gray-400"
                          }`}
                      >
                        <span
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${order.courierWithDeliveryBag ? "translate-x-5" : "translate-x-0"
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
                          onChange={(e) => {
                            setOrder({
                              ...order,
                              [e.target.id]: e.target.checked
                            })
                          }}
                          disabled={!isEditable}
                          id="notifyBySms"
                        />
                        <label
                          htmlFor="notifyBySms"
                          className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${order.notifyBySms ? "bg-green-400" : "bg-gray-400"
                            }`}
                        >
                          <span
                            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${order.notifyBySms
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
            <div className="flex justify-center  px-5">


              {
                order?.status == "cancelled" || order?.status == "delivered" ? <div className="">

                  <DownloadInvoice
                    downloadFileName={order?._id}
                    rootElementId={"testid"}
                  />

                </div> : <div className="flex justify-between w-full px-5">


                  {isEditable ? (
                    <div className="">
                      <button
                        type="button"
                        onClick={handleUpdateOrder}
                        disabled={loading}
                        className={
                          "text-white border-yellow-300 self-center bg-yellow-400 h-11 px-4 py-1 w-48 rounded-3xl"
                        }
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="">
                      <button
                        disabled={loading}
                        type="button"
                        onClick={handleEditClick}
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
                    onclick={handleCancleOrder}
                  />
                </div>


              }







            </div>
          </div>
          {/* </Layout2> */}
        </div>
      </Layout>
    </div>
  );
};

export default Order;
