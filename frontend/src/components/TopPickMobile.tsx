import React from 'react';

interface TopPickMobileProps {
  productName: string;
  productDescription: string;
  productImage?: string;
  onExpand?: () => void;
}

const TopPickMobile: React.FC<TopPickMobileProps> = ({ 
  productName, 
  productDescription, 
  productImage,
  onExpand 
}) => {
  const expandIcon = "http://localhost:3845/assets/dbbb263b2e17194dc87b625234c2a5e6aaa8361e.svg";

  return (
    <div 
      className="relative w-full h-[150px] rounded-2xl bg-gradient-to-r from-[#fccdf9] to-[#7e9cf6] overflow-hidden"
      data-name="Top Pick Mobile"
    >
      {/* Expand button - top right corner */}
      {onExpand && (
        <button
          onClick={onExpand}
          className="absolute top-3 right-3 w-4 h-4 cursor-pointer transition-opacity active:opacity-70"
          aria-label="Expand"
        >
          <img 
            alt="Expand" 
            className="block w-full h-full" 
            src={expandIcon} 
          />
        </button>
      )}

      {/* Content Container - Left Side */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-0.5 max-w-[55%]">
        {/* Product Name */}
        <h3 className="font-bold text-xl leading-tight text-black">
          {productName}
        </h3>

        {/* Product Description */}
        <p className="font-normal text-xs leading-normal text-black">
          {productDescription}
        </p>
      </div>

      {/* Product Image - right side */}
      {productImage && (
        <div className="absolute top-1/2 -translate-y-1/2 right-3 w-20 h-20 bg-white rounded-lg shadow-lg p-2">
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

export default TopPickMobile;

