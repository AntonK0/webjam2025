import { RiArrowRightLine } from "@remixicon/react";

interface NextProps {
  onClick: () => void;
}

const Next = ({ onClick }: NextProps) => {
  return (
    <button onClick={onClick} className="btn btn-outline border-2">
      <div className="w-28 flex justify-between">
        <p className="text-base">Next</p>
        <RiArrowRightLine size="24px" />
      </div>
    </button>
  );
};

export default Next;
