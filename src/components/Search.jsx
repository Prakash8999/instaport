import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ className, divclass }) => {
  return (
    <div
      className={`absolute flex text-gray-900  shadow-sm rounded-sm ${divclass}`}
    >
      <input
        className={` border-2 border-gray-300 hover:border-gray-400 bg-white h-10 px-5 pr-10 rounded-lg text-sm  shadow-sm hover:shadow-md  ${className}`}
        type="text"
        placeholder="Search"
      />
      <FaSearch className="absolute top-1 right-4 mt-3  text-gray-500" />
    </div>
  );
};

export default Search;
