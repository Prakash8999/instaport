import React from "react";
import Logo from "../images/Logo.png";

const LogoComp = ({ className }) => {
  return (
    <div className={`${className}`}>
      <img src={Logo} alt="" />
    </div>
  );
};

export default LogoComp;
