import React, { useState } from "react";
import { AnimatePresence, useAnimation, motion } from "framer-motion";
import { useCategory } from "@/hooks/useCategory";
import { useRestaurantFilter } from "@/context/RestaurantFilterContext";

const NavigationCategory = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownControls = useAnimation();
  const { categories } = useCategory();
  const { categoryFilter, setCategoryFilter } = useRestaurantFilter();

  const handleOpenDropdown = () => {
    dropdownControls.start("animate");
    setShowDropdown(true);
  };

  const handleCloseDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div
      onMouseEnter={() => handleOpenDropdown()}
      onMouseLeave={() => handleCloseDropdown()}
      className="lg:py-2  mt-4 lg:mt-0 py-3 col-span-2  border-[1px] border-primary rounded-lg"
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
              className="mt-14 z-20 relative rounded-b-[10px] rounded-r-[10px] bg-white w-72 shadow-lg overflow-hidden"
            >
              <div className="flex flex-col items-start p-4 gap-2 ">
                <h2 className="text-xs mb-4">category</h2>
                <div className="grid grid-cols-3 gap-2 w-full">
                  {categories?.map((category, index) => (
                    <React.Fragment key={index}>
                      <span
                        onClick={() => setCategoryFilter(category.name)}
                        className={` py-2 text-sm  ${
                          categoryFilter === category.name
                            ? "text-primary"
                            : "text-gray-400"
                        } rounded-md  cursor-pointer `}
                      >
                        {category.name}
                      </span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <h2 className="cursor-pointer">Category</h2>
    </div>
  );
};

export default NavigationCategory;
