import React, { useState } from "react";
import { ridersthead } from "../Data/Tableheadingrider";
import datanotfound from "../../images/datanotfound (2).svg";
import moment from "moment";
import axios from "axios";
import { server } from "../..";
import toast from "react-hot-toast";

const AvailableRiderTable = ({ dataArray, fetchRider }) => {
  // console.log(dataArray);
  const [isToggled, setToggled] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false)
  const handleToggle = () => {
    setToggled(!isToggled);
  };


  
  const handleUpdate = async (id, status) => {

    try {
      setButtonLoading(true)


      await axios(`${server}/rider/riderstatus`, {
        method: "PATCH",
        data: {
          status: status == 'online' ? 'disabled' : 'online',
          _id: id,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,

        },

      })
        .then((res) => {
          // setAppliedRider(res?.data?.rider);

          if (!res?.data?.error) {

            // setLoading(false)
            toast.success("Rider " + res?.data?.message + " to " + res?.data?.rider?.status)
            setButtonLoading(false)
            // window.location.reload();
            fetchRider()
          }

          else {
            toast.error(res?.message)
            // window.location.reload();
            fetchRider()
          }
        }).catch((err) => {
          toast.error(err?.message)
        })
    } catch (error) {
      toast.error('Something went Wrong!')

      setButtonLoading(false)
    }
  }

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

          {dataArray.length > 0 && dataArray.filter(data => data?.approve).length > 0 ? (
            <tbody className="text-center mt-4">
              {dataArray?.filter(data => data?.approve).map((data, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b-2 border-slate-100 bg-white odd:bg-gray-100  w-[100%] "
                  >
                    <td className=" py-2">#{data?._id.slice(-5)}</td>
                    <td>{data?.fullname}</td>
                    <td>{data?.mobileno}</td>
                    <td>{moment(data?.timestamp).utc().format('DD/MM/YY')}</td>
                    <td>


                      <button disabled={buttonLoading} title={`Click Here to ${data?.status == 'online' ? 'Disable' : 'Enable'} Rider ${data?.fullname}`} onClick={() => {
                        handleUpdate(data?._id, data?.status)
                      }} className={`order px-2 py-1 shadow hover:shadow-md  rounded-md duration-150 ${data?.status == 'online' ? 'bg-red-500 text-white' : 'bg-green-600 text-white'}`}>
                        {
                          data?.status == 'online' ? 'Disable' : 'Enable'
                        }
                        {/* <div
							className={`w-12 h-6 rounded-full  border transition-color ${  data?.status == 'available' ? 'bg-green-500' : 'bg-red-500'}`}
							
						>
							<div
								className={`w-6   h-6 rounded-full bg-white border border-gray-300  transform transition-transform ${  data?.status == 'available' ? 'translate-x-full' : 'translate-x-0'
									}`}
							></div>
						</div> */}

                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <div className="absolute w-[100%]  mt-12  px-8  ">
              <div className="flex justify-around h-full items-center">

                {/* <div className="flex flex-col justify-center  items-center  gap-y-10"> */}
                <span className="font-semibold  text-3xl">No Available Rider Currently.</span>
                {/* </div> */}
              </div>
            </div>
          )}
        </table>
      </div>
    </>
  );
};

export default AvailableRiderTable;
