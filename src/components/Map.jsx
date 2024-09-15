import React from 'react';

const Map = ({ center, zoom }) => {
  return (
    <div className="mb-[10px] flex items-center justify-center relative">
      <div className="absolute bg-white p-2 rounded shadow">
        <p>გრძედი: {center.lat}</p>
        <p>განედი: {center.lon}</p>
      </div>
    </div>
  );
};

export default Map;
