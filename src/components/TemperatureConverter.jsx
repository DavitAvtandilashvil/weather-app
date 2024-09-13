import React, { useState } from 'react';

const TemperatureToggle = ({ onScaleChange }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleToggle = () => {
    setIsCelsius(!isCelsius);
    onScaleChange(isCelsius ? 'F' : 'C');
  };

  return (
    <div
      className="relative flex items-center pl-2"
      style={{ width: '80px', height: '32px' }}
    >
      <span
        className={`absolute left-0 text-${
          isCelsius ? 'white' : 'black'
        } font-bold`}
        style={{ left: '10px' }}
      >
        °C
      </span>

      <span
        className={`absolute right-0 text-${
          !isCelsius ? 'white' : 'black'
        } font-bold`}
        style={{ right: '10px' }}
      >
        °F
      </span>

      <div
        onClick={handleToggle}
        className={`relative inline-block w-20 h-10 cursor-pointer rounded-full`}
        style={{
          backgroundColor: '#D9D9D9B2',
          transition: 'background-color 0.3s',
        }}
      >
        <div
          className={`absolute top-1 flex items-center justify-center w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
            isCelsius
              ? 'bg-black translate-x-0 text-white'
              : 'bg-black translate-x-10 text-white'
          }`}
          style={{
            color: '#FFFF',
            left: isCelsius ? '1px' : 'calc(50% - 2.5rem)',
          }}
        >
          <span className="text-white text-xs font-bold">
            {isCelsius ? '°C' : '°F'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureToggle;
