import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Datacontext = createContext(null);

const Context = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
const [orderContext, setOrderContext] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          await axios
            .get("https://instaport-api.vercel.app/order/orders", {
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
          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };

    fetchData();
  }, []);

  return <Datacontext.Provider value={{orderContext, setOrderContext}}>{children}</Datacontext.Provider>;
};

const ContextAuth = () => {
  return useContext(Datacontext);
};

export { Context, ContextAuth };
