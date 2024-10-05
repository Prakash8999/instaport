import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import StatsCard from "../components/StatsCard";
import { Link } from "react-router-dom";
import { ContextAuth } from "../context/Context";
import ChartModal from "../components/Modal/ChartModal";
import moment from "moment";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const { orders } = ContextAuth();
  const [modal, setModal] = useState({ show: false });

  return (
    <div>
      {modal.show && (
        <ChartModal
          orders={orders}
          dataModal={modal.show}
          setModal={setModal}
        />
      )}
      <Layout>
        <div className="flex  justify-between  w-full px-6">
          <SideNav className={"w-[20%]"} />

          <div className="min-h-fit h-full w-[79%]  pt-5 ">

            <div className="gap-x-6 grid grid-cols-4 justify-items-center">
              {/* <div className="flex items-center justify-around mt-14"> */}
              {/* <Link to="/orders?query=processing"> */}
              <StatsCard
                Number={orders?.length > 0 ? orders?.length : 0}
                Value={"Total Order"}
              ></StatsCard>
              {/* </Link> */}
              <Link className="w-full" to="/orders?query=new">
                <StatsCard
                  Number={
                    orders?.filter((data) => data?.status === "new").length
                  }
                  Value={"New"}
                ></StatsCard>
              </Link>
              <Link className="w-full" to="/orders?query=processing">
                <StatsCard
                  Number={
                    orders?.filter((data) => data?.status === "processing")
                      .length
                  }
                  Value={"Processing"}
                ></StatsCard>
              </Link>
              <Link className="w-full" to="/orders?query=delivered">
                <StatsCard
                  Number={
                    orders?.filter((data) => data?.status === "delivered")
                      .length
                  }
                  Value={" Delivered"}
                ></StatsCard>
              </Link>
            </div>
            <div className=" flex justify-center items-start h-[80vh] overflow-y-scroll mt-6 sticky overflow-x-hidden">
              <div className="w-full ">
                <table className="border  w-full ">
                  <thead className=" sticky top-0 z-50 bg-white">
                    <tr className=" border border-slate-200 h-10">
                      {/* {thead.map((head, index) => (
        <th key={index} className=" px-4 py-2 gap-2">
          {head.tablehead}
        </th>
      ))} */}
                      <th>Order ID</th>
                      <th>Customer Name</th>
                      <th>Customer No</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Payment Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  {orders?.length > 0 ? (
                    <tbody className="text-center w-full">
                      {orders.map((data, index) => {
                        const dateObj = new Date(data?.createdAt);

                        const options = {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        };

                        const formattedDateString = dateObj.toLocaleString(
                          "en-GB",
                          options
                        );
                        return (
                          // <a
                          //   href={`order/${data?._id}`}
                          //   target="_blank"
                          //   rel="noopener noreferrer"
                          // >
                          <tr
                            key={index}
                            // ** Opens the modal **
                            // onClick={() => {
                            //   setmodal({ show: true, datamodal: data });
                            // }}
                            onClick={() => {
                              window.open(
                                `order/${data?._id}`,
                                "_blank",
                                "noopener, noreferrer"
                              );
                            }}
                            target="_blank"
                            className="border-b-2 border-slate-100 bg-white odd:bg-gray-50 hover:scale-105 duration-300"
                          >
                            <td className="cursor-pointer px-2 py-2  font-light">
                              #{data?._id?.slice(-5)}
                            </td>
                            <td className="cursor-pointer px-2 py-2  font-light">
                              {data?.customer?.fullname}
                            </td>
                            <td className="cursor-pointer px-2 py-2  font-light">
                              {data?.phone_number}
                            </td>

                            <td className="cursor-pointer px-2 py-2  font-light">
                              {formattedDateString}
                            </td>
                            <td className="cursor-pointer px-2 py-2  font-light">
                              {moment(data?.createdAt).format("h:mm a")}
                            </td>
                            <td className="cursor-pointer px-2 py-2  font-light">
                              {data?.payment_method}
                            </td>
                            <td
                              className={`capitalize cursor-pointer   font-semibold text-lg ${data?.status === "delivered"
                                ? "text-green-500"
                                : data?.status === "processing"
                                  ? "text-orange-400"
                                  : data?.status === "new"
                                    ? "text-yellow-500 rounded-lg "
                                    : data?.status === "cancelled"
                                      ? "text-red-700"
                                      : "text-black"
                                }`}
                            >
                              {data?.status}
                            </td>
                          </tr>
                          // </a>
                        );
                      })}
                    </tbody>
                  ) : (
                    <div className="absolute   mt-12  px-8 w-full h-full">
                      <div className="flex  justify-center items-center">
                        {/* <div className="flex flex-col justify-center  items-center  gap-y-10"> 
                        
                        
                        {/* </div> */}


                        <svg
                          aria-hidden="true"
                          className="w-20 h-20 text-white animate-spin fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
