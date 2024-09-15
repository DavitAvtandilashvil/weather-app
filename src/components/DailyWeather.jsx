import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Map from '../components/Map';

const fetchWeather = async (city) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await axios.get(
    `https://api.tomorrow.io/v4/weather/forecast?location=${city}&apikey=${apiKey}`,
    options
  );

  if (response.status !== 200) {
    throw new Error('Network response was not ok');
  }

  const data = response.data;
  console.log(data);
  return data;
};

const DailyWeather = ({ city }) => {
  const [showLocation, setShowLocation] = useState(false);

  const { data, isLoading, isError } = useQuery(
    ['weatherData', city],
    () => fetchWeather(city),
    {
      enabled: !!city,
      staleTime: 300000,
      cacheTime: 3600000,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  // Getting date
  const date = data?.timelines?.daily[0]?.time
    ? new Date(data.timelines.daily[0].time).toLocaleDateString('ka-GE', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'There is no data';

  // Getting weather conditions
  const condition = data?.timelines?.hourly[0]?.values?.weatherCode
    ? getWeatherCondition(data.timelines.hourly[0].values.weatherCode)
    : 'There is no data';

  // Getting the temperature
  const temperature = data?.timelines?.hourly[0]?.values?.temperature
    ? Math.round(data.timelines.hourly[0].values.temperature)
    : 'N/A';

  // Weather code description
  function getWeatherCondition(code) {
    const conditions = {
      1000: 'მზიანი',
      1001: 'ღრუბლიანი',
      1100: 'ნაწილობრივ ღრუბლიანი',
      1101: 'ნაწილობრივ ღრუბლიანი',
      1102: 'ძალიან ღრუბლიანი',
      2000: 'ნისლიანი',
      4000: 'წვიმა',
      5000: 'თოვლი',
    };
    return conditions[code] || 'Unknown condition';
  }

  // Display only the name of the city
  const cityName = data?.location?.name.split(',')[0];

  // Extract latitude and longitude for the map
  const latitude = data?.location?.lat;
  const longitude = data?.location?.lon;
  const locationData = {
    center: { lat: latitude, lon: longitude },
  };

  const handleLocationClick = () => {
    setShowLocation(!showLocation);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-[28px] leading-[33.41px] font-medium mb-[27px] text-white">
        დღის პროგნოზი
      </h1>
      <div className="p-10 flex justify-between w-[756px] h-[206.79px] rounded-2xl bg-[#00000066] mb-2.5">
        <div className="flex flex-col gap-3">
          <h2 className="text-[40px] leading-[47.73px] font-medium text-white">
            {cityName}
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
      {showLocation && (
        <div className="mt-4">
          <Map center={locationData.center} />
        </div>
      )}
    </div>
  );
};

export default DailyWeather;
