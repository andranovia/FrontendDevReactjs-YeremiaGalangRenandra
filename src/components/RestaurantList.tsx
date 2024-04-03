"use client";

import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useRestaurantFilter } from "@/context/RestaurantFilterContext";

const RestaurantList = () => {
  const { restaurants, isLoading } = useRestaurant();
  const { openFilter, categoryFilter, priceFilter } = useRestaurantFilter();

  let restaurantsData = restaurants;

  if (restaurantsData) {
    if (priceFilter) {
      restaurantsData = restaurantsData.filter(
        (item) => item.price === priceFilter
      );
    }

    if (categoryFilter && restaurantsData.length > 0) {
      restaurantsData = restaurantsData.filter((item) =>
        item.categories.some((category) => category.name === categoryFilter)
      );
    }

    if (openFilter && restaurantsData.length > 0) {
      restaurantsData = restaurantsData.filter((item) => item.open === true);
    }
  } else {
    null;
  }

  return (
    <div className="w-full lg:px-20  flex flex-col lg:items-start items-center pt-10 lg:mt-10 text-primary">
      <div className="grid grid-cols-2 gap-4 items-center">
        {restaurantsData?.map((restaurant, index) => (
          <React.Fragment key={index}>
            <RestaurantCard restaurantData={restaurant} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
