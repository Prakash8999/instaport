import React from "react";
import Avtar from "../images/Avtar.png";

const Profile = () => {
  return (
    <div className="flex w-[15vw] h-[10vh] gap-x-5 bg-[#FFFDE6] justify-center items-center rounded-lg border-2 shadow-md p-1 my-2">
      <div className=" ">
        <img src={Avtar} alt="" />
      </div>
      <div className="flex flex-col leading-normal ">
        <h4 className="text-1xl font-semibold ">Nitish Dalvi</h4>
        <h6 className="text-sm "> Developer</h6>
      </div>
    </div>
  );
};

export default Profile;
