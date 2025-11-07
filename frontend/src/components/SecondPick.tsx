import { RiExpandDiagonalFill } from '@remixicon/react';
import React from 'react';

interface ProductCardMobileProps {
  productName: string;
  productDescription: string;
  onExpand?: () => void;
}

const ProductCardMobile: React.FC<ProductCardMobileProps> = ({ 
  productName, 
  productDescription,
  onExpand 
}) => {
  const expandIcon = "http://localhost:3845/assets/dbbb263b2e17194dc87b625234c2a5e6aaa8361e.svg";

  return (
    <div 
      className="relative w-full border-[#a582d3] border-[3px] border-solid rounded-[16px] bg-white p-4 min-h-[100px]"
      data-name="Product Card Mobile"
    >
      {/* Expand button - top right corner */}
      
      {onExpand && ( 
        <button
          onClick={onExpand}
          className="absolute top-3 right-3 w-4 h-4 cursor-pointer transition-opacity hover:opacity-70 z-10"
          aria-label="Expand"
        >
          <RiExpandDiagonalFill className='w-4 h-4' color='black'/>
        </button>
      )}

      {/* Content Container */}
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

export default ProductCardMobile;

