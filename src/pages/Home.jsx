import React from "react";
import InputComp from "../components/InputComp";
import Buttons from "../components/Buttons";
import { FcGoogle } from "react-icons/fc";
import Spinner from "../components/Spinner";
import LogoComp from "../components/LogoComp";
import Layout from "../components/Layout";
import StatsCard from "../components/StatsCard";
import RiderCard from "../components/RiderCard";
import ConfirnmationPopup from "../components/ConfirnmationPopup";
// import Modal from "../components/Modal/ModalTest";
import Search from "../components/Test.jsx/Search";
import OrderTable from "../components/Table/OrderTable";
import Table from "../components/Test.jsx/Search";
import InfiniteScrollTable from "../components/Test.jsx/Scroll";
import ButtonGroup from "../components/Test.jsx/ButtonGroup";

const Home = () => {
  //  Template Code
  return (
    <>
      <Table></Table>
      <InfiniteScrollTable></InfiniteScrollTable>
      <Search></Search>
      <ButtonGroup></ButtonGroup>
    </>
  );
};

export default Home;

// {/* <Layout>
//       <Modal></Modal>

//       <div className="text-4xl text-center text-red-500 ">
//         Hello Dashboard
//       </div>
//       <InputComp
//         label={"Enter UserName:"}
//         placeholder={"enter your name"}
//         className={"w-[34vw]"}
//       ></InputComp>
//       <InputComp
//         label={"Enter UserName:"}
//         placeholder={"enter your name"}
//         className={"w-[34vw]"}
//       ></InputComp>
//       <Buttons
//         className={`rounded-lg border-2 shadow-md border-yellow-300 p-1 lg:w-[23vw]  focus:outline-yellow-400 focus:text-black flex  items-center justify-center gap-4 hover:font-semibold`}
//         buttonIcon={<FcGoogle style={{ fontSize: "1.5em" }} />}
//         buttonText={"Login With Google"}
//       ></Buttons>
//       <Spinner></Spinner>
//       <LogoComp></LogoComp>
//       {/* <UIimgComp></UIimgComp> */}
//       {/* <SideNav></SideNav> */}
//       <StatsCard Number={"88547"} Value={"Total Orders"}></StatsCard>
//       <RiderCard
//         RiderName={"Mrudul Kolambe"}
//         RiderAge={"21"}
//         VechileNumber={"MH04 2542"}
//       ></RiderCard>
//       <Search className={"w-44"}></Search>
//       <OrderTable></OrderTable>
//       <ConfirnmationPopup
//         Content={"Sure you want to confirm?"}
//         Subcontent={"Are yoy sure to accept this?"}
//         Resolve={"No,Cancel"}
//         Reject={"Yes,Confirm"}
//       ></ConfirnmationPopup>
//     </Layout> */}
