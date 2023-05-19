import React, { useState, useEffect } from "react";

const InfiniteScrollTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 10; // Number of rows to fetch per page

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    // Simulating an API call to fetch data
    setTimeout(() => {
      const newData = [...data];
      for (let i = 0; i < pageSize; i++) {
        const rowNumber = (pageNumber - 1) * pageSize + i + 1;
        newData.push(`Row ${rowNumber}`);
      }
      setData(newData);
      setPageNumber(pageNumber + 1);
      setIsLoading(false);
    }, 1000); // Simulated delay of 1 second
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    if (scrollHeight - scrollTop === clientHeight && !isLoading) {
      fetchData();
    }
  };

  return (
    <div
      style={{ height: "80vh", overflowY: "scroll" }}
      onScroll={handleScroll}
    >
      <table>
        <thead>
          <tr>
            <th>Row</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default InfiniteScrollTable;
