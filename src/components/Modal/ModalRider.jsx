import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import riderdata from "../Data/Riderdata";
// import ModalInput from "../ModalInput";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";
import Buttons from "../Buttons";
import DownloadInvoice from "../DownloadInvoice";
import InputComp from "../InputComp";
import { toast } from "react-hot-toast";
import Select from "react-select";
import SelectOptionOtherRiders from "../SelectOptionOtherRiders";
import { CSSTransition } from "react-transition-group";

const ModalRider = ({ datamodal, setmodal, downloadPdfDocument, modal }) => {
  const [readOnly, setReadOnly] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckednotify, setIsCheckednotify] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [otherRiders, setOtherRiders] = useState(true);

  const handleTogglebag = () => {
    setIsChecked(!isChecked);
  };
  const handleTogglenotify = () => {
    setIsCheckednotify(!isCheckednotify);
  };

  useEffect(() => {
    setShowModal(true);
  }, [datamodal]);

  // Close the modal when `showModal` state changes
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setmodal({ show: false });
    }, 300); // Wait for the closing animation to complete (300ms)
  };

  return (
    <>
      <CSSTransition
        in={showModal}
        classNames="modal"
        timeout={300}
        unmountOnExit
      >
        <div
          aria-hidden="true"
          className={
            " h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] "
          }
        >
          <div
            className={`relative h-[95vh]  overflow-auto w-fit pb-5 bg-[#FFFDE6] rounded-lg `}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 font-bold text-lg text-red-600"
            >
              <AiOutlineClose />
            </button>

            <div className="flex">
              <div>
                <div id="testid">
                  <div className="w-full grid grid-cols-2 p-5 gap-x-3 gap-y-1">
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

                  <div className=" pl-8 flex flex-col gap-y-1 w-fit">
                    <div className="flex gap-x-1 items-center justify-between">
                      <p className="font-semibold">1. Pickup Address: </p>
                      <InputComp
                        readOnly={readOnly}
                        value={"Ulhasnagar 4 no"}
                        // label={"1. Pickup Address:"}
                      />
                    </div>
                    <div className="flex gap-x-1 items-center justify-between">
                      <p className="font-semibold">2. Drop Address: </p>
                      <InputComp
                        readOnly={readOnly}
                        value={"Ulhasnagar 5 no"}
                        // label={"2. Drop Address:"}
                      />
                    </div>
                    <div className="flex gap-x-1 items-center justify-between">
                      <p className="font-semibold">3. Pickup Address: </p>
                      <InputComp
                        readOnly={readOnly}
                        value={"Ulhasnagar 2 no"}
                        // label={"3. Pickup Address:"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 w-full px-5 pt-3 gap-x-3 gap-y-4">
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
                                  isCheckednotify
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
                  <div className="flex items-center gap-x-2 pl-5">
                    <p className="font-semibold">Shipping type - </p>
                    <p>{datamodal?.ShippingType}</p>
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
                    buttonText={!readOnly ? "Cancel" : "Edit Order"}
                    // {!readOnly ? className={'text-white border-yellow-300 self-center bg-gray-400 px-4 h-10 w-40 py-0.5 rounded-3xl'} : className={'text-white border-yellow-300 self-center bg-gray-400 px-4 h-10 w-40 py-0.5 rounded-3xl'}

                    // }
                    className={
                      "text-white border-yellow-300 self-center bg-gray-400  h-11 px-4 py-1 w-48 rounded-3xl"
                    }
                  />

                  <Buttons />

                  <DownloadInvoice
                    downloadFileName={datamodal.RiderId}
                    rootElementId={"testid"}
                  />
                  {/* <Buttons
              buttonText={"Assign this order to another Rider"}
              className={`text-white border-yellow-300 self-center bg-yellow-400 rounded-3xl w-fit px-6 py-3 ${
                readOnly ? "cursor-not-allowed bg-opacity-60 relative" : "cursor-pointer bg-opacity-100"
              } `}
              onclick={
                !readOnly
                  ? (() => {
                      setmodal({ show: false });
                    })
                  :(() => {
                    toast('Please Enable  the  Edit Order option first !',{duration:4000, position:'top-center', style:{backgroundColor:'black', width:'fit-content', height:'30px' ,textAlign:'center' ,color:'white', marginTop:'10px',fontWeight:'bold'}})
                    
                  })
              }
            ></Buttons>  */}
                </div>
              </div>
<div   className={`${
                  readOnly
                    ? "hidden duration-150"
                    : "  border-yellow-400 mr-4 duration-200 border-e "
                }`}
              >

</div>
              <div
                className={`${
                  readOnly
                    ? "hidden duration-150"
                    : "  pt-6   pr-4 duration-200  "
                }`}
              >
                <p className="font-semibold">
                  Assign this order yo other Rider
                </p>
                <div className="flex flex-col items-center">
                  <SelectOptionOtherRiders className={'w-[20vw] border-yellow-300 outline-none focus:border-yellow-400'}/>
                  <Buttons
                    buttonText={"Assign"}
                    onclick={() => {
                      toast.success("Assigned");
                    }}
                    className="text-white border-yellow-300 self-center bg-yellow-400 text-xl font-semibold h-11 px-4 py-1 w-48 rounded-3xl"
                  ></Buttons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ModalRider;
