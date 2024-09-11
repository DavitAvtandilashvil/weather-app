import React from 'react';

const DailyWeather = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[28px] leading-[33.41px] font-medium mb-[27px] text-white">
        დღის პროგნოზი
      </h1>
      <div className="p-10 flex justify-between w-[756px] h-[206.79px] rounded-2xl bg-[#B5B5B566] mb-2.5">
        <div className="flex flex-col gap-3">
          <h2 className="text-[40px] leading-[47.73px] font-medium text-white">
            ბათუმი
          </h2>
          <h3 className="text-2xl leading-[28.64px] text-white">
            14 სექტემბერი, ორშაბათი
          </h3>
        </div>
        <div className="flex flex-col items-end">
          <h2 className="text-2xl leading-[28.64px] text-right text-white">
            მზიანი
          </h2>
          <h3 className="text-[72px] leading-[85.92px] text-right text-white relative">
            31<sup className="text-[40%] absolute top-6 right-[-0.45em]">o</sup>
          </h3>
        </div>
      </div>
      <h4 className="w-[245px] text-base leading-[19.09px] ml-3 mb-[50px] text-white border-b border-white">
        ჩემი ახლანდელი მდებარეობა
      </h4>
    </div>
  );
};

export default DailyWeather;
