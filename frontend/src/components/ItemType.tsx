import React from "react";
import { ReactNode } from "react";

interface ItemTypeProp {
    item: string;
    icon: ReactNode;
    onClick: () => void;
    clickable?: boolean;
}

const ItemType = ({ item, icon, onClick, clickable = true }: ItemTypeProp) => {
  return (
    <button onClick={onClick} className="btn-outline border-2 w-[301px] p-3 h-auto rounded-md mt-4">
      <div className="flex items-center justify-start">
        {icon}
        <p className="text-xl ml-4 text-left">{item}</p>
      </div>
    </button>
  )
}

export default ItemType