import React from "react";

const Buttons = ({
  buttonText,
  buttonIcon,
  buttonIcon2,
  className,
  onclick,
}) => {
  return (
    <div>
      <button onClick={onclick} className={`${className}`}>
        <div>{buttonIcon}</div>
        {buttonText}
        <div>{buttonIcon2}</div>
      </button>
    </div>
  );
};

export default Buttons;
