import React, { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const data = [
    { id: 1, title: "Apple" },
    { id: 2, title: "Banana" },
    { id: 3, title: "Orange" },
    { id: 4, title: "Grapes" },
  ];

  const handleSearch = () => {
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length === 0 && (
        <div>Result not found for "{searchValue}"</div>
      )}

      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
