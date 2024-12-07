import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SideNav from "../components/SideNav";
import Layout2 from "../components/Layout2";
import Search from "../components/Search";
import AddCityModal from "../components/Modal/AddCityModal";
import axios from "axios";
import CityTable from "../components/Table/CityTable";
import { server } from "..";

const AddCity = () => {
  const [modal, setmodal] = useState({ show: false, datamodal: {} });
  const [city, setCity] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const fetchData = () => {
    try {
      axios(`${server}/city/getcity?test=123`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          setCity(res?.data?.city);
        })
        .catch((err) => {
          console.log(err?.message);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSearchResults(city);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [city]);

  const handleSearch = (e) => {
    const filteredData = city.filter(
      (data) =>
        data?.cityName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data?.slug?.toLowerCase().includes(e.target.value.toLowerCase()) ||
        data?._id
          ?.slice(-5)
          ?.toLowerCase()
          .includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  return (
    <>
      {modal.show && (
        <AddCityModal
          datamodal={modal.show && modal?.datamodal}
          setmodal={setmodal}
        />
      )}
      <div className="">
        <Layout>
          <div className="flex pl-5">

            <SideNav className={'w-[20vw]'} />
            <div className="pt-10 flex    justify-between w-[79vw] px-7  ">


              
                <Search className={"w-[50vw] h-12"} onChange={handleSearch} />

                <button
                  onClick={() => {
                    setmodal({ show: true, datamodal: fetchData });
                  }}
                  className={`outline-none rounded-lg h-12 text-base font-semibold shadow hover:shadow-lg  duration-300    p-2.5   lg:w-[15vw]   text-black flex  items-center justify-center bg-yellow-400 hover:bg-yellow-500`}
                >
                  Add City
                </button>
              

            </div>
            <Layout2 loading={isLoading} >
              <CityTable dataArray={searchResults} />
            </Layout2>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default AddCity;
