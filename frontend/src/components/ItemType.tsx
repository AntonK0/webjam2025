import { ReactNode } from "react";

interface ItemTypeProp {
    item: string;
    icon: ReactNode;
    onClick: () => void;
    clickable?: boolean;
}

const ItemType = ({ item, icon, onClick, clickable = true }: ItemTypeProp) => {
  return (
    <button onClick={onClick} className="btn btn-outline border-2 w-[301px] p-3 h-auto mt-4">
      <div className="flex">
        {icon}
        <p className="text-xl ml-4">{item}</p>
      </div>
    </button>
  )
}

export default ItemType