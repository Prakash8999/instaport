import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-[#FFFDE6]  lg:min-h-screen  w-screen   relative ">
      {children}
    </div>
  );
};

export default Layout;
