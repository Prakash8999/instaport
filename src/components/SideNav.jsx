import React, { useState } from "react";
import LogoComp from "./LogoComp";
// import { RiDashboardFill } from "react-icons/ri";
// import { BsBoxFill } from "react-icons/bs";
// import { RiEBike2Fill } from "react-icons/ri";
// import { MdPriceChange } from "react-icons/md";
// import { MdFileDownloadDone } from "react-icons/md";
// import { FaWallet } from "react-icons/fa";
// import { RiCoupon2Fill } from "react-icons/ri";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";
import LogoutModal from "./Modal/LogoutModal";

const SideNav = ({ className, classNameRider, classNameApprovedrider }) => {
  const [modal, setModal] = useState({ show: false })
  return (
    <>

      {
        modal?.show && (
          <LogoutModal datamodal={modal.show}
            setmodal={setModal}
          />

        )
      }
      <div
        className={`mt-5 h-[95vh] py-5   bg-white   flex flex-col items-center justify-between  shadow-lg rounded-2xl  ${className}`}
      >
        <div className="flex flex-col gap-y-2 ">
          <LogoComp className={"w-[15vw]"} />
          <Profile />
          <NavLink
            to="/dashboard"
            className={`outline-none rounded-lg border-2 text-base  font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2   lg:w-[15vw]  focus:outline-yellow-400 text-black  flex  items-center justify-center`}
          >
            {/* <RiDashboardFill style={{ fontSize: "1.2em" }} /> */}
            Dashboard
          </NavLink>
          <NavLink
            to="/orders?query=processing"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2   lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center`}
          >
            {/* <BsBoxFill style={{ fontSize: "1.2em" }} /> */}
            Orders
          </NavLink>
          <NavLink
            to="/riders?query=active"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2  lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center ${classNameRider}`}
          >
            {/* <RiEBike2Fill style={{ fontSize: "1.2em" }} /> */}
            Riders
          </NavLink>
          <NavLink
            to="/price-manipulation"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2   lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center`}
          >
            {/* <MdPriceChange style={{ fontSize: "1.2em" }} /> */}
            Price Manipulation
          </NavLink>
          <NavLink
            to="/pending"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2  lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center ${classNameApprovedrider}`}
          >
            {/* <MdFileDownloadDone style={{ fontSize: "1.2em" }} /> */}
            Approve A Rider
          </NavLink>
          <NavLink
            to="/transaction"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2  lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center`}
          >
            {/* <FaWallet style={{ fontSize: "1.2em" }} /> */}
            Transaction
          </NavLink>
          <NavLink
            to="/coupons-and-offers"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2   lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center`}
          >
            {/* <RiCoupon2Fill style={{ fontSize: "1.2em" }} /> */}
            Coupons And Offer
          </NavLink>
          <NavLink
            to="/add-city"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2   lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center`}
          >
            {/* <RiCoupon2Fill style={{ fontSize: "1.2em" }} /> */}
            City
          </NavLink>
        </div>

        <button

          onClick={() => {
            setModal({ show: true });
          }}

          className={` outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2   lg:w-[15vw]   text-black flex  items-center justify-center`}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default SideNav;
