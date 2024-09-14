import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Map from '../components/Map';

const weatherData = {
  city: 'თბილისი',
  date: '14 სექტემბერი, ორშაბათი',
  condition: 'მზიანი',
  temperature: 31,
};

const fetchMapData = async () => {
  // API მოთხოვნა რუკის მონაცემების მისაღებად
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        center: { lat: 41.697102, lng: 44.773674 },
        zoom: 12,
      });
    }, 1000);
  });
};

const DailyWeather = () => {
  const { city, date, condition, temperature } = weatherData;
  const [showMap, setShowMap] = useState(false);

  const {
    data: mapData,
    isLoading,
    isError,
  } = useQuery('mapData', fetchMapData, {
    enabled: showMap,
  });

  const handleLocationClick = () => {
    setShowMap(!showMap);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-[28px] leading-[33.41px] font-medium mb-[27px] text-white">
        დღის პროგნოზი
      </h1>
      <div className="p-10 flex justify-between w-[756px] h-[206.79px] rounded-2xl bg-[#00000066] mb-2.5">
        <div className="flex flex-col gap-3">
          <h2 className="text-[40px] leading-[47.73px] font-medium text-white">
            {city}
          </h2>
          <h3 className="text-2xl leading-[28.64px] text-white">{date}</h3>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-2xl leading-[28.64px] text-right text-white">
            {condition}
          </h2>
          <h3 className="text-[72px] leading-[85.92px] text-right text-white relative">
            {temperature}
            <sup className="text-[40%] absolute top-6 right-[-0.45em]">o</sup>
          </h3>
        </div>
      </div>
      <button
        className="w-[245px] text-base leading-[19.09px] ml-3 mb-[50px] text-white 
                   transition-all duration-300 ease-in-out
                   hover:border-b hover:border-white
                   active:border-b active:border-white
                   focus:outline-none"
        onClick={handleLocationClick}
      >
        ჩემი ახლანდელი მდებარეობა
      </button>
      {showMap && (
        <div className="mt-4">
          {isLoading ? (
            <p>იტვირთება რუკა...</p>
          ) : isError ? (
            <p>შეცდომა რუკის ჩატვირთვისას</p>
          ) : (
            <Map center={mapData.center} zoom={mapData.zoom} />
          )}
        </div>
      )}
    </div>
  );
};

export default DailyWeather;
