import React from "react";
import sunIcon from "../assets/icons/filled-sun.svg";
import SingleDayWeatherComponent from "./SingleDayWeatherComponent";
import ButtonComp from "./ButtonComp";

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
  return (
    <div className="w-[492px] flex flex-col gap-[28px] items-center">
      {/* weather grid */}
      <div className="grid grid-cols-3 gap-[18px]">
        {testArray.map((item, index) => {
          return (
            <SingleDayWeatherComponent
              key={index}
              date={item.date}
              dayName={item.dayName}
              dayTemp={item.dayTemp}
              nightTemp={item.nightTemp}
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
