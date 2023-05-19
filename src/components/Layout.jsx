import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#FFFDE6] h-screen  w-screen   fixed  ">
      {/* bg-[#FFFDE6] */}
      {children}
    </div>
  );
};

export default Layout;
