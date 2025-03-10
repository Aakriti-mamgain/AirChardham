import React from "react";
import { motion } from "framer-motion";

const AirAmbulance = () => {
  return (
    <div className="min-h-[50vh] bg-white text-center py-12 px-4 flex flex-col justify-center">
      {/* Subheading with Line */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex items-center justify-center gap-3 text-red-600 text-sm sm:text-lg font-semibold tracking-wider"
      >
        <span className="w-6 sm:w-8 h-[2px] bg-blue-900"></span>
        AIR AMBULANCE SERVICES
        <span className="w-6 sm:w-8 h-[2px] bg-blue-900"></span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3"
      >
        Air Ambulance Services in India
      </motion.h1>

      {/* Paragraph Content */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed px-2 sm:px-6"
      >
        Air Chardham is proud to share that we are also operating Air Ambulance services
        with the help of our highly capable fleet of helicopters. Air Ambulances are the
        fastest way to take patients in serious need from one place to the other. We always
        believed that we could do way more with our fleet than just arranging trips. Now Air
        Chardham is at a stage of its journey that we can be a very crucial part of this sacred duty.
      </motion.p>
    </div>
  );
};

export default AirAmbulance;
