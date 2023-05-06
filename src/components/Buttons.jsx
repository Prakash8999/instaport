import React from "react";

const Buttons = ({
  buttonText,
  buttonIcon,
  buttonIcon2,
  className,
  onclick,
}) => {
  return (
    <div className="flex justify-start items-start ">
      <button onClick={onclick} className={`${className}`}>
        <div>{buttonIcon}</div>
        {buttonText}
        <div>{buttonIcon2}</div>
      </button>
    </div>
  );
};

export default Buttons;
