import React from "react";
import { motion } from "framer-motion";

const PoliticalFlying = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12">
      {/* Animated Subheading */}
      <motion.h2
        className="text-red-600 text-sm md:text-lg font-semibold tracking-wider"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        POLITICAL FLYING
      </motion.h2>

      {/* Animated Heading */}
      <motion.h1
        className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Political Flying Services
      </motion.h1>

      {/* Animated First Paragraph */}
      <motion.p
        className="max-w-3xl mx-auto mt-6 text-gray-600 text-base md:text-lg text-center leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        With our impressive fleet of advanced helicopters and experienced pilots, 
        we offer flying services during election seasons. Our punctual and well-managed team 
        provides services including candidate transportation, aerial surveys, rural area flyovers 
        to boost voter turnout, and election monitoring.
      </motion.p>

      {/* Animated Second Paragraph */}
      <motion.p
        className="max-w-3xl mx-auto mt-6 text-gray-600 text-base md:text-lg text-center leading-relaxed"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
      >
        Helicopters are the most efficient transportation mode during election season, 
        saving valuable time for political campaigns. They also provide a safer travel 
        alternative, avoiding road congestion and ensuring timely arrivals at crucial events.
      </motion.p>

      {/* Animated CTA Button */}
      <motion.button
        className="mt-8 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md 
        hover:bg-red-700 transition duration-300"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        Learn More
      </motion.button>
    </div>
  );
};

export default PoliticalFlying;
