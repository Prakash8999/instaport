import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ className }) => {
  return (
    <div className="relative text-gray-900 w-44 shadow-lg">
      <input
        className={` border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-lg text-sm  shadow-xl ${className}`}
        type="Search"
        placeholder="Search"
      />
      <FaSearch className="absolute top-0 right-0 mt-3 mr-3 text-gray-500" />
    </div>
  );
};

export default Search;
