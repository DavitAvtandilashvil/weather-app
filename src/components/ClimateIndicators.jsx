import React from 'react';
import { useQuery } from 'react-query';

const fetchClimateData = async () => {
  // API მოთხოვნა ტენიანობის და მგრძნობელობის მისაღებად
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { title: 'ტენიანობა', value: '36%', unit: '' },
          { title: 'მგრძნობელობა', value: '31', unit: 'o' },
        ]),
      1000
    )
  );
};

const ClimateIndicators = () => {
  const {
    data: indicators,
    isLoading,
    isError,
  } = useQuery('climateData', fetchClimateData);

  if (isLoading) return <div>იტვირთება...</div>;
  if (isError) return <div>შეცდომა მონაცემების ჩატვირთვისას</div>;

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
