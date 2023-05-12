import React from "react";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#FFFDE6] lg:min-h-screen  w-screen   relative ">
      {/* bg-[#FFFDE6] */}
      {children}
    </div>
  );
};

export default Layout;
