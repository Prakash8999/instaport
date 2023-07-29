import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import ModalInput from "../ModalInput";
import Buttons from "../Buttons";
import InputComp from "../InputComp";
import DownloadInvoice from "../DownloadInvoice";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
const ModalOrder = ({ datamodal, setmodal }) => {
  const [readOnly, setReadOnly] = useState(true);
  const [formState, setFormstate] = useState(datamodal);
  const [isEditable, setisEditable] = useState(false);

  const [isBagChecked, setBagIsChecked] = useState(false);
  const [isCheckednotify, setIsCheckednotify] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios("https://instaport-api.vercel.app/order/update", {
        method: "PATCH",
        data: { ...formState },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          setisEditable(false);
          setFormstate(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = () => {
    setFormstate((prevData) => ({
      ...prevData,
    }));
    setisEditable(true);
  };
  const handleChange = (e) => {
    setFormstate((prevdata) => ({
      ...prevdata,
      [e.target.id]: e.target.value,
    }));
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
                
                value={datamodal?._id.slice(-5)}
                label={"Order No:"}
              />
              <InputComp
                disabled={!isEditable}

                value={datamodal?.payment_method}
                label={"Payment Type:"}
                onChange={handleChange}
              />
              <InputComp
                
                value={datamodal?.customer.slice(-5)}
                label={"Customer Name:"}
              />
              <InputComp
                
                value={datamodal?.phone_number}
                label={"Customer No:"}
                onChange={handleChange}
                disabled={!isEditable}
              />
              <InputComp
                
                value={
                  datamodal?.pickup?.Address +
                  ", " +
                  datamodal?.pickup?.District +
                  ", " +
                  datamodal?.pickup?.Code
                }
                label={"Pickup Address:"}
              />
              <InputComp

                value={
                  datamodal?.drop[0]?.Address +
                  ", " +
                  datamodal?.drop[0]?.District +
                  ", " +
                  datamodal?.drop[0]?.Code
                }
                label={"Drop Address:"}
              />
              <InputComp

                value={datamodal?.delivery_type}
                label={"Package Type:"}
                onChange={handleChange}
                disabled={!isEditable}
              />
              <InputComp
                
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
            </div>
            <div className="flex justify-between px-5">
              {/* <Buttons
                onClick={handleEditClick}
                buttonText={!readOnly ? "Cancel" : "Edit Order Details"}
                className={
                  "text-white border-yellow-300 self-center bg-gray-400 h-11 px-4 py-1 w-48 rounded-3xl"
                }
              /> */}

              {isEditable ? (
                <div className="">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className={
                      "text-white border-yellow-300 self-center bg-gray-400 h-11 px-4 py-1 w-48 rounded-3xl"
                    }
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="">
                  <button
                    type="button"
                    onClick={handleEditClick}
                    className={
                      "text-white border-yellow-300 self-center bg-gray-400 h-11 px-4 py-1 w-48 rounded-3xl"
                    }
                  >
                    Edit Order Details
                  </button>
                </div>
              )}
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
