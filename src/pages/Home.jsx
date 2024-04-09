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
