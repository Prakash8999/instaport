import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { server } from "..";

const Datacontext = createContext(null);

const Context = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
const [orders, setOrders] = useState([])
const[loading, setLoading] = useState(true)
const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {

      if (token) {
        try {
          await axios
            .get(`${server}/order/orders`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              if (location.pathname === "/login" || location.pathname === "/") {
                setTimeout(() => {
                  navigate("/dashboard");
                }, 200);

                // setUserLoading(false)
              } else {
                return;
              }
            });
        } catch (error) {
          navigate("/");
        }
      } else {
        navigate("/");
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    try {
      axios(`${server}/order/orders`, {
        method: "GET",
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          // setorderdata(res?.data?.order);
console.log(res?.data);
          setOrders(res?.data?.order?.length === 0 ? [] : res?.data?.order)

          setLoading(false)
        })
    } catch (error) {
      console.log(error);
    }

    // const timeout = setTimeout(() => {
    //   setLoading(false);
    // }, 500);

    // return () => {
    //   clearTimeout(timeout);
    // };
  }, []);



  return <Datacontext.Provider value={{orders, loading}}>{children}</Datacontext.Provider>;
};

const ContextAuth = () => {
  return useContext(Datacontext);
};

export { Context, ContextAuth };
