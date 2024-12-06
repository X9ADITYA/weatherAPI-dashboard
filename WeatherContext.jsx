import React, { createContext, useReducer } from "react";

const WeatherContext = createContext();

const initialState = {
  city: "",
  weatherData: null,
  searchHistory: [],
};

function weatherReducer(state, action) {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_WEATHER_DATA":
      return { ...state, weatherData: action.payload };
    case "ADD_TO_HISTORY":
      return {
        ...state,
        searchHistory: [...state.searchHistory, action.payload].slice(-5),
      };
    default:
      return state;
  }
}

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
