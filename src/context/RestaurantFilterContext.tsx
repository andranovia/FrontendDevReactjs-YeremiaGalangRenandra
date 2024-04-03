"use client";

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Filter = {
  openFilter: boolean;
  setOpenFilter: Dispatch<SetStateAction<boolean>>;
  categoryFilter: string;
  setCategoryFilter: Dispatch<SetStateAction<string>>;
  priceFilter: string;
  setPriceFilter: Dispatch<SetStateAction<string>>;
};

export const RestaurantFilterContext = createContext<Filter | undefined>(
  undefined
);

export const RestaurantFilterProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  const contextValue: Filter = {
    openFilter,
    setOpenFilter,
    categoryFilter,
    setCategoryFilter,
    priceFilter,
    setPriceFilter,
  };

  return (
    <RestaurantFilterContext.Provider value={contextValue}>
      {children}
    </RestaurantFilterContext.Provider>
  );
};

export const useRestaurantFilter = () => {
  const context = useContext(RestaurantFilterContext);
  if (!context) {
    throw new Error(
      "useRestaurantFilter must be used within a RestaurantFilterProvider"
    );
  }
  return context;
};
