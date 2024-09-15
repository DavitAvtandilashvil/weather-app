import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.tomorrow.io/v4/weather/forecast';

const fetchClimateData = async (city) => {
  try {
    const response = await axios.get(
      `${API_URL}?location=${city}&apikey=${apiKey}`
    );

    const data = response.data;

    const humidity = data?.timelines?.hourly?.[0]?.values?.humidity || 'N/A';
    const feelsLike =
      data?.timelines?.hourly?.[0]?.values?.temperatureApparent || 'N/A';

    return [
      { title: 'ტენიანობა', value: `${humidity}%`, unit: '' },
      {
        title: 'მგრძნობელობა',
        value: feelsLike !== 'N/A' ? Math.round(feelsLike) : 'N/A',
        unit: feelsLike !== 'N/A' ? 'o' : '',
      },
    ];
  } catch (error) {
    console.error('Error fetching climate data:', error);
    throw new Error('Failed to fetch climate data');
  }
};

const ClimateIndicators = ({ city }) => {
  const {
    data: indicators,
    isLoading,
    isError,
    error,
  } = useQuery(['climateData', city], () => fetchClimateData(city), {
    staleTime: 300000,
    cacheTime: 3600000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data: {error.message}</div>;

  return (
    <div className="flex items-center gap-8">
      {indicators.map((indicator, index) => (
        <div
          key={index}
          className="w-[362px] h-[200px] flex flex-col gap-7 rounded-2xl bg-[#B5B5B566] pt-[33px] pr-[59px] pb-[40px] pl-[48px]"
        >
          <h4 className="text-2xl font-medium text-white">{indicator.title}</h4>
          <h2 className="text-[55px] leading-[65.63px] text-white relative">
            {indicator.value}
            {indicator.unit && (
              <sup className="text-[40%] absolute top-4">{indicator.unit}</sup>
            )}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default ClimateIndicators;
