import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import ModalInput from "../ModalInput";
import Buttons from "../Buttons";
import InputComp from "../InputComp";
import DownloadInvoice from "../DownloadInvoice";
import { CSSTransition } from "react-transition-group";
const ModalOrder = ({ datamodal, setmodal }) => {
  const [readOnly, setReadOnly] = useState(true);
  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("SamplePDF.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "SamplePDF.pdf";
  //       alink.click();
  //     });
  //   });
  // };
  const [isBagChecked, setBagIsChecked] = useState(false);
  const [isCheckednotify, setIsCheckednotify] = useState(false);

  const [showModal, setShowModal] = useState(false);

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

      <div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
        <div className="p-5 relative h-[80vh]  overflow-hidden w-[60vw] bg-[#FFFDE6] rounded-lg flex  flex-col   md:gap-y-1  gap-y">
          <button
            onClick={() => {
              closeModal({ show: false });
            }}
            className="absolute top-4 right-4 font-bold text-lg text-red-600"
            title="close"
          >
            <AiOutlineClose />
          </button>
          <div
            className="w-full grid grid-cols-2 gap-y-2 gap-x-6 pt-2 p-5"
            id="testid"
          >
            <InputComp
              readOnly={readOnly}
              value={datamodal?.OrderId}
              label={"Order No:"}
            />
            <InputComp
              readOnly={true}
              value={datamodal?.PaymentType}
              label={"Payment Type:"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.CustomerName}
              label={"Customer Name:"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.CustomerNo}
              label={"Customer No:"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.PickupCity}
              label={"Pickup Address:"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.DropCity}
              label={"Drop Address:"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.PackageType}
              label={"Package Type:"}
            />
            <InputComp
              readOnly={readOnly}
              value={datamodal?.ParcelValue}
              label={"Package Value:"}
            />

            {/* /// */}
            <div className="flex">
              <div className="flex flex-col gap-y-2">
                <p className="font-semibold">Additional Services</p>
                <div className="flex gap-x-2 items-center justify-between w-full ">
                  <p>Prefer Currier with Delivery Bag</p>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={isBagChecked}
                      onChange={(e) => {
                        setBagIsChecked(e.target.checked);
                      }}
                      id="bag"
                    />
                    <label
                      htmlFor="bag"
                      className={`flex items-center  w-10 h-fit p-0.5 bg-gray-400 rounded-full cursor-pointer transition-colors ${
                        isBagChecked ? "bg-green-400" : "bg-gray-400"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                          isBagChecked ? "translate-x-5" : "translate-x-0"
                        }`}
                      ></span>
                    </label>
                  </div>
                </div>
                <div>
                  <div className="flex gap-x-2 items-center justify-between w-full ">
                    <p>Notify recipients by sms</p>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isCheckednotify}
                        onChange={(e) => {
                          setIsCheckednotify(e.target.checked);
                        }}
                        id="notify"
                      />
                      <label
                        htmlFor="notify"
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
          </div>
          <div className="flex justify-between px-5">
            <Buttons
              onclick={() => {
                setReadOnly(!readOnly);
              }}
              buttonText={!readOnly ? "Cancel" : "Edit Order Details"}
              className={
                "text-white border-yellow-300 self-center bg-gray-400 h-11 px-4 py-1 w-48 rounded-3xl"
              }
            />
            <DownloadInvoice
              downloadFileName={datamodal?.OrderId}
              rootElementId={"testid"}
            />
            <Buttons
              buttonText={"Cancel Order"}
              className={
                "text-white border-yellow-300 self-center bg-red-500 h-11 px-4 py-1 w-48 rounded-3xl"
              }
            />
          </div>
        </div>
      </div>
      </CSSTransition>
    </>
  );
};

export default ModalOrder;
