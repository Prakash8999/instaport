import React from "react";

const CityTable = ({ dataArray }) => {
  return (
    <>
      <table className="w-[100%]">
        <thead className=" bg-white pt-2 ">
          <tr className=" px-16 pt-2 border-b-2 border-slate-200">
            <th className="text-center">Id</th>
            <th className="text-center">City</th>
            <th className="text-center">Slug</th>
          </tr>
        </thead>

        <tbody>
          {dataArray?.map((data, index) => {
            return (
              <tr key={index}  className=" px-16 pt-2 border-b border-slate-200">
			  
                <td className="text-center">{data?._id.slice(-5)}</td>
                <td className="text-center">{data?.cityName}</td>
                <td className="text-center">{data?.slug}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CityTable;
