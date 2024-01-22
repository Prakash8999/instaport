import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ className, onChange, value, placeholder }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute pt-4 left-0 flex items-center pl-3">
          <FaSearch className="   text-gray-500" />
        </div>
        <input
          className={` border-2 border-gray-300 hover:border-gray-400 bg-white h-10 px-8 pr-10 rounded-xl text-sm  shadow-md   ${className}`}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default Search;
