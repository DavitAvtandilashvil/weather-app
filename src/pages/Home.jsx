import React, { useEffect } from 'react';
import DailyWeather from '../components/DailyWeather';
import HourlyWeather from '../components/HourlyWeather';
import ClimateIndicators from '../components/ClimateIndicators';
import WeekWeatherWidget from '../components/WeekWeatherWidget';
import useDailyWeather from '../hooks/useDailyWeather';

const Home = () => {

  const { data, isError, error, isLoading } = useDailyWeather()

 if(isLoading){
  return <div>retunadsadadasdasda </div>
 }

 if(isError){
  return <div className='text-[#FF0000] text-[30px]'>{error.response.data.message}</div>
 }

  if(data){
    console.log(data);
  }

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

