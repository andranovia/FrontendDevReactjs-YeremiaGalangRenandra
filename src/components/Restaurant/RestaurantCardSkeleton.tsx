import Image from "next/image";
import React from "react";

const RestaurantCardSkeleton = () => {
  return (
    <div className="flex  h-[12rem] lg:w-[16rem] lg:h-[18rem] flex-col items-start rounded-lg bg-gray-200 shadow-sm pb-2 animate-pulse">
      <div className="rounded-md   w-full h-full bg-gray-300"></div>
      <div className="flex flex-col items-start gap-2 mt-2 w-full px-2">
        <div className="w-1/2 lg:w-3/4 h-4 bg-gray-300 rounded"></div>
        <div className="flex justify-center items-center">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-4 h-4 bg-gray-300 rounded-full"></div>
          ))}
        </div>
        <div className="flex justify-between w-full mt-2 items-center pr-2">
          <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
          <div className="flex justify-center items-center gap-2">
            <div className="w-6 lg:w-12 h-4 bg-gray-300 rounded-full"></div>
            <div className="rounded-full bg-gray-300 h-2 w-2"></div>
          </div>
        </div>
      </div>
      <div className="w-full px-2 text-center">
        <div className="text-white bg-gray-300 py-2 lg:py-4 rounded-sm mt-2"></div>
      </div>
    </div>
  );
};

export default RestaurantCardSkeleton;
