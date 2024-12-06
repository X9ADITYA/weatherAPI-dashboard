import React, { useContext } from "react";
import WeatherContext from "./WeatherContext";

function WeatherDisplay() {
  const { state } = useContext(WeatherContext);
  const { weatherData } = state;

  if (!weatherData) {
    return <div className="weather-display">No weather data available.</div>;
  }

  return (
    <div className="weather-display">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
