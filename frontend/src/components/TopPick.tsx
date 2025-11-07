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
      className="relative w-full h-[150px] sm:h-[280px] md:h-[310px] lg:h-[400px] rounded-2xl p-4 sm:rounded-3xl lg:rounded-[32px] bg-linear-to-r from-[#fccdf9] to-[#7e9cf6] overflow-hidden"
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

      {/* Content Container*/}
      <div className="pr-6 flex flex-col gap-1">
        {/* Product Name */}
        <h3 className="font-semibold text-xl leading-tight text-black">
          {productName}
        </h3>

        {/* Product Description */}
        <p className="font-normal text-xs sm:text-base leading-normal text-black">
          {productDescription}
        </p>
      </div>
    </div>
  );
};

export default TopPick;

