import { useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchText);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          id="searchbox"
          name="searchbox"
          placeholder="Search Food or Restaurant"
          value={searchText}
          onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
