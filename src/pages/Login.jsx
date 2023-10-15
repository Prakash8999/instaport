import React, { useState } from "react";
import LogoComp from "../components/LogoComp";
import UIimgComp from "../components/UIimgComp";
import Buttons from "../components/Buttons";
import { FcGoogle } from "react-icons/fc";
import { FiArrowRight } from "react-icons/fi";
import InputComp from "../components/InputComp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from '../components/Spinner'
const Login = () => {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
  };
  const [loading, setLoading] =useState(false)
  const [formState, setformState] = useState(initialState);
  const stateChange = (e) => {
    e.preventDefault();
    setformState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = () => {
    setLoading(true)
    console.log(formState);
    try {
      axios(
        "https://instaport-api.vercel.app/admin/signin",
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

        console.log(res.data);
        console.log(res.data.token);
        if (!res?.data?.error) {
          localStorage.setItem("token", `Bearer ${res?.data?.token}`);
          navigate("/dashboard");
          
        }
        setLoading(false)
      });
    } catch (error) {
      console.log(error);
      setLoading(false)
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
          <h1 className="font-semibold">Please login to your account</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="p-4 w-[28vw]">
            <Buttons
              className={
                "w-full  border-2 rounded-lg border-blue-400 hover:bg-blue-50 hover:border-blue-500 hover:shadow-lg   flex p-2 gap-4	 items-center justify-center font-medium hover:font-semibold "
              }
              buttonText={"Login with Google"}
              buttonIcon={<FcGoogle style={{ fontSize: "1.5em" }} />}
            ></Buttons>
          </div>
          <div className="flex">
            <div className="flex items-center justify-center ">
              <hr className="w-36 h-[1px] mx-auto my-4 bg-gray-600 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
              <span className="mx-6">OR</span>
              <hr className="w-36 h-[1px] mx-auto my-4 bg-gray-600 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <InputComp
              value={formState.username}
              onChange={stateChange}
              id={"username"}
              label={"UserName Or Email:"}
              placeholder={"Enter your username or password"}
              className={"w-[34vw] "}
            ></InputComp>
            <InputComp
              value={formState.password}
              onChange={stateChange}
              id={"password"}
              label={"Password:"}
              placeholder={"Enter your Password"}
              className={"w-[34vw]"}
            ></InputComp>
            <button onClick={handleLogin} className={
              "w-full mt-4 border-2 rounded-lg border-yellow-400  hover:border-yellow-500 hover:shadow-lg hover:font-semibold bg-[#FFD12E] flex p-2 gap-2	 items-center justify-center font-medium "
            }>
              {
                loading ? <Spinner/> : <div className="flex items-center gap-x-2"><p>Login</p>
                <FiArrowRight style={{ fontSize: "1.5em" }} /></div>
              }

            </button>

            {/* <Buttons
              
            
              buttonText={"Login"}
              // buttonIcon2={}
            ></Buttons> */}
            <div className=" flex justify-center items-center gap-4">
              <p>Don't have account?</p>
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-700 hover:shadow-sm"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
