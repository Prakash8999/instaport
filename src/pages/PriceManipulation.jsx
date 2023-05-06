import React from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import InputComp from "../components/InputComp";
import Buttons from "../components/Buttons";
const PriceManipulation = () => {
  return (
    <div>
      <Layout>
        <SideNav></SideNav>
        <div className="flex justify-between pt-12 gap-x-80 pr-6 pl-80 " >
        <h1 className="text-4xl pt-3 ">Price Manipulation</h1>
        <InputComp
placeholder={"Search"}
className={"p-3"}

/>
        </div>
        <Layout2>


          <div className="flex flex-col justify-center">

<div className="grid grid-cols-2 p-6 gap-x-36 gap-y-4">
<InputComp
label={"Per Kilometer Charge"}
className={"p-2"}

/>
<InputComp
label={"Per Kilometer Additional Charge"}
className={"p-2"}

/>
<InputComp
label={"Additional Pickup Charges"}
className={"p-2"}

/>
<InputComp
label={"Security Fees Charges(%)"}
className={"p-2"}

/>
<InputComp
label={"Base Order Charges(2.5 km)"}
className={"p-2"}

/>
<InputComp
label={"Instaport Commission(%)"}
className={"p-2"}

/>
<InputComp
label={"Additional Drop Charges"}
className={"p-2"}

/>
</div>


</div>
<div className="w-full flex justify-center mt-6">

<Buttons buttonText={"Save"} className={"text-white border-yellow-300 self-center bg-yellow-400 px-14 py-1 rounded-3xl"}>
</Buttons>
</div>

        </Layout2>
      </Layout>
    </div>
  );
};

export default PriceManipulation;