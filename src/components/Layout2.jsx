import React from "react";

const Layout2 = ({ children }) => {
  return (
    <div className="absolute h-[80vh] w-[76vw] bg-slate-50 rounded-lg shadow-lg  top-32 right-4">
      <div>{children}</div>
    </div>
  );
};

export default Layout2;
