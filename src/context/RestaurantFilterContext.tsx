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
};

export const RestaurantFilterContext = createContext<Filter | undefined>(
  undefined
);

export const RestaurantFilterProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const contextValue: Filter = {
    openFilter,
    setOpenFilter,
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
