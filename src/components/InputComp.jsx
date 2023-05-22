import React from "react";

const InputComp = ({
  label,
  type,
  placeholder,
  id,
  onChange,
  value,
  className,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="" className="pb-[4px] font-semibold">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        className={` rounded-lg border-2 shadow-md border-yellow-300 p-1 lg:w-[23vw]  focus:outline-yellow-400 focus:text-black  ${className} `}
        autoComplete="on"
      />
    </div>
  );
};

export default InputComp;
