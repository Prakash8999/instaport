import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Layout from "../components/Layout";
import Search from "../components/Search";
import StatsCard from "../components/StatsCard";
import { Link } from "react-router-dom";
import { ContextAuth } from "../context/Context";
import ChartModal from "../components/Modal/ChartModal";
import thead from "../components/Data/TableheadingOrder";
import moment from "moment";

const Dashboard = () => {
  const { orders } = ContextAuth()
  const [modal, setModal] = useState({ show: false })


  return (
    <div>

      {
        modal.show && (
          <ChartModal orders={orders} dataModal={modal.show}
            setModal={setModal}
          />
        )
      }
      <Layout>
        <div className="flex pl-5 justify-between items-start">
          <SideNav className={'w-[20vw]'} />

          <div className="h-fit w-[80vw] px-8 pt-4">
            <div className=" justify-around  items-center hidden ">

              <Link to={'/orders?query=new'} className="h-16 w-64 flex justify-center items-center  bg-white  rounded-xl shadow-lg border duration-200 hover:shadow-xl cursor-pointer ">
                {orders?.filter(data => data?.status == 'new').length} New Orders in last 24 Hours
              </Link>
              <Link to={'/orders?query=new'} className="h-16 w-64 justify-center flex items-center  bg-white  rounded-xl shadow-lg border duration-200 hover:shadow-xl cursor-pointer ">
                0 New Orders in last 24 Hours
              </Link>
              <button onClick={() => {
                setModal({ show: true })
              }}
                className="h-16 w-64 justify-center  flex items-center bg-white rounded-xl shadow-lg border duration-200 hover:shadow-xl cursor-pointer ">
                Chart
              </button>



            </div>
            <div className="gap-x-6 grid grid-cols-4 mt-14 justify-items-center">
              {/* <div className="flex items-center justify-around mt-14"> */}
              {/* <Link to="/orders?query=processing"> */}
              <StatsCard Number={orders?.length > 0 ? orders?.length : 0} Value={"Total Order"}></StatsCard>
              {/* </Link> */}
              <Link className="w-full" to="/orders?query=new">
                <StatsCard Number={orders?.filter(data => data?.status == 'new').length} Value={"New"}></StatsCard>
              </Link>
              <Link className="w-full" to="/orders?query=processing">
                <StatsCard Number={orders?.filter(data => data?.status == 'processing').length} Value={"Processing"}></StatsCard>
              </Link>
              <Link className="w-full" to="/orders?query=delivered">
                <StatsCard
                  Number={orders?.filter(data => data?.status == 'delivered').length}
                  Value={" Delivered"}
                ></StatsCard>
              </Link>

            </div>
            <div className=" flex justify-center items-start w-[76vw]  h-[80vh] overflow-y-scroll mt-6 ">
              <div className="w-full">
                <table className=" border-2 w-full">
                  <thead className=" sticky top-0 z-50 bg-white">
                    <tr className=" border-2 border-slate-200 h-10">
                      {/* {thead.map((head, index) => (
        <th key={index} className=" px-4 py-2 gap-2">
          {head.tablehead}
        </th>
      ))} */}
                      <th>
                        Order ID
                      </th>
                      <th>
                        Customer Name
                      </th>
                      <th>
                        Customer No
                      </th>
                      <th>
                        Date
                      </th>
                      <th>
                        Time
                      </th>
                      <th>
                        Payment Type
                      </th>
                      <th>
                        Status
                      </th>
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
                              window.open(`order/${data?._id}`, '_blank', 'noopener, noreferrer');

                            }}

                            target="_blank"
                            className="border-b-2 border-slate-100 bg-white odd:bg-gray-100 hover:scale-105 duration-300"
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
                            <td className={`capitalize cursor-pointer   font-semibold text-lg ${data?.status == 'delivered' ? 'text-green-500' : data?.status == 'processing' ? 'text-orange-500' : data?.status == 'new' ? 'text-yellow-500 rounded-lg ' : data?.status == 'cancelled' ? 'text-red-500' :'text-black'}`}>
                              {data?.status}
                            </td>
                          </tr>
                          // </a>
                        );
                      })}
                    </tbody>
                  ) : (
                    <div className="absolute w-[100%]  mt-12  px-8  ">
                      <div className="flex justify-around h-full items-center">
                        {/* <div className="flex flex-col justify-center  items-center  gap-y-10"> */}
                        <span className="font-semibold  text-3xl">
                          Data not available.
                        </span>
                        {/* </div> */}
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
