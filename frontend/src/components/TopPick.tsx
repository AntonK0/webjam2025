import React from 'react';
import { RiExpandDiagonalFill } from '@remixicon/react';

interface TopPickProps {
  productName: string;
  productDescription: string;
  productImage?: string;
  onExpand?: () => void;
}

const TopPick: React.FC<TopPickProps> = ({ 
  productName, 
  productDescription, 
  productImage,
  onExpand 
}) => {
  return (
    <div 
      className="relative w-full h-[150px] sm:h-[280px] md:h-[310px] lg:h-[400px] rounded-2xl sm:rounded-3xl lg:rounded-[32px] bg-linear-to-r from-[#fccdf9] to-[#7e9cf6] overflow-hidden"
      data-name="Top Pick"
    >
      {/* Expand button - top right corner */}
      {onExpand && (
        <button
          onClick={onExpand}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 lg:top-8 lg:right-8 w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 cursor-pointer transition-opacity hover:opacity-70"
          aria-label="Expand"
        >
          <RiExpandDiagonalFill className='w-4 h-4' color='black'/>
        </button>
      )}

      {/* Content Container - Left Side */}
      <div className="absolute left-4 sm:left-6 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2 max-w-[55%] sm:max-w-[50%]">
        {/* Product Name */}
        <h3 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight text-black">
          {productName}
        </h3>

        {/* Product Description */}
        <p className="font-normal text-xs sm:text-base md:text-xl lg:text-[28px] leading-normal text-black">
          {productDescription}
        </p>
      </div>

      {/* Product Image - right side */}
      {productImage && (
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 md:right-10 lg:right-16 w-20 h-20 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-64 lg:h-64 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg p-2 sm:p-3 md:p-4 lg:p-6">
          <img
            alt={productName}
            className="w-full h-full object-contain"
            src={productImage}
          />
        </div>
      )}
    </div>
  );
};

export default TopPick;

