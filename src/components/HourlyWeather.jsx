import React from 'react';
import Sun from '../assets/icons/sun.png';
import StarryMoon from '../assets/icons/starry-moon.png';
import Moon from '../assets/icons/moon.png';
import BackIcon from '../assets/icons/back.png';

const HourlyWeather = () => {
  return (
    <div className="flex flex-col gap-[27px]">
      <h2 className="text-2xl font-medium leading-[28.64px] text-white">
        ამინდი საათების მიხედვით
      </h2>
      <div className="p-5 flex items-center justify-between w-[756px] h-[177px] rounded-2xl bg-[#B5B5B566]">
        <WeatherBox time="ახლა" icon={Sun} temp="31" />
        <WeatherBox time="16:00" icon={Sun} temp="29" />
        <WeatherBox time="17:00" icon={Sun} temp="31" />
        <WeatherBox time="18:00" icon={Sun} temp="31" />
        <WeatherBox time="19:00" icon={Sun} temp="31" />
        <WeatherBox time="20:00" icon={Sun} temp="31" />
        <WeatherBox
          time="21:00"
          icon={StarryMoon}
          temp="31"
          iconClass="w-[44.21px] h-9"
        />
        <WeatherBox
          time="22:00"
          icon={Moon}
          temp="31"
          iconClass="w-9 h-[37.37px]"
        />
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

const WeatherBox = ({ time, icon, temp, iconClass = "w-9 h-9" }) => (
  <div className="flex flex-col items-center gap-2.5">
    <span className="text-lg leading-[21.48px] text-[#D7D7D7]">{time}</span>
    <img className={iconClass} src={icon} alt={`weather-${time}`} />
    <span className="text-2xl leading-[28.64px] text-white">
      {temp}
      <sup>o</sup>
    </span>
  </div>
);

export default HourlyWeather;
