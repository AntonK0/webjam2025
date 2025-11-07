import React from 'react';
import { RiArrowRightLine } from "@remixicon/react";

interface LandingPageButtonProps {
  onClick: () => void;
}

const LandingPageButton = ({ onClick }: LandingPageButtonProps) => {
  return (
  <div className="flex justify-center ">
    <button 
      onClick={onClick} 
      className="h-[44px] bg-linear-to-r from-[#FCCDF9] to-[#7E9CF6] border-2 border-black rounded-lg flex items-center justify-between px-6 hover:opacity-90 transition-opacity"
    >
      <span className="text-base font-medium mr-2 text-black">Find your perfect product</span>
      <RiArrowRightLine size={20} className="text-black" />
    </button>
  </div>
  );
};

export default LandingPageButton;
