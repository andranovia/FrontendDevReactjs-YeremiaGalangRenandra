"use client";

import React from "react";
import NavigationCheckbox from "./NavigationCheckbox";
import NavigationPrice from "./NavigationPrice";
import NavigationCategory from "./NavigationCategory";
import { useRestaurantFilter } from "@/context/RestaurantFilterContext";

const Navigation = () => {
  const { setCategoryFilter, setOpenFilter, setPriceFilter } =
    useRestaurantFilter();

  const handleClearFilter = () => {
    setCategoryFilter("");
    setOpenFilter(false);
    setPriceFilter("");
  };

  return (
    <div className="w-full lg:px-20 ">
      <div className="flex flex-col items-start text-primary">
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
          <h1 className="text-lg font-semibold lg:text-nowrap">Filter by</h1>
          <div className="grid lg:grid-cols-5 grid-cols-2 lg:items-center items-start gap-4 w-full text-center">
            <NavigationCheckbox />
            <NavigationPrice />
            <NavigationCategory />
            <div
              onClick={() => handleClearFilter()}
              className="bg-primary text-md cursor-pointer col-span-2 lg:col-span-1 w-full h-full py-2 lg:py-0 rounded-xl text-white flex flex-col justify-center"
            >
              clear
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
