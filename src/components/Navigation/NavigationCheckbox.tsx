import { useRestaurantFilter } from "@/context/RestaurantFilterContext";
import React from "react";

const NavigationCheckbox = () => {
  const { setOpenFilter, openFilter } = useRestaurantFilter();

  return (
    <div className="px-4 py-3  gap-2  rounded-lg flex justify-center items-center">
      <input
        id="open-checkbox"
        type="checkbox"
        checked={openFilter}
        onChange={(e) => setOpenFilter(e.target.checked)}
        className="w-4 h-4 rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
      />
      <h2>Open now</h2>
    </div>
  );
};

export default NavigationCheckbox;
