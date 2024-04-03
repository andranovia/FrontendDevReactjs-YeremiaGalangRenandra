"use client";

import React from "react";
import NavigationCheckbox from "./NavigationCheckbox";
import NavigationPrice from "./NavigationPrice";
import NavigationCategory from "./NavigationCategory";

const Navigation = () => {
  return (
    <div className="w-full lg:px-20 ">
      <div className="flex flex-col items-start text-primary">
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4">
          <h1 className="text-lg font-semibold lg:text-nowrap">Filter by</h1>
          <div className="grid lg:grid-cols-4 grid-cols-2 items-start gap-4 w-full text-center">
            <NavigationCheckbox />
            <NavigationPrice />
            <NavigationCategory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
