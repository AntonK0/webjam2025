import React from 'react';

interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}

/**
 * Multi-select Chip component
 * - Transparent background when unselected
 * - Black background with white text when selected
 * - 2px solid black border
 * - 16px border radius
 */
const Chip: React.FC<ChipProps> = ({ label, selected = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        border-2 border-black rounded-2xl py-1 px-4 
        cursor-pointer transition-all duration-200 ease-in-out outline-none
        ${selected 
          ? 'bg-black text-white' 
          : 'bg-transparent text-black hover:bg-gray-100'
        }
      `}
      data-node-id="2030:293"
    >
      {label}
    </button>
  );
};

export default Chip;
