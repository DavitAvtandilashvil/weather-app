import React from "react";

const ButtonComp = ({ text }) => {
  return (
    <button className="w-[276px] h-[56px] flex items-center justify-center bg-primaryColor rounded-[64px]">
      <p className="font-[500] text-[18px] leading-[21px] tetx-[#000000]">
        {text}
      </p>
    </button>
  );
};

export default ButtonComp;
