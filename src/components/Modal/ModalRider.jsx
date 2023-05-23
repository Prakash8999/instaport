import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import riderdata from "../Data/Riderdata";
import ModalInput from "../ModalInput";
import Buttons from "../Buttons";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import DownloadInvoice from "../DownloadInvoice";
import InputComp from "../InputComp";

const ModalRider = ({ datamodal, setmodal, downloadPdfDocument }) => {
  const [readOnly, setReadOnly] = useState(true);

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
      <div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
        <div
          className="relative h-[70vh]  overflow-auto w-[45vw] pb-5 bg-[#FFFDE6] rounded-lg "
          
        >
          <button
            onClick={() => {
              setmodal({ show: false });
            }}
            className="absolute top-4 right-4 font-bold text-lg text-red-600"
            title="close"
          >
            <AiOutlineClose />
          </button>

          <div id="testid">
            
          
          <div className="w-full grid grid-cols-2 p-5 gap-x-3 gap-y-4">
            <InputComp
              readOnly={readOnly}
              value={datamodal?.OrderNo}
              label={"OrderNo:"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.RiderName}
              label={"Rider Name"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.CustomerName}
              label={"Customer Name"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.RiderNo}
              label={"Rider No."}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.CustomerNo}
              label={"Customer No."}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.RiderVehicleNo}
              label={"Rider Vehicle No"}
            />
          </div>

          <div className="pt-3 pl-8 flex flex-col gap-y-3">
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

          <div className="grid grid-cols-2 w-full p-5 gap-x-3 gap-y-4">
            <div>
              <InputComp
                readOnly={readOnly}
                value={datamodal?.PackageType}
                label={"Package Type"}
              />
              <InputComp
                readOnly={true}
                value={datamodal?.PackageType}
                label={"Payment Type"}
              />
              <InputComp
                readOnly={readOnly}
                value={datamodal?.ParcelValue}
                label={"Parcel Value"}
              />
            </div>
            <div className="pt-7 ">
              <div className="flex flex-col items-center gap-y-8 rounded-lg border-2 h-[94%] bg-white px-5 pt-3 pb-6 shadow-md outline-none border-yellow-300 duration-300  focus:border-yellow-400 focus:text-black ">
                <p className="font-semibold  ">Additional Services</p>
                <div className="flex gap-x-2 items-center justify-between w-full ">
                  <p>Prefer Currier with Delivery Bag</p>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={isChecked}
                      onChange={handleTogglebag}
                      id="isChecked"
                    />
                    <label
                      htmlFor="isChecked"
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
                      id="isCheckednotify"
                    />
                    <label
                      htmlFor="isCheckednotify"
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
          </div>
          <div className="flex items-center gap-x-2 pl-5">
            <p className="font-semibold">Shipping type - </p>
            <p>Scooter (High Capacity)</p>
            {/* <InputComp
                readOnly={readOnly}
                value={"Scooter High"}
                label={"Shipping type"}
              /> */}
          </div>
          </div>
          <div className="flex justify-center gap-x-14 pt-6">
            <Buttons
              onclick={() => {
                setReadOnly(!readOnly);
              }}
              buttonText={!readOnly ? 'Cancel' : "Edit Order"}
              
            // {!readOnly ? className={'text-white border-yellow-300 self-center bg-gray-400 px-4 h-10 w-40 py-0.5 rounded-3xl'} : className={'text-white border-yellow-300 self-center bg-gray-400 px-4 h-10 w-40 py-0.5 rounded-3xl'}

            // }  
            className={'text-white border-yellow-300 self-center bg-gray-400 px-4 h-10 w-40 py-0.5 rounded-3xl'}
            />

            
            <Buttons />

            <DownloadInvoice
              downloadFileName={datamodal.RiderId}
              rootElementId={"testid"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRider;
