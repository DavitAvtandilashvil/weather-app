import React, { useEffect, useState } from "react";
import sunIcon from "../assets/icons/filled-sun.svg";
import SingleDayWeatherComponent from "./SingleDayWeatherComponent";
import ButtonComp from "./ButtonComp";
import calendarIcon from "../assets/icons/calendar-icon.svg";
import Calendar from "./Calendar";
import useDailyWeather from "../hooks/useDailyWeather";

const testArray = [
  {
    date: "14 September",
    dayName: "Monday",
    tempIcon: sunIcon,
    dayTemp: 32,
    nightTemp: 18,
  },
  {
    date: "15 September",
    dayName: "Tuesday",
    tempIcon: sunIcon,
    dayTemp: 30,
    nightTemp: 20,
  },
  {
    date: "16 September",
    dayName: "Wednesday",
    tempIcon: sunIcon,
    dayTemp: 28,
    nightTemp: 19,
  },
  {
    date: "17 September",
    dayName: "Thursday",
    tempIcon: sunIcon,
    dayTemp: 26,
    nightTemp: 17,
  },
  {
    date: "18 September",
    dayName: "Friday",
    tempIcon: sunIcon,
    dayTemp: 31,
    nightTemp: 21,
  },
  {
    date: "18 September",
    dayName: "Friday",
    tempIcon: sunIcon,
    dayTemp: 31,
    nightTemp: 21,
  },
  {
    date: "18 September",
    dayName: "Friday",
    tempIcon: sunIcon,
    dayTemp: 31,
    nightTemp: 21,
  },
];

const WeekWeatherWidget = () => {

  const { data } = useDailyWeather()


  if(data){

    console.log(data);
  }

  return (
    <div className="w-[492px] flex flex-col gap-[28px] items-center">
      {/* widget title and calendar */}
      <div className="w-full flex items-center justify-between">
        <h2 className="text-[24px] leading-[28px] font-[500] text-[#ffffff]">
          კვირის ამინდი
        </h2>

        <div className="relative">
          <span className="absolute">
            <Calendar />
          </span>
          <img src={calendarIcon} className="cursor-pointer" />
        </div>
      </div>

      {/* weather grid */}
      <div className="grid grid-cols-3 gap-[18px]">
        {data?.timelines.daily.map((item, index) => {
          return (
            <SingleDayWeatherComponent
              key={index}
              date={item.time}
              dayName={item.time}
              dayTemp={item.values.temperatureAvg}
              nightTemp={item.values.temperatureMin}
              tempIcon={item.tempIcon}
            />
          );
        })}
      </div>

      {/* load more btn */}
      <ButtonComp text="1 თვის პროგნოზი" />
    </div>
  );
};

export default WeekWeatherWidget;
