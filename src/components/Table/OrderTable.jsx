import React, { useState } from "react";
import thead from "../Data/TableheadingOrder";
// import orderdata from "../Data/Orderdata";
import Modaltest from "../Modal/ModalOrder";

const OrderTable = ({ dataArray }) => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });

  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const filteredData = data.filter(
  //   (data) =>
  //     data.CustomerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     data.OrderType.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     data.Date.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     data.CustomerNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     data.OrderId.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  return (
    <>
      {modal.show && (
        <Modaltest
          datamodal={modal.show && modal?.datamodal}
          setmodal={setmodal}
        />
      )}

      <div className=" flex justify-center items-start w-full h-[80vh] overflow-y-scroll ">
        <div className="w-full">
          <table className="w-[100%]">
            <thead className=" sticky top-0 z-50 bg-white">
              <tr className=" border-b-2 border-slate-200">
                {thead.map((head, index) => (
                  <th key={index} className=" px-4 py-2 gap-2">
                    {head.tablehead}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center w-full">
              {dataArray.map((data, index) => {
                return (
                  <tr
                    key={index}
                    onClick={() => {
                      setmodal({ show: true, datamodal: data });
                    }}
                    className="border-b-2 border-slate-100 bg-white odd:bg-gray-100"
                  >
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.OrderId}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.CustomerName}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.CustomerNo}
                    </td>
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.PackageType}
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
                    <td className="cursor-pointer px-4 py-2 gap-2 font-light">
                      {data?.PaymentType}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderTable;
