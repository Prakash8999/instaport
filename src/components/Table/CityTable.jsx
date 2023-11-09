import React from "react";

const CityTable = ({ dataArray }) => {
  return (
    <>
    

      <table className="w-full overflow-scroll h-full">
        <thead className=" bg-white pt-2 ">
          <tr className=" px-16 border-b-2  border-slate-200">
            <th className="text-center  py-2">Id</th>
            <th className="text-center  py-2">City</th>
            <th className="text-center  py-2">Slug</th>
          </tr>
        </thead>

        <tbody className=" ">
          {dataArray?.map((data, index) => {
            return (
              <tr key={index}  className=" px-16 pt-2 border-b h-full border-slate-200 overflow-y-scroll ">
			  
                <td className="text-center py-2">{data?._id.slice(-5)}</td>
                <td className="text-center py-2">{data?.cityName}</td>
                <td className="text-center py-2">{data?.slug}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    
    </>
  );
};

export default CityTable;
