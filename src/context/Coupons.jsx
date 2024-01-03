import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { server } from "..";

const CouponsDataContext = createContext(null);

const CouponsContext = ({ children }) => {
  const [couponData, setCouponData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();


  const token = localStorage.getItem("token");
  useEffect(() => {
    try {
      axios(`${server}/coupons`, {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        
        setCouponData(res.data.coupons);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return <CouponsDataContext.Provider value={{couponData, setCouponData }}>{children}</CouponsDataContext.Provider>;
};

const UseCouponsContext = () => {
  return useContext(CouponsDataContext);
};

export { CouponsContext, UseCouponsContext };
