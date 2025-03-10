import React from "react";
import { motion } from "framer-motion";

const AirWedding = () => {
  return (
    <div className="min-h-[50vh] bg-white text-center py-12 px-4 flex flex-col justify-center">
      {/* Subheading animation from top */}
      <motion.h2
        className="text-red-600 text-sm sm:text-lg font-semibold tracking-wider"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        AIR WEDDINGS
      </motion.h2>

      {/* Main heading animation from top */}
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Air Wedding Services
      </motion.h1>

      {/* Animated paragraph container */}
      <div className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed px-2 sm:px-6 space-y-4">
        {/* First paragraph animation from bottom */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Marriage is the day that people want to make as the most memorable day of their lives.
          People do everything and anything to make it special for themselves and their soulmates.
        </motion.p>

        {/* Second paragraph animation from bottom */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We at Air Chardham are introducing Helicopter services for your auspicious days 
          to make this memorable event even more precious. Wedding planners are consistently 
          using this as their main offering nowadays, and people are also understanding the 
          effect of a grand entrance.
        </motion.p>

        {/* Third paragraph animation from bottom */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          With our impressive fleet of helicopters and our creativity skills, we can arrange 
          an occasion that will make a long-lasting impression and will remain in the hearts of everyone.
        </motion.p>
      </div>
    </div>
  );
};

export default AirWedding;
