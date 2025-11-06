import React from 'react';

const LogoutHeader: React.FC = () => {
  return (
    <div className="bg-white p-4">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">SnapRec</h1>
            <button className="btn bg-white border-0 shadow-none text-black">
                <p className="text-base">Logout</p>
            </button>
        </div>
    </div>
  );
};

export default LogoutHeader;