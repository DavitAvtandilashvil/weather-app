import React from 'react';
import DailyWeather from '../components/DailyWeather';
import HourlyWeather from '../components/HourlyWeather';
import backgroundImage from '../assets/images/backgrond.png';

const Home = () => {
  return (
    <div
      className="px-16 bg-cover bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <DailyWeather />
      <HourlyWeather />
    </div>
  );
};

export default Home;
