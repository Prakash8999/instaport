import React, { useState } from "react";
import InputComp from "../InputComp";

const TestForm = () => {
  const commonstate = {
    user_id: "",
    delivery_type: "",
    weight: "",
    parcel_type: "",
    parcel_value: "",
    phone_number: "",
    delivery_bag: "",
    send_sms_receipents: "",
    status: "",
  };
  const pickupstate = {
    address: "",
    phone_number: "",
    instructions: "",
    buy_for_me: "",
  };
  const deliverystate = {
    delivery_date: "",
    delivery_time: "",
    address: "",
    phone_number: "",
    instructions: "",
  };
  const [formState, setFormState] = useState(commonstate);
  const [pickupFormstate, setpickupFormstate] = useState(pickupstate);
  const [deliveryFormstate, setdeliveryFormstate] = useState(deliverystate);
  const handlePickupFormChange = (e) => {
    setpickupFormstate({
      ...pickupFormstate,
      [e.target.id]: e.target.value,
    });
  };
  const handleFormChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    });
  };
  const handleDeliveryFormChange = (e) => {
    setdeliveryFormstate({
      ...deliveryFormstate,
      [e.target.id]: e.target.value,
    });
  };

  const handleloginIn = () => {
    console.log(formState);
    console.log(pickupFormstate);
    console.log(deliveryFormstate);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form action="">
        <div>
          <InputComp
            onChange={handleFormChange}
            label={"User id"}
            id={"user_id"}
            type={"text"}
            placeholder={"userId"}
          ></InputComp>

          <label htmlFor="" className="pb-[4px] font-semibold">
            Delivery_type:
          </label>
          <select
            name="delivery_type"
            id="delivery_type"
            onChange={handleFormChange}
          >
            <option id="sheduled">Sheduled</option>
            <option id="now">Now</option>
          </select>
          <InputComp
            onChange={handleFormChange}
            label={"Weight"}
            type={"text"}
            id={"weight"}
            placeholder={"weight"}
          ></InputComp>
        </div>
        <hr />
        {/* pickup */}
        <div>
          <h1 className="text-center font-bold">Pickup State</h1>
          <InputComp
            label={"Address"}
            type={"text"}
            id={"address"}
            placeholder={"Address"}
            onChange={handlePickupFormChange}
          ></InputComp>
          <InputComp
            label={"PhoneNo"}
            type={"text"}
            id={"phone_number"}
            placeholder={"phone no"}
            onChange={handlePickupFormChange}
          ></InputComp>
          <InputComp
            label={"Instructions"}
            type={"text"}
            id={"instructions"}
            placeholder={"Instructions"}
            onChange={handlePickupFormChange}
          ></InputComp>
          <label htmlFor="" className="pb-[4px] font-semibold">
            Buy For Me:
          </label>
          <select
            name="buy_for_me"
            id="buy_for_me"
            onChange={handlePickupFormChange}
          >
            <option value="true" id="Yes">
              Yes
            </option>
            <option value="false" id="no">
              No
            </option>
          </select>
        </div>
        {/* dilivery */}
        <hr />
        <div>
          <h1 className="text-center font-bold">Delivery State</h1>
          <InputComp
            onChange={handleDeliveryFormChange}
            label={"Date"}
            type={"date"}
            id={"delivery_date"}
            placeholder={"delivery_date"}
          ></InputComp>
          <InputComp
            onChange={handleDeliveryFormChange}
            label={"Time"}
            type={"time"}
            id={"delivery_time"}
            placeholder={"delivery_time"}
          ></InputComp>
          <InputComp
            onChange={handleDeliveryFormChange}
            label={"Delivery Address"}
            type={"text"}
            id={"address"}
            placeholder={"address"}
          ></InputComp>
          <InputComp
            onChange={handleDeliveryFormChange}
            label={"Phone Number"}
            type={"text"}
            id={"phone_number"}
            placeholder={"phone_number"}
          ></InputComp>
          <InputComp
            onChange={handleDeliveryFormChange}
            label={"Instructions"}
            type={"text"}
            id={"instructions"}
            placeholder={"instructions"}
          ></InputComp>
          <label htmlFor="" className="pb-[4px] font-semibold">
            Buy For Me:
          </label>
          <select
            name="buy_for_me"
            id="buy_for_me"
            onChange={handlePickupFormChange}
          >
            <option value="true" id="Yes">
              Yes
            </option>
            <option value="false" id="no">
              No
            </option>
          </select>
          <br />
          <label htmlFor="" className="pb-[4px] font-semibold">
            Delivery Payment Type :
          </label>
          <select
            name="delivery_payment_type "
            id="delivery_payment_type "
            onChange={handleDeliveryFormChange}
          >
            <option id="cod">Cod</option>
            <option id="online">Online</option>
          </select>
        </div>
        {/* commonstate */}
        <div>
          <h1 className="text-center font-bold">Common State</h1>

          <label htmlFor="" className="pb-[4px] font-semibold">
            What’s inside :
          </label>
          <select
            name="parcel_type"
            id="parcel_type"
            onChange={handleFormChange}
          >
            <option value="document" id="document">
              Document
            </option>
            <option value="food" id="food">
              Food
            </option>
            <option value="flowers" id="flowers">
              Flowers
            </option>
            <option value="clothes" id="clothes">
              Clothes
            </option>
          </select>
          <br />
          <InputComp
            onChange={handleFormChange}
            label={"Parcel Value :"}
            type={"text"}
            id={"parcel_value"}
            placeholder={"Parcel_value"}
          ></InputComp>
          <InputComp
            onChange={handleFormChange}
            label={"Phone Number:"}
            type={"text"}
            id={"phone_number"}
            placeholder={"Phone number"}
          ></InputComp>
          <br />
          <label htmlFor="" className="pb-[4px] font-semibold">
            Delivery Bag:
          </label>
          <select
            name="delivery_bag"
            id="delivery_bag"
            onChange={handleFormChange}
          >
            <option value="true" id="yes">
              Yes
            </option>
            <option value="false" id="no">
              No
            </option>
          </select>
          <br />
          <label htmlFor="" className="pb-[4px] font-semibold">
            Send SMS Receipents:
          </label>
          <select
            name="send_sms_receipents"
            id="send_sms_receipents"
            onChange={handleFormChange}
          >
            <option value="true" id="yes" onChange={handleFormChange}>
              Yes
            </option>
            <option value="false" id="no" onChange={handleFormChange}>
              No
            </option>
          </select>
          <br />
          <label htmlFor="" className="pb-[4px] font-semibold">
            Status :
          </label>
          <select name="status" id="status" onChange={handleFormChange}>
            <option value="delivered" id="delivered">
              Delivered
            </option>
            <option value="processing" id="Processing">
              Processing
            </option>
            <option value="out_for_deliver" id="out_for_deliver">
              Out For Deliver
            </option>
          </select>
        </div>

        <hr />

        <button
          type="button"
          onClick={() => {
            handleloginIn(formState, pickupFormstate, deliveryFormstate);
          }}
          className="bg-yellow-500 text-center text-xl text-white rounded-lg px-6 py-2 hover:bg-purple-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestForm;
