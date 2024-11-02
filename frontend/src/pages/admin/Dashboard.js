import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-gray-50 relative">
      <div className="h-[69px] w-full"></div>
      <div className="p-4 border-b w-full bg-gray-50 flex items-center fixed top-0">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
