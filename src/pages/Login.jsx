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
import toast from "react-hot-toast";
import { server } from "..";


const Login = () => {
  const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
  };
  const [loading, setLoading] = useState(false)
  const [formState, setformState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false)
  const stateChange = (e) => {
    e.preventDefault();
    setformState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      
      axios(
        `${server}/admin/signin`,
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

        if (!res?.data?.error) {
          localStorage.setItem("token", `${res?.data?.token}`);
          navigate("/dashboard");
          toast.success(res?.data?.message)
        }

        else{
          toast.error(res?.data?.message)
          setLoading(false)
        }
      }).catch((err) => {
        setLoading(false)
        toast.error(err?.message)
      })
    } catch (error) {
      toast.error(error?.message)
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

          <div className="flex">

          </div>
          <form className="flex flex-col gap-3 mt-4" onSubmit={handleLogin}>
            <InputComp
              required={true}
              value={formState.username}
              onChange={stateChange}
              id={"username"}
              label={"Username Or Email:"}
              placeholder={"Enter your Email or Username  "}
              className={"w-[34vw] "}
            ></InputComp>
            <InputComp
              type={showPassword ? "text" : "password"}
              value={formState.password}
              onChange={stateChange}
              required={true}
              id={"password"}
              label={"Password:"}
              placeholder={"Enter your Password"}
              className={"w-[34vw]"}
            ></InputComp>
            <div onClick={() => {
              setShowPassword(!showPassword)
            }} className="flex gap-x-2 items-center cursor-pointer  w-fit">
              <input type="checkbox" className="w-4 h-4 cursor-pointer" checked={showPassword} />

              <label htmlFor="" className="cursor-pointer"> Show Password</label>

            </div>
            <button type="submit" className={
              "w-full mt-4 border-2 rounded-lg border-yellow-400  hover:border-yellow-500 hover:shadow-lg hover:font-semibold bg-[#FFD12E] flex p-2 gap-2	 items-center justify-center font-medium "
            }>
              {
                loading ? <Spinner /> : <div className="flex items-center gap-x-2"><p>Login</p>
                  <FiArrowRight style={{ fontSize: "1.5em" }} /></div>
              }

            </button>


          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;
