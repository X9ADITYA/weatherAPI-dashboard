import React, { useContext } from "react";
import WeatherContext from "./WeatherContext";

function SearchHistory() {
  const { state } = useContext(WeatherContext);
  const { searchHistory } = state;

  return (
    <div className="search-history">
      <h3>Recent Searches</h3>
      <ul>
        {searchHistory.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchHistory;
