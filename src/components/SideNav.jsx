import React from "react";
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

const SideNav = ({ className, classNameRider, classNameApprovedrider }) => {
  return (
    <>
      <div
        className={`w-[20vw] h-[95vh] pt-5  top-4 left-4 absolute bg-white  flex flex-col items-center justify-start  shadow-lg rounded-lg  ${className}`}
      >
        <div className="flex flex-col gap-y-2 ">
          <LogoComp className={"w-[15vw]"} />
          <Profile />
          <NavLink
            to="/dashboard"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2   lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center`}
          >
            {/* <RiDashboardFill style={{ fontSize: "1.2em" }} /> */}
            Dashboard
          </NavLink>
          <NavLink
            to="/orders"
            className={`outline-none rounded-lg border-2 text-base font-semibold shadow hover:shadow-lg  duration-300   border-yellow-300 p-2   lg:w-[15vw]  focus:outline-yellow-400 text-black flex  items-center justify-center`}
          >
            {/* <BsBoxFill style={{ fontSize: "1.2em" }} /> */}
            Orders
          </NavLink>
          <NavLink
            to="/riders/available"
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
            to="/approve-rider/pending"
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
      </div>
    </>
  );
};

export default SideNav;
