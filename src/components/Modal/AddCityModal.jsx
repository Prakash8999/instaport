import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./ModalAnimation.css";
import { CSSTransition } from "react-transition-group";
import InputComp from "../InputComp";
import axios from "axios";
const AddCityModal = ({ datamodal, setmodal }) => {
  const [showModal, setShowModal] = useState(false);
  const [city, setCity] = useState("");
  const [slug, setSLug] = useState("");



  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setmodal({ show: false });
    }, 200); // Wait for the closing animation to complete (300ms)
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios("https://instaport-api.vercel.app/city/create", {
        method: "POST",
        data: {
          cityName: city,
          slug: slug,
        },
        headers: {
          Authorization: ` ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          console.log(res);
          setCity("")
          setSLug("")
          closeModal()
          datamodal()
        })
        .catch((err) => {
          console.log(err?.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // const closeModal = () => {
  //   setShowModal(false);
  //   setTimeout(() => {
  //     setmodal({ show: false });
  //   }, 200); // Wait for the closing animation to complete (300ms)
  // };
  console.log(slug);
  return (
    <>
      <div className=" h-screen w-screen bg-[#343434] bg-opacity-70 flex items-center justify-center fixed  top-0 left-0  shadow-lg z-[100] ">
        <div className="p-5 relative h-[40vh]  overflow-hidden w-[40vw] bg-[#FFFDE6] rounded-lg flex  flex-col   md:gap-y-1  gap-y">
          <button
            onClick={() => {
              closeModal({ show: false });
            }}
            className="absolute top-2 right-3 font-bold text-xl text-red-600"
            title="close"
          >
            <AiOutlineClose />
          </button>

          <div className="w-full ">
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-y-2   "
            >
              <InputComp
                label={"City Name"}
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required={true}
              />
              <InputComp
                required={true}
                label={"Slug"}
                value={slug}
                onChange={(e) => {
                  setSLug(e.target.value);
                }}
              />
              <div className="flex pt-2 w-[100%] justify-center">
                <button
                  className={`bg-yellow-400 text-white rounded-2xl px-6 py-2 font-semibold`}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCityModal;
