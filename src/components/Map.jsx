import React from 'react';
import MapImage from '../assets/images/map.png';

const Map = ({ center, zoom }) => {
  return (
    <div className="w-[756px] h-[500px] bg-gray-200 mb-[10px] flex items-center justify-center relative">
      <img
        src={MapImage}
        alt="Map image"
        className="w-full h-full object-cover"
      />
      <div className="absolute bg-white p-2 rounded shadow">
        <p>{JSON.stringify(center)}</p>
        <p>{zoom}</p>
      </div>
    </div>
  );
};

export default Map;
