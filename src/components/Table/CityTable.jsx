import React from "react";

const CityTable = ({ dataArray }) => {
  return (
    <>
    

      <table className="w-full">
        <thead className=" bg-white pt-2 ">
          <tr className=" px-16 pt-2 border-b-2 border-slate-200">
            <th className="text-center">Id</th>
            <th className="text-center">City</th>
            <th className="text-center">Slug</th>
          </tr>
        </thead>

        <tbody className=" overflow-y-auto max-h-[400px]">
          {dataArray?.map((data, index) => {
            return (
              <tr key={index}  className=" px-16 pt-2 border-b  border-slate-200 ">
			  
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
