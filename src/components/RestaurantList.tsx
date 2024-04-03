"use client";

import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useRestaurant } from "@/hooks/useRestaurant";

const RestaurantList = () => {
  const { restaurants, isLoading } = useRestaurant();

  return (
    <div className="w-full lg:px-20  flex flex-col lg:items-start items-center pt-10 lg:mt-10 text-primary">
      <div className="grid grid-cols-2 gap-4 items-center">
        {restaurants?.map((restaurant, index) => (
          <React.Fragment key={index}>
            <RestaurantCard restaurantData={restaurant} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
