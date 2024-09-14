import React from 'react';
import { useQuery } from 'react-query';
import Sun from '../assets/icons/sun.png';
import StarryMoon from '../assets/icons/starry-moon.png';
import Moon from '../assets/icons/moon.png';
import BackIcon from '../assets/icons/back.png';
import WeatherBox from './WeatherBox';

const fetchHourlyWeather = async () => {
  // API მოთხოვნა
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { time: "ახლა", icon: Sun, temp: "31", iconClass: "w-9 h-9" },
          { time: "16:00", icon: Sun, temp: "29", iconClass: "w-9 h-9" },
          { time: "17:00", icon: Sun, temp: "31", iconClass: "w-9 h-9" },
          { time: "18:00", icon: Sun, temp: "31", iconClass: "w-9 h-9" },
          { time: "19:00", icon: Sun, temp: "31", iconClass: "w-9 h-9" },
          { time: "20:00", icon: Sun, temp: "31", iconClass: "w-9 h-9" },
          {
            time: "21:00",
            icon: StarryMoon,
            temp: "31",
            iconClass: "w-[44.21px] h-9",
          },
          {
            time: "22:00",
            icon: Moon,
            temp: "31",
            iconClass: "w-9 h-[37.37px]",
          },
        ]),
      1000
    )
  );
};

const HourlyWeather = () => {
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useQuery('hourlyWeather', fetchHourlyWeather);

  if (isLoading) return <div>იტვირთება...</div>;
  if (isError) return <div>შეცდომა მონაცემების ჩატვირთვისას</div>;

  return (
    <div className="flex flex-col gap-[27px]">
      <h2 className="text-2xl font-medium leading-[28.64px] text-white">
        ამინდი საათების მიხედვით
      </h2>
      <div className="p-5 flex items-center justify-between w-[756px] h-[177px] rounded-2xl bg-[#B5B5B566] mb-[52px]">
        {weatherData.map((data, index) => (
          <WeatherBox key={index} {...data} />
        ))}
        <div>
          <img
            className="w-[43.08px] h-[43.08px]"
            src={BackIcon}
            alt="back-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
