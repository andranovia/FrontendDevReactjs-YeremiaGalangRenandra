"use client";

import { UserData } from "@/hooks/useAuth";

import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type User = {
  userData: UserData | undefined;
  setUserData: Dispatch<SetStateAction<UserData>>;
};

export const UserContext = createContext<User | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<UserData>(undefined);

  const contextValue = {
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserData must be used within a UserContextProvider");
  }
  return context;
};
