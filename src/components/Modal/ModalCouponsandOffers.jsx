import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import Button from "../Buttons";
// import Search from "../../components/Search";
// import ModalInput from "../ModalInput";
import Buttons from "../Buttons";
import "./ModalAnimation.css";
import { CSSTransition } from "react-transition-group";
import InputComp from "../InputComp";
import axios from "axios";
import { server } from "../..";
import toast from "react-hot-toast";

const CouponsandOffers = ({ setmodal, datamodal }) => {
  const [showModal, setShowModal] = useState(false);

  const [couponData, setCouponData] = useState({
    // id: "",
    couponCode: "",
    discount: "",
    maxAmount: "",
    // disabled: "",
  });

  const handleChange = (e) => {
    setCouponData((prevdata) => ({
      ...prevdata,
      [e.target.id]: e.target.value,
    }));
  };

  // Open the modal when `datamodal` prop changes
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

  const token = localStorage.getItem("token");

  const createCoupon = async () => {
    console.log("COUPON DATA :: ", couponData);
    if (token) {
      try {
        axios(`${server}/coupons/create`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: {
            code: couponData.couponCode,
            // disabled: couponData.disabled,
            percentOff: couponData.discount,
            maxAmount: couponData.maxAmount,
          },
        })
          .then((res) => {
            if (res) {
              toast.success(res?.data?.message);
              closeModal();
            } else {
              toast.error(res?.data?.error);
            }
            console.log(res);
          })
          .catch((err) => {
            toast.error(
              "Something went wrong  :: createCoupon components/ModalCouponsandOffers.jsx",
              err
            );
          });
      } catch (error) {
        console.log(
          "ERROR :: createCoupon components/ModalCouponsandOffers.jsx",
          error
        );
      }
    } else {
      console.log(
        "Invalid token :: createCoupon components/ModalCouponsandOffers.jsx ",
        token
      );
    }
  };

  return (
    <>
      <CSSTransition
        in={showModal}
        classNames="modal"
        timeout={300}
        unmountOnExit
      >
        <div className="h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed left-0 top-0 z-[100]">
          <div className="relative h-[60vh] overflow-hidden w-[45vw] bg-[#FFFDE6]  rounded-lg flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 font-bold text-xl text-red-600 m-4"
            >
              <AiOutlineClose size={25} />
            </button>

            <div className="pl-5 pt-6 pr-12 ">
              <p className="font-semibold text-2xl pb-5">Add a Coupon</p>

              <div className="flex flex-col gap-y-7">
                <div className="flex items-center gap-x-3 justify-between">
                  <p>Coupon code - </p>

                  <InputComp
                    placeholder="Enter the Coupon Code"
                    value={couponData.couponCode}
                    onChange={handleChange}
                    id="couponCode"
                    className="w-80 h-12 rounded-lg outline-none border-2 border-yellow-400 border-opacity-80 pl-3"
                  />
                </div>
                <div className="flex items-center gap-x-3 justify-between">
                  <p>Discount % - </p>

                  <InputComp
                    placeholder="Enter the Discount"
                    value={couponData.discount}
                    onChange={handleChange}
                    id="discount"
                    className="w-80 h-12 rounded-lg outline-none border-2 border-yellow-400 border-opacity-80 pl-3"
                  />
                </div>
                <div className="flex items-center gap-x-3 justify-between">
                  <p>Max Amount - </p>

                  <InputComp
                    placeholder="Enter the Maximum Amount"
                    value={couponData.maxAmount}
                    onChange={handleChange}
                    id="maxAmount"
                    className="w-80 h-12 rounded-lg outline-none border-2 border-yellow-400 border-opacity-80 pl-3"
                  />
                </div>
              </div>

              <div className="flex pt-8 w-[100%] justify-center">
                <Buttons
                  onclick={createCoupon}
                  buttonText={"Add Coupon"}
                  className={"bg-yellow-400 text-white rounded-2xl px-6 py-2"}
                />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default CouponsandOffers;
