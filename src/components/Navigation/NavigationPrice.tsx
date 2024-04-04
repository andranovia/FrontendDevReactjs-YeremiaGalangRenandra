import React, { useState } from "react";
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useRestaurantFilter } from "@/context/RestaurantFilterContext";

const NavigationPrice = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { priceFilter, setPriceFilter } = useRestaurantFilter();
  const dropdownControls = useAnimation();

  const handleOpenDropdown = () => {
    dropdownControls.start("animate");
    setShowDropdown(true);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  const prices = ["$$$$", "$$$", "$$", "$"];

  return (
    <div
      onMouseEnter={() => handleOpenDropdown()}
      onMouseLeave={() => handleCloseDropdown()}
      className="lg:py-2  py-3 w-full  border-[1px] border-primary rounded-lg"
    >
      <AnimatePresence>
        {showDropdown && (
          <div className="absolute">
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                initial: { opacity: 0.5, scale: 0.85, y: 10 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, y: 10 },
              }}
              className="mt-14 z-20 relative rounded-b-[10px] rounded-r-[10px] bg-white w-36 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col items-start p-4 gap-2 ">
                <h2 className="text-xs mb-4">Range Price</h2>
                {prices.map((price, index) => (
                  <span
                    key={index}
                    onClick={() => setPriceFilter(price)}
                    className={`${
                      priceFilter === price ? "bg-slate-100" : "bg-white"
                    }  px-4 py-2 rounded-md w-full cursor-pointer`}
                  >
                    {price}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <h2 className="cursor-pointer">Price</h2>
    </div>
  );
};

export default NavigationPrice;
