import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Sun from '../assets/icons/sun.png';
import StarryMoon from '../assets/icons/starry-moon.png';
import Moon from '../assets/icons/moon.png';
import BackIcon from '../assets/icons/back.png';
import WeatherBox from './WeatherBox';

const apiKey = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.tomorrow.io/v4/weather/forecast';

const isNightTime = (hours) => hours >= 20 || hours < 6;

const fetchHourlyWeather = async (city) => {
  const response = await axios.get(
    `${API_URL}?location=${city}&apikey=${apiKey}`
  );

  const data = response.data;

  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  if (!data?.timelines?.hourly) return [];

  const hourlyWeatherData = data.timelines.hourly.map((item) => {
    const itemTime = new Date(item.time);
    const hour = itemTime.getHours();

    const timeLabel = hour === currentHour ? 'ახლა' : `${hour}:00`;

    const icon = isNightTime(hour)
      ? Moon
      : getWeatherIcon(item.values.weatherCode);

    return {
      time: timeLabel,
      icon,
      temp: Math.round(item.values.temperature),
      iconClass: 'w-9 h-9',
    };
  });

  return hourlyWeatherData;
};

const getWeatherIcon = (weatherCode) => {
  switch (weatherCode) {
    case 1000:
      return Sun;
    case 1100:
      return StarryMoon;
    case 5000:
      return Moon;
    default:
      return Sun;
  }
};

const HourlyWeather = ({ city }) => {
  const [visibleItems, setVisibleItems] = useState(10); // Initially 10 items will be visible

  const {
    isLoading,
    error,
    data: hourlyWeatherData,
  } = useQuery(['hourlyWeather', city], () => fetchHourlyWeather(city), {
    staleTime: 300000,
    cacheTime: 3600000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

  const handleBackClick = () => {
    if (visibleItems > 1) {
      setVisibleItems(visibleItems - 1);
    }
  };

  return (
    <div className="flex flex-col gap-[27px]">
      <h2 className="text-2xl font-medium leading-[28.64px] text-white">
        ამინდი საათების მიხედვით
      </h2>
      <div className="p-5 flex items-center justify-between w-[756px] h-[177px] rounded-2xl bg-[#B5B5B566] mb-[52px]">
        {hourlyWeatherData.slice(0, visibleItems).map((data, index) => (
          <WeatherBox key={index} {...data} />
        ))}
        <div>
          <img
            className="w-[43.08px] h-[43.08px]"
            src={BackIcon}
            alt="back-icon"
            onClick={handleBackClick}
          />
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
