import React from "react";
import { motion } from "framer-motion";

const Charter = () => {
  return (
    <div className="min-h-[50vh] bg-white text-center py-16 px-4 md:px-8">
      {/* Subheading animation from top */}
      <motion.h2
        className="text-red-600 text-sm md:text-lg font-semibold tracking-wider"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        FIXED WING CHARTER
      </motion.h2>

      {/* Main heading animation from top */}
      <motion.h1
        className="text-2xl md:text-4xl font-bold text-gray-900 mt-2"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Fixed Wing Aircraft Services
      </motion.h1>

      {/* Content Wrapper with staggered animations */}
      <div className="max-w-4xl mx-auto">
        {/* First paragraph animation from bottom */}
        <motion.p
          className="mt-6 text-gray-600 text-base md:text-lg px-2 md:px-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Fixed-wing charters are aircraft that have wings fixed in one place. These 
          aircraft are faster than helicopters, saving time and reaching locations that 
          are less accessible for helicopters, providing a much more efficient way of travel.
        </motion.p>

        {/* Second paragraph animation from bottom */}
        <motion.p
          className="mt-6 text-gray-600 text-base md:text-lg px-2 md:px-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        >
          Air Chardham provides Fixed Wing Aircraft services for a variety of 
          situations, including business travel, pleasure travel, and medical travel.
        </motion.p>
      </div>
    </div>
  );
};

export default Charter;
