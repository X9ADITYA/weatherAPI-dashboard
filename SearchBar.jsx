import React, { useState, useContext } from "react";
import WeatherContext from "./WeatherContext";
import axios from "axios";

function SearchBar() {
  const [input, setInput] = useState("");
  const { dispatch } = useContext(WeatherContext);

  const fetchWeather = async (city) => {
    const apiKey = "ab7fbdc0dabbee289e0b84383711be65"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      dispatch({ type: "SET_WEATHER_DATA", payload: response.data });
      dispatch({ type: "ADD_TO_HISTORY", payload: city });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleSearch = () => {
    dispatch({ type: "SET_CITY", payload: input });
    fetchWeather(input);
    setInput("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
