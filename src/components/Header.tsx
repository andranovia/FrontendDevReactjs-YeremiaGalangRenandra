"use client";

import { useUserData } from "@/context/UserContext";
import { useAuth } from "@/hooks/useAuth";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownControls = useAnimation();
  const { userData } = useUserData();
  const { logoutAction } = useAuth();

  const handleOpenDropdown = () => {
    dropdownControls.start("animate");
    setShowDropdown(true);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div className="px-6 lg:px-44 fixed z-50 flex justify-center items-center w-full bg-white  bg-opacity-60 backdrop-blur-sm">
      <div className="py-4 lg:py-8 flex justify-between items-center w-full ">
        <h1 className="font-semibold text-2xl">FoodFinder</h1>
        {userData ? (
          <>
            <div
              onMouseEnter={() => handleOpenDropdown()}
              onMouseLeave={() => handleCloseDropdown()}
            >
              <h1 className="text-primary cursor-pointer">{userData.name}</h1>
              <AnimatePresence>
                {showDropdown && (
                  <div className="absolute -ml-10 lg:-ml-0">
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={{
                        initial: { opacity: 0.5, scale: 0.85, y: 10 },
                        animate: { opacity: 1, scale: 1, y: 0 },
                        exit: { opacity: 0, y: 10 },
                      }}
                      className="mt-4 z-20 relative rounded-b-[10px] rounded-l-[10px] lg:rounded-tl-none lg:rounded-r-[10px] bg-primary text-white p-4   overflow-hidden"
                    >
                      <h2
                        onClick={() => logoutAction()}
                        className="cursor-pointer"
                      >
                        Logout
                      </h2>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <Link href={"/auth/login"}>
            <button className="py-2 text-white rounded-md px-4 bg-primary">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
