import { RiArrowRightLine } from "@remixicon/react";

interface LandingPageButtonProps {
  onClick: () => void;
}

const LandingPageButton = ({ onClick }: LandingPageButtonProps) => {
  return (
    <button onClick={onClick} className="btn btn-outline border-2">
      <div className="w-[247px] flex justify-between">
        <p className="text-base">Find your perfect product</p>
        <RiArrowRightLine size="24px" />
      </div>
    </button>
  );
};

export default LandingPageButton;
