import React from 'react';
import { RiArrowRightLine } from "@remixicon/react";

interface NextProps {
  onClick: () => void;
}

const Next: React.FC<NextProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-outline border-2 rounded-xl">
      <div className="w-28 flex justify-between">
        <p className="text-base">Next</p>
        <RiArrowRightLine size="24px" />
      </div>
    </button>
  );
};

export default Next;
