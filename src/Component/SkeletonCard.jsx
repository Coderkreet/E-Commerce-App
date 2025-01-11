import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse mx-auto flex flex-col bg-gray-200 rounded-md w-72 h-96 p-4">
      <div className="h-48 bg-gray-300 rounded"></div>
      <div className="h-6 bg-gray-400 mt-4 rounded w-3/4"></div>
      <div className="h-6 bg-gray-300 mt-2 rounded w-1/2"></div>
      <div className="h-6 bg-gray-400 mt-2 rounded w-1/3"></div>
    </div>
  );
};

export default SkeletonCard;
