import React from "react";

const ModalInput = ({className,value}) => {
  return (
    <>
      <div className="relative">
        <input
          className={`  hover:border-gray-400 bg-transparent duration-150 h-8 pl-2 w-fit rounded-lg text-sm   hover:shadow-md  ${className}`}
          type="text"
          placeholder="Search"
          value={value}
        />
      </div>
    </>
  );
};

export default ModalInput;
