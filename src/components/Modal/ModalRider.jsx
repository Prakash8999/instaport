import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import riderdata from "../Data/Riderdata";
import ModalInput from "../ModalInput";
import Buttons from "../Buttons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import DownloadInvoice from "../DownloadInvoice";


const ModalRider = ({ datamodal, setmodal }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckednotify, setIsCheckednotify] = useState(false);

  const handleTogglebag = () => {
    setIsChecked(!isChecked);
  };
  const handleTogglenotify = () => {
    setIsCheckednotify(!isCheckednotify);
  };

//   const downloadInvoice = ( ) =>{
// // window.print()


//   const input = document.getElementById("testid");
//   html2canvas(input)
//       .then((canvas) => {
//           const imgData = canvas.toDataURL('image/png');
//           const pdf = new jsPDF();
//           pdf.addImage(imgData, 'JPEG', 0, 0);
//           pdf.save("odf".pdf);
//       })

//   }
  return (
    <>
    <DownloadInvoice
    downloadFileName={"custom"}
    rootElementId={"testid"}
  
    />

      <div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
        <div className="relative h-[70vh]  overflow-hidden w-[45vw] pb-5 bg-[#FFFDE6] rounded-lg ">
          <button
            onClick={() => {
              setmodal({ show: false });
            }}
            className="absolute top-4 right-4 font-bold text-lg text-red-600"
            title="close"
          >
            <AiOutlineClose />
          </button>
          <div className=" pt-4 pl-4">

        
          <div className="flex justify-center items-center  " id="testid">
            <div className="grid grid-cols-2 ">
              <div className="flex  items-center">
                <p className="font-semibold">Order No.- </p>
                <div>
                  <ModalInput value={datamodal?.RiderId} className={"w-fit"} />
                </div>
              </div>

              <div className="flex  items-center">
                <p className="font-semibold">Rider Name- </p>
                <div>
                  <ModalInput
                    value={datamodal?.RiderName}
                    className={"w-fit"}
                  />
                </div>
              </div>

              <div className="flex  items-center">
                <p className="font-semibold">Customer Name- </p>
                <div>
                  <ModalInput
                    value={datamodal?.CustomerName}
                    className={"w-fit"}
                  />
                </div>
              </div>

              <div className="flex  items-center">
                <p className="font-semibold">Rider No.- </p>
                <div>
                  <ModalInput value={datamodal?.RiderNo} className={"w-fit"} />
                </div>
              </div>

              <div className="flex  items-center">
                <p className="font-semibold">Customer No.- </p>
                <div>
                  <ModalInput
                    value={datamodal?.CustomerNo}
                    className={"w-fit"}
                  />
                </div>
              </div>

              <div className="flex  items-center">
                <p className="font-semibold">Rider Vehicle No.- </p>
                <div>
                  <ModalInput
                    value={datamodal?.RiderVehicleNo}
                    className={"w-fit"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 pl-4 flex flex-col gap-y-3">
            <div className="flex gap-x-1 items-center">
              <p className="font-semibold">1. Pickup Address: </p>
              <p>{"Ulharnagar 4 vtc ground"}</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="font-semibold">2. Drop Address: </p>
              <p>{"Ulharnagar 4 vtc ground"}</p>
            </div>
            <div className="flex gap-x-1 items-center">
              <p className="font-semibold">3. Pickup Address: </p>
              <p>{"Ulharnagar 4 vtc ground"}</p>
            </div>
          </div>
          <div className="flex  pt-3">
            <div>
              <div className="flex gap-x-1 items-center">
                <p className="font-semibold">Package Type -</p>
                <div>
                  <ModalInput value={"Food, Clothes"} />
                </div>
              </div>

              <div className="flex gap-x-1 items-center">
                <p className="font-semibold">Payment Type -</p>
                <div>
                  <ModalInput value={datamodal?.PaymentType} />
                </div>
              </div>

              <div className="flex gap-x-1 items-center">
                <p className="font-semibold">Parcel Value -</p>
                <div>
                  <ModalInput value={datamodal?.ParcelValue} />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="font-semibold">Additional Services</p>
              <div className="flex gap-x-2 items-center justify-between w-full ">
                <p>Prefer Currier with Delivery Bag</p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isChecked}
                    onChange={handleTogglebag}
                    id="left-to-right-toggle"
                    
                  />
                  <label
                    htmlFor="left-to-right-toggle"
                    className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${
                      isChecked ? "bg-green-400" : "bg-gray-400"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                        isChecked ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></span>
                  </label>
                </div>
              </div>

              <div className="flex gap-x-2 items-center justify-between w-full ">
                <p>Notify recipients by sms</p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isCheckednotify}
                    onChange={handleTogglenotify}
                    id="left-to-right-toggle"
                  />
                  <label
                    htmlFor="left-to-right-toggle"
                    className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${
                      isCheckednotify ? "bg-green-400" : "bg-gray-400"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                        isCheckednotify ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></span>
                  </label>
                </div>
              </div>



            </div>
          </div>

<div className="pt-3 flex gap-x-1 items-center">
  <p className="font-semibold">Shipping Type- </p>
  <p>{"Scooter (High Capacity)"}</p>
</div>

<div className="flex justify-center gap-x-14 pt-6">
            <Buttons
              buttonText={"Edit Order "}
              className={
                "text-white border-yellow-300 self-center bg-gray-400 w-40 px-4 h-11 py-0.5 rounded-3xl"
              }
            />
            <Buttons
              buttonText={"Download Invoice"}
              onclick={DownloadInvoice}
              className={
                "text-white border-yellow-300 self-center bg-yellow-400 w-40 h-11 py-0.5 px-4 rounded-3xl"
              }
            />
        
          </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRider;
