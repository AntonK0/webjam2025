import { RiCollapseDiagonalFill } from "@remixicon/react";

interface CollapseButtonProps {
  onClick: () => void;
}

const CollapseButton = ({ onClick }: CollapseButtonProps) => {
  return (
    <button onClick={onClick}>
      <RiCollapseDiagonalFill size="33px" />
    </button>
  );
};

export default CollapseButton;
