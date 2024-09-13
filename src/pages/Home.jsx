import React from 'react';
import DailyWeather from '../components/DailyWeather';
import HourlyWeather from '../components/HourlyWeather';

const Home = () => {
  return (
    <div
      className="px-16 bg-cover bg-no-repeat h-screen"
      
    >
      <DailyWeather />
      <HourlyWeather />
    </div>
  );
};

export default Home;
