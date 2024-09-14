import React from 'react';
import DailyWeather from '../components/DailyWeather';
import HourlyWeather from '../components/HourlyWeather';
import ClimateIndicators from '../components/ClimateIndicators';
import WeekWeatherWidget from '../components/WeekWeatherWidget';

const Home = () => {
  return (
    <div className="px-[16px] bg-cover bg-no-repeat min-h-screen flex gap-[80px]">
      <div>
        <DailyWeather />
        <HourlyWeather />
        <ClimateIndicators />
      </div>
      <WeekWeatherWidget />
    </div>
  );
};

export default Home;
