import React from "react";
import LogoComp from "../components/LogoComp";
import UIimgComp from "../components/UIimgComp";
import Buttons from "../components/Buttons";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";
import InputComp from "../components/InputComp";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center bg-[#F1F1F1] w-[50%] h-screen gap-6">
        <div className="items-center">
          <LogoComp></LogoComp>
        </div>
        <div>
          <UIimgComp></UIimgComp>
        </div>
      </div>
      <div className="flex  flex-col w-[50%]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-center">Welcome,</h1>
          <h1 className="font-semibold">Please fill the details below</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-4 w-[28vw]">
            <Buttons
              className={
                "w-full  border-2 rounded-lg border-blue-400 hover:border-blue-500 hover:bg-blue-50 hover:shadow-lg hover:font-semibold flex p-2 gap-4	 items-center justify-center font-medium "
              }
              buttonText={"SignUp with Google"}
              buttonIcon={<FcGoogle style={{ fontSize: "1.5em" }} />}
            ></Buttons>
          </div>
          <div className="flex">
            <div className="flex items-center justify-center ">
              <hr class="w-36 h-[1px] mx-auto my-4 bg-gray-600 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
              <span className="mx-6">OR</span>
              <hr class="w-36 h-[1px] mx-auto my-4 bg-gray-600 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <InputComp
              label={"UserName Or Email:"}
              placeholder={"Enter your username or password"}
              className={"w-[34vw] "}
            ></InputComp>
            <InputComp
              label={"Password:"}
              placeholder={"Enter your Password"}
              className={"w-[34vw]"}
            ></InputComp>
            <Buttons
              className={
                "w-full mt-4 border-2 rounded-lg border-yellow-400 hover:border-yellow-500 hover:shadow-lg hover:font-semibold  bg-[#FFD12E] flex p-2 gap-4	 items-center justify-center font-medium "
              }
              buttonText={"Signup"}
              buttonIcon2={<FiArrowRight style={{ fontSize: "1.5em" }} />}
            ></Buttons>
            <div className=" flex justify-center items-center gap-4">
              <p>Already have account?</p>
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-700 hover:shadow-sm "
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
