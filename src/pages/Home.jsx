import React from 'react';
import DailyWeather from '../components/DailyWeather';
import HourlyWeather from '../components/HourlyWeather';
import ClimateIndicators from '../components/ClimateIndicators';

const Home = () => {
  return (
    <div className="px-16 bg-cover bg-no-repeat">
      <DailyWeather />
      <HourlyWeather />
      <ClimateIndicators />
    </div>
  );
};

export default Home;
