"use client";

import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { useRestaurant } from "@/hooks/useRestaurant";
import { useRestaurantFilter } from "@/context/RestaurantFilterContext";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

const RestaurantList = () => {
  const { restaurants, isLoading } = useRestaurant();
  const { openFilter, categoryFilter, priceFilter } = useRestaurantFilter();
  const [showAllRestaurants, setShowAllRestaurants] = useState(false);

  const handleShowMore = () => {
    setShowAllRestaurants(!showAllRestaurants);
  };
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
    <div className="w-full lg:px-20  flex flex-col  items-center pt-10 lg:mt-10 text-primary">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center w-full">
        {isLoading
          ? Array.from({ length: 4 }, (_, index) => (
              <RestaurantCardSkeleton key={index} />
            ))
          : restaurantsData
              ?.slice(0, showAllRestaurants ? restaurantsData.length : 8)
              .map((restaurant, index) => (
                <React.Fragment key={index}>
                  <RestaurantCard restaurantData={restaurant} />
                </React.Fragment>
              ))}
      </div>
      {categoryFilter || openFilter || priceFilter ? null : (
        <div className="my-20 w-1/3">
          {!showAllRestaurants ? (
            <button
              className="w-full py-2 border-2 border-primary uppercase text-primary rounded-md"
              onClick={handleShowMore}
            >
              Show More
            </button>
          ) : (
            <button
              className="w-full py-2 border-2 border-primary uppercase text-primary rounded-md"
              onClick={handleShowMore}
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
