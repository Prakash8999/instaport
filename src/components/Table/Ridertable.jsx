import React, { useState } from "react";
import thead from "../Data/Tableheadingrider";
import orderdata from "../Data/Riderdata";
import Modaltest from "../Modal/ModalOrder";

const OrderTable = () => {
const [modal, setmodal] = useState({show:false, datamodal:{}})

  return (
    <>
    {modal.show && <Modaltest datamodal= {modal.show && modal?.datamodal} setmodal= {setmodal}/>}
    <div className="relative  ">
     
        <table className="flex flex-col ">
          <thead>
            <tr className=" border-b-2 border-slate-400 flex gap-x-36">
              {thead.map((head, index) => (
                <th key={index} className=" px-4 py-2 w-fit ">
                  {head.tablehead}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-center ">
            <tr className="border-b-2 border-slate-400 flex gap-x-40 items-center justify-center">
              {orderdata.map((data, index) => (
                <td key={index} onClick={() =>{setmodal({show:true, datamodal:data})}} className="cursor-pointer px-3 py-2  font-light">
                  {data.RiderId}
                  {data.RiderName}
                  {data.RiderNo}
                  {data.Date}
                  {data.Time}
            
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    
                  </>
  );
};

export default OrderTable;
