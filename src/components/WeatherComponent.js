"use client";

import { data } from 'autoprefixer';
import React, { useState, useEffect } from 'react';

export default function WeatherComponent() {
  const [weatherData, setWeatherData] = useState(null);
  const CITY = 'Roskilde'; // Moved outside of useEffect to be used in the component body

  useEffect(() => {
    const API_KEY = 'ee64e975fb5ce99b277a269f686897ca'; // Replace with your API key
    const CITY = 'Roskilde';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
   
    // Define a function to fetch weather data
    const fetchWeatherData = () => {
      fetch(URL)
        .then(response => response.json())
        .then(data => setWeatherData(data))
        .catch(error => console.error("Fetching weather data failed", error));
        console.log(data);
    };

    // Fetch weather data on component mount
    fetchWeatherData();

    // Set up an interval to fetch weather data periodically
    const interval = setInterval(fetchWeatherData, 300000); // Update every 15 minutes

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Check if weatherData is loaded, if not return a loading state
  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  // Assuming weatherData is an object with the correct structure
  // as it comes from the OpenWeatherMap API response
  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <div className="weatherContainer">
      <div className="cityName">{CITY}</div> {/* City name added here */}
      <div className="header">
        <img src={iconUrl} alt="Weather icon" className="weatherIcon" />
        <div className="temperature">
          {weatherData.main.temp}°<span className="celsius">c</span>
        </div>

      </div>
      <div className="description">
       { weatherData.weather[0].description}
      </div>
      <div className="details">
        <div className="detailItem">
          <span className="title">Vindstød</span>
          <span className="value">{weatherData.wind.gust} km/h</span>
        </div>
        {/* Other details... */}
      </div>
    </div>
  );
}