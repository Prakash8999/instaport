import React, { useState } from "react";
import thead from "../Data/TableheadingOrder";
import orderdata from "../Data/Orderdata";
import Modaltest from "../Modal/ModalOrder";

const OrderTable = () => {
const [modal, setmodal] = useState({show:false, datamodal:{}})

  return (
    <>
    {modal.show && <Modaltest datamodal= {modal.show && modal?.datamodal} setmodal= {setmodal}/>}
    <div className="relative flex justify-center items-center ">
      <div>
        <table className=" ">
          <thead>
            <tr className=" border-b-2 border-slate-400">
              {thead.map((head, index) => (
                <th key={index} className=" px-4 py-2 gap-2">
                  {head.tablehead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center mt-4">
            <tr className="border-b-2 border-slate-400">
              {orderdata.map((data, index) => (
                <td key={index} onClick={() =>{setmodal({show:true, datamodal:data})}} className="cursor-pointer px-4 py-2 gap-2 font-light">
                  {data.OrderId}
                  {data.CustomerName}
                  {data.CustomerNo}
                  {data.OrderType}
                  {data.PickuoCity}
                  {data.DropCity}
                  {data.Date}
                  {data.Time}
                  {data.PaymentType}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
                  </>
  );
};

export default OrderTable;
