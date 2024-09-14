import React from 'react';

const WeatherBox = ({ time, icon, temp, iconClass }) => {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <span className="text-lg leading-[21.48px] text-[#D7D7D7]">{time}</span>
      <img className={iconClass} src={icon} alt={`weather-${time}`} />
      <span className="text-2xl leading-[28.64px] text-white">
        {temp}
        <sup>o</sup>
      </span>
    </div>
  );
};

export default WeatherBox;
