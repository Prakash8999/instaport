import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import InputComp from "../components/InputComp";
import Buttons from "../components/Buttons";
import ModalPriceManipulation from "../components/Modal/ModalPriceManipulation";
import Search from "../components/Search";
import axios from "axios";
import { server } from "..";
import toast from "react-hot-toast";
const PriceManipulation = () => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });
  const [isLoading, setLoading] = useState(true);
const [isEditable, setIsEditable] = useState(false)
const setEditable = () =>{
  setIsEditable(!isEditable)
}
  const [prices, setPrices] = useState({
    id: "",
    additional_drop_charge: Number(),
    additional_per_kilometer_charge: Number(),
    additional_pickup_charge: Number(),
    base_order_charges: Number(),
    instaport_commission: Number(),
    per_kilometer_charge: Number(),
    security_fees_charges: Number(),
  });

  const token = localStorage.getItem("token");

  const getPrice = async () => {
    if (token) {
      try {
        let { data } = await axios.get(
          "https://insta-port-backend-api.vercel.app/price/get",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("PRICES : ", data);
        setPrices({
          id: data.priceManipulation[0]._id,
          additional_drop_charge:
            data.priceManipulation[0].additional_drop_charge,
          additional_per_kilometer_charge:
            data.priceManipulation[0].additional_per_kilometer_charge,
          additional_pickup_charge:
            data.priceManipulation[0].additional_pickup_charge,
          base_order_charges:
            data.priceManipulation[0].base_order_charges,
          instaport_commission: data.priceManipulation[0].instaport_commission,
          per_kilometer_charge: data.priceManipulation[0].per_kilometer_charge,
          security_fees_charges:
            data.priceManipulation[0].security_fees_charges,
        });

        // console.log("DATA : ", prices);
      } catch (error) {
        console.log("ERROR : ", error);
      }
    } else {
      console.log("ERROR OCURED ");
    }
  };

  useEffect(() => {
    getPrice();
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  const handleChange = (e) => {
    setPrices((prevdata) => ({
      ...prevdata,
      [e.target.id]: e.target.value,
    }));
  };
  const hanldeUpdate = () => {
    try {
      axios(`${server}/price/update`, {
        method: "PATCH",

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        data: {
          "_id": prices.id, "additional_drop_charge":
            prices.additional_drop_charge,
          "additional_per_kilometer_charge":
            prices.additional_per_kilometer_charge,
          "additional_pickup_charge":
            prices.additional_pickup_charge,
          "base_order_charges":
            prices.base_order_charges,
          "instaport_commission": prices.instaport_commission,
          "per_kilometer_charge": prices.per_kilometer_charge,
          "security_fees_charges":
            prices.security_fees_charges

        }
        // data: JSON.stringify({...prices})

      }).then((res) => {
        
        if(!res?.data?.error){
          toast.success(res?.data?.message)
        }
        setIsEditable(!isEditable)
      }).catch(err =>{ 

        // toast.error(err?.response?.data?.message)
        toast.error('Something went wrong')
      })
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(prices.id)
  return (
    <>
      {modal.show && (
        <ModalPriceManipulation
          datamodal={modal.show && modal.datamodal}
          setmodal={setmodal}
        />
      )}
      <div>
        <Layout>
          <SideNav></SideNav>
          <div className="absolute pt-7 flex items-center justify-between gap-[25vw]  left-[23vw] pl-1">
            <h1 className="text-4xl ">Price Manipulation</h1>
            <div className="pl-16">
              <Search className={"w-80 h-12"} />
            </div>
          </div>
          <Layout2 loading={isLoading}>
            <div className="flex flex-col justify-center">
              <div className="grid grid-cols-2 p-6 gap-x-36 gap-y-4">
                <InputComp
                  label={"Per Kilometer Charge"}
                  className={"p-2"}
                  value={prices.per_kilometer_charge}
                  onChange={handleChange}
                  disabled={!isEditable}
                  id="per_kilometer_charge"
                />
                <InputComp
                  value={prices.additional_per_kilometer_charge}
                  label={"Additional Per Kilometer Charge"}
                  className={"p-2"}
                  onChange={handleChange}
                  type={'number'}
                  id="additional_per_kilometer_charge"
                  disabled={!isEditable}
                />
                <InputComp
                  value={prices.additional_pickup_charge}
                  label={"Additional Pickup Charges"}
                  className={"p-2"}
                  onChange={handleChange}
                  id="additional_pickup_charge"
                  disabled={!isEditable}
                />
                <InputComp
                  value={prices.security_fees_charges}
                  label={"Security Fees Charges(%)"}
                  className={"p-2"}
                  onChange={handleChange}
                  id="security_fees_charges"
                  disabled={!isEditable}
                />
                <InputComp
                  value={prices.base_order_charges}
                  label={"Base Order Charges(2.5 km)"}
                  className={"p-2"}
                  onChange={handleChange}
                  id="base_order_charges"
                  disabled={!isEditable}
                />
                <InputComp
                  value={prices.instaport_commission}
                  label={"Instaport Commission(%)"}
                  className={"p-2"}
                  onChange={handleChange}
                  id="instaport_commission"
                  disabled={!isEditable}
                />
                <InputComp
                  onChange={handleChange}
                  value={prices.additional_drop_charge}
                  label={"Additional Drop Charges"}
                  className={"p-2"}
                  id={'additional_drop_charge'}
                  disabled={!isEditable}
                />
              </div>
            </div>
            <div className=" flex justify-center  mt-7">
              {/* <Buttons
                buttonText={prices && "Edit"}
                onclick={() => {
                  setmodal({ show: true, datamodal: null });
                }}
                className={
                  "text-white border-yellow-300 self-center bg-yellow-400 px-10 py-2  w-48  h-11 rounded-3xl"
                }
              ></Buttons> */}
              {
                !isEditable ?   <button   className={
                  "text-white border-yellow-300 self-center bg-gray-400 px-10 py-2  w-48  h-11 rounded-3xl"
                } onClick={setEditable}>

                Edit
              </button> :   <button   className={
                  "text-white border-yellow-300 self-center bg-yellow-400 px-10 py-2  w-48  h-11 rounded-3xl"
                } onClick={hanldeUpdate}>

                save
              </button>
                  
              }

            
            </div>
          </Layout2>
        </Layout>
      </div>
    </>
  );
};

export default PriceManipulation;