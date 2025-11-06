import React from 'react';

const LogoutHeader: React.FC = () => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl font-bold">SnapRec</h1>
      <button className="btn btn-outline border-2">
        <p className="text-base">Logout</p>
      </button>
    </div>
  );
};

export default LogoutHeader;