import React, { useState } from "react";
import LogoComp from "../components/LogoComp";
import UIimgComp from "../components/UIimgComp";
import Buttons from "../components/Buttons";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";
import InputComp from "../components/InputComp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
    confirmPassword: ""
  };
  const [formState, setformState] = useState(initialState);
  const stateChange = (e) => {
    e.preventDefault();
    setformState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  const handleSignup = () => {

    try {
      axios(
        "https://instaport-api.vercel.app/admin/signup",
        {
          method: "POST",
          data: formState,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      ).then((res) => {

        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }

  };

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


          <div className="flex flex-col gap-3 mt-4">
            <InputComp
              label={"Username Or Email:"}
              onChange={stateChange}
              id={"username"}
              value={formState.username}
              placeholder={"Enter your username or password"}
              className={"w-[34vw] "}
            ></InputComp>
            <InputComp
              label={"Password:"}
              onChange={stateChange}
              id={"password"}
              value={formState.password}
              placeholder={"Enter your Password"}
              className={"w-[34vw]"}
            ></InputComp>

            <InputComp
              label={"Comfirm Password:"}
              onChange={stateChange}
              id={"password"}
              value={formState.confirmPassword}
              placeholder={"Confirm your Password"}
              className={"w-[34vw]"}
            ></InputComp>
            <Buttons
              onclick={handleSignup}
              className={
                "w-full mt-4 border-2 rounded-lg border-yellow-400 hover:border-yellow-500 hover:shadow-lg hover:font-semibold  bg-[#FFD12E] flex p-2 gap-4	 items-center justify-center font-medium "
              }
              buttonText={"Signup"}
              buttonIcon2={<FiArrowRight style={{ fontSize: "1.5em" }} />}
            ></Buttons>
            <div className=" flex justify-center items-center gap-4">
              <p>Already have account?</p>
              <Link
                to="/"
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
