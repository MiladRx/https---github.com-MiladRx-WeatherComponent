// HomePage.js
"use client";

import "./globals.css";
import React from 'react';
import WeatherComponent from '@/components/WeatherComponent'; // Adjust the path as necessary

export default function HomePage() {
  return (
    <>
      <h1>Weather Component</h1>
      <WeatherComponent />
      {/* Include other components or content here */}
    </>
  );
}
