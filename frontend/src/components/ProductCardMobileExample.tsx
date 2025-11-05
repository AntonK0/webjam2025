import React from 'react';
import ProductCardMobile from './SecondPick';

/**
 * Example usage of the ProductCardMobile component
 */
const ProductCardMobileExample: React.FC = () => {
  const handleExpand = () => {
    console.log('Expand clicked!');
    // Add your expansion logic here
  };

  return (
    <div className="bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        <ProductCardMobile
          productName="Native Shampoo"
          productDescription="Moisture - Ocean Scent"
          onExpand={handleExpand}
        />
      </div>
    </div>
  );
};

export default ProductCardMobileExample;

