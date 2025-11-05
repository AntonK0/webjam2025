import React from 'react';
import TopPick from './TopPick';

/**
 * Example usage of the TopPick component
 */
const TopPickExample: React.FC = () => {
  const handleExpand = () => {
    console.log('Expand clicked!');
    // Add your expansion logic here
  };

  return (
    <div className="bg-white p-8">
      <div className="max-w-6xl">
        <TopPick
          productName="Native Shampoo"
          productDescription="Moisture - Ocean Scent"
          productImage="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop"
          onExpand={handleExpand}
        />
      </div>
    </div>
  );
};

export default TopPickExample;

