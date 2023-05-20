import React from "react";
import LogoComp from "./LogoComp";
import { RiDashboardFill } from "react-icons/ri";
import { BsBoxFill } from "react-icons/bs";
import { RiEBike2Fill } from "react-icons/ri";
import { MdPriceChange } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { RiCoupon2Fill } from "react-icons/ri";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";

const SideNav = ({ className }) => {
  return (
    <>
      <div
        className={`w-[20vw] h-[95vh] pt-8  top-5 left-4 absolute bg-white  flex flex-col items-center justify-start  shadow-lg rounded-lg  ${className}`}
      >
        <div className="flex flex-col gap-4">
          <LogoComp className={"w-[15vw]"} />
          <Profile />
          <NavLink
            to="/"
            className={`rounded-lg border-2 text-base font-semibold shadow hover:drop-shadow-xl  duration-300   border-yellow-300 p-2.5   lg:w-[15vw]  focus:outline-yellow-400 -black flex  items-center gap-4 `}
          >
            <RiDashboardFill style={{ fontSize: "1.2em" }} />
            Dashboard
          </NavLink>
          <NavLink
            to="/orders"
            className={`rounded-lg border-2 text-base font-semibold  shadow-md border-yellow-300 p-2.5   lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center gap-4 `}
          >
            <BsBoxFill style={{ fontSize: "1.2em" }} />
            Orders
          </NavLink>
          <NavLink
            to="/riders"
            className={`rounded-lg border-2 text-base font-semibold   shadow-md border-yellow-300 p-2.5   lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center gap-4 `}
          >
            <RiEBike2Fill style={{ fontSize: "1.2em" }} />
            Riders
          </NavLink>
          <NavLink
            to="/pricemanipulation"
            className={`rounded-lg border-2 text-base font-semibold   shadow-md border-yellow-300 p-2.5   lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center gap-4 `}
          >
            <MdPriceChange style={{ fontSize: "1.2em" }} />
            Price Manipulation
          </NavLink>
          <NavLink
            to="/approvearider"
            className={`rounded-lg border-2 text-base font-semibold   shadow-md border-yellow-300 p-2.5   lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center gap-4 `}
          >
            <MdFileDownloadDone style={{ fontSize: "1.2em" }} />
            Approve A Rider
          </NavLink>
          <NavLink
            to="/transaction"
            className={`rounded-lg border-2 text-base font-semibold  shadow-md border-yellow-300 p-2.5   lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center gap-4 `}
          >
            <FaWallet style={{ fontSize: "1.2em" }} />
            Transaction
          </NavLink>
          <NavLink
            to="/couponsandoffer"
            className={`rounded-lg border-2 text-base font-semibold   shadow-md border-yellow-300 p-2.5   lg:w-[15vw]  focus:outline-yellow-400 focus:text-black flex  items-center gap-4 `}
          >
            <RiCoupon2Fill style={{ fontSize: "1.2em" }} />
            Coupons And Offer
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideNav;
