import React from "react";
import sunIcon from "../assets/icons/filled-sun.svg";
import dayTempIcon from "../assets/icons/dayTempIcon.svg";
import nightTempIcon from "../assets/icons/nightTempIcon.svg";
import useTimeConverter from "../hooks/useTimeConverter";
import useDayConverter from "../hooks/useDayConverter";

const SingleDayWeatherComponent = ({
  date,
  dayName,
  tempIcon,
  dayTemp,
  nightTemp,
}) => {
  const formattedDate = useTimeConverter(date);
  const formatedDay = useDayConverter(dayName);
  return (
    <div className="w-[152px] h-[184px] rounded-[12px] px-[8px] pt-[20px] pb-[14px] flex flex-col gap-[10px] bg-[#B3B3B366] text-white items-center">
      {/* day name and date */}
      <div className="flex flex-col gap-[5px]">
        <p className="leading-[19px] text-center">{formattedDate}</p>
        <p className="text-[12px] leading-[14px] text-lightGrey text-center">
          {formatedDay}
        </p>
      </div>

      {/* weather icon */}
      <img src={tempIcon} className="w-[40px]" />

      {/* temperatures */}
      <div className="flex gap-[12px] items-center">
        {/* day temp */}
        <div className="flex flex-col items-center">
          <p className="text-[28px] leading-[33px]">{dayTemp.toFixed(0)}&deg;</p>
          <img src={dayTempIcon} />
        </div>

        {/* divider */}
        <div className="h-[24px] w-[1px] bg-[#BEBEBE] -mt-[10px]" />

        {/* night temp */}
        <div className="flex flex-col items-center">
          <p className="text-[28px] leading-[33px]">{nightTemp.toFixed(0)}&deg;</p>
          <img src={nightTempIcon} />
        </div>
      </div>
    </div>
  );
};

export default SingleDayWeatherComponent;
