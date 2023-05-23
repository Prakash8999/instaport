import React, { useState } from "react";

const ButtonGroup = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonClass = (buttonId) => {
    return buttonId === activeButton ? "bg-blue-500" : "bg-gray-500";
  };

  return (
    <div>
      <button
        className={`rounded-lg px-4 py-2 mr-2 ${getButtonClass(1)}`}
        onClick={() => handleButtonClick(1)}
      >
        Button 1
      </button>
      <button
        className={`rounded-lg px-4 py-2 mr-2 ${getButtonClass(2)}`}
        onClick={() => handleButtonClick(2)}
      >
        Button 2
      </button>
      <button
        className={`rounded-lg px-4 py-2 mr-2 ${getButtonClass(3)}`}
        onClick={() => handleButtonClick(3)}
      >
        Button 3
      </button>
      <button
        className={`rounded-lg px-4 py-2 ${getButtonClass(4)}`}
        onClick={() => handleButtonClick(4)}
      >
        Button 4
      </button>
    </div>
  );
};

export default ButtonGroup;
