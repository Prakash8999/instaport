import React, { useState } from "react";
import couponsTableHead from "../Data/CouponsHeader";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import ModalCouponandOffers from "../Modal/ModalCouponsandOffers";
import datanotfound from "../../images/datanotfound (2).svg";
import moment from "moment";
import { server } from "../..";
import axios from "axios";
import toast from "react-hot-toast";
import { UseCouponsContext } from "../../context/Coupons";

const CouponsTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });
  const [loading, setLoading] = useState(false)
  const { fetchCoupons } = UseCouponsContext() || {}

  const handleUpdate = (id, status) => {
    setLoading(true)
    try {
      axios(`${server}/coupons/${id}`, {
        method: "PATCH",
        data: {
          disabled: !status
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,

        },
      }).then((res) => {
        toast.success(res?.data?.message)
        fetchCoupons()
        setLoading(false)
      }).catch((err) => {
        toast.error(err?.message)
        setLoading(false)
      })
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }
  return (
    <>
      {modal.show && (
        <ModalCouponandOffers
          datamodal={modal.show && modal.datamodal}
          setmodal={setmodal}
        />
      )}
      <div>
        <div className="relative flex justify-center items-center w-full ">
          <div className="w-full">
            <table className="w-[100%] ">
              <thead>
                <tr className=" border-b-2 border-slate-200">
                  {couponsTableHead.map((head, index) => (
                    <th key={index} className=" px-4 py-2 gap-2 ">
                      {head.tablehead}
                    </th>
                  ))}
                </tr>
              </thead>
              {dataArray.length > 0 ? (
                <tbody className="text-center mt-4">
                  {dataArray.map((data, index) => {
                    return (
                      <tr
                        key={index}
                        className="border-b-2 border-slate-100 bg-white odd:bg-gray-50"
                      >
                        <td className=" px-4 py-2 gap-2 font-light">
                          {data?.code}
                        </td>
                        <td className=" px-4 py-2 gap-2 font-medium  ">
                          {data?.percentOff}%
                        </td>
                        <td className="px-4 py-2 gap-2 font-light">
                          {data?.maxAmount}
                        </td>
                        <td className=" px-4 py-2 gap-2 font-light">
                          {moment(data?.timestamp).utc().format('DD/MM/YY')}
                        </td>
                        <td  className=" px-2 py-2 gap-2 flex justify-center font-light ">
                          {/* 
                        <button
                            disabled={loading}
                            onClick={() => {
                              handleUpdate(data?._id, data?.disabled);
                            }}
                            className={`${
                              data?.disabled
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-green-400 hover:bg-green-500"
                            } text-white font-bold py-1 px-5 rounded-full`}
                          >
                            {data?.disabled ? "Enable" : "Disable"}
                          </button> */}
                          
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={data?.disabled}
                              disabled={loading}
                              onChange={() => handleUpdate(data?._id, data?.disabled)}
                              id={`update-${index}`}
                            />
                            
                          
                            <label 
                        htmlFor={`update-${index}`}
                        className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full ${loading ? 'cursor-default' : 'cursor-pointer'} transition-colors ${data?.disabled ? "bg-green-400" : "bg-gray-400"
                          }`}
                      >
                        <span 
                          className={`w-4 h-4 bg-white rounded-full shadow-md transform ${loading ? 'cursor-default' : 'cursor-pointer'} transition-transform ${data?.disabled ? "translate-x-5" : "translate-x-0"
                            }`}
                        ></span>
                      </label>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <div className="absolute w-[100%] mt-12  bg-gray-100 px-8  ">
                  <div className="flex justify-around items-center">
                    <div className="w-[40%]">
                      <img src={datanotfound} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center  gap-y-10">
                      <span className="font-mono   text-5xl">Oop's Data</span>
                      <span className="font-mono   text-5xl">Not Found </span>
                    </div>
                  </div>
                </div>
              )}
            </table>
          </div>
        </div>

        <button
          onClick={() => {
            setmodal({ show: true });
          }}
          className="absolute right-6 text-5xl p-2 bottom-12 text-white bg-yellow-400 rounded-full"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </>
  );
};

export default CouponsTable;



// <td className="cursor-pointer px-4 py-2 gap-2 font-light">
// {data?.Status}
// </td>