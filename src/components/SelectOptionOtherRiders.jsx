import React, { useEffect, useState } from "react";

import Select from "react-select";
import { riderdataActive } from "./Data/Riderdata";


const data = [
  { value: "ocean", label: "Ocean", color: "#00B8D9" },
  { value: "blue", label: "Blue", color: "#0052CC" },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: "1em" }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

export default () => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  
  const [otherRider, setOtherRider] = useState()

	useEffect(() => {
		setOtherRider(riderdataActive?.map((active) => {
			return {
				...active,
				label: `${active?.RiderName} ( ${active?.ShippingType}- ${active?.RiderVehicleNo})`,
				value: active?.RiderId,
			}
		}))
	}, [riderdataActive]);


  return (
    <>
      <Select
        className="  w-[25vw] border-yellow-300 focus:border-yellow-400"
        classNamePrefix="select"
        defaultValue={otherRider}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        // name="color"
        options={otherRider}
      />

      <div
        style={{
          color: "hsl(0, 0%, 40%)",
          display: "inline-block",
          fontSize: 12,
          fontStyle: "italic",
          marginTop: "1em",
        }}
      >
        {/* <Checkbox
          checked={isClearable}
          onChange={() => setIsClearable((state) => !state)}
        >
          Clearable
        </Checkbox>
        <Checkbox
          checked={isSearchable}
          onChange={() => setIsSearchable((state) => !state)}
        >
          Searchable
        </Checkbox> */}
        {/* <Checkbox
          checked={isDisabled}
          onChange={() => setIsDisabled((state) => !state)}
        >
          Disabled
        </Checkbox> */}
        {/* <Checkbox
          checked={isLoading}
          onChange={() => setIsLoading((state) => !state)}
        >
          Loading
        </Checkbox> */}
        {/* <Checkbox checked={isRtl} onChange={() => setIsRtl((state) => !state)}>
          RTL
        </Checkbox> */}
      </div>
    </>
  );
};
