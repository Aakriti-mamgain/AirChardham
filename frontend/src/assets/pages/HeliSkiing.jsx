import React from "react";
import { motion } from "framer-motion";

const HeliSkiing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 py-12">
      {/* Animated Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        Helicopter Skiing
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        In traditional skiing, reaching remote locations required long hikes. 
        With helicopters, this thrilling adventure is now more accessible. 
        Flying above 5000m, Heli-Skiing offers the ultimate adrenaline rush.
      </motion.p>

      {/* Animated Subheading */}
      <motion.h2
        className="mt-8 text-xl md:text-2xl font-semibold text-gray-800"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
      >
        Popular Destinations for Heli-Skiing in India
      </motion.h2>

      {/* Animated List */}
      <motion.ul
        className="mt-4 space-y-3 text-gray-700 text-base md:text-lg"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 1, ease: "easeOut", staggerChildren: 0.2 },
          },
        }}
      >
        {["Manali", "Gulmarg", "Pahalgam", "Solang Nala", "Munsiyari"].map((location, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1, color: "#D32F2F" }}
            className="cursor-pointer transition duration-300"
          >
            • {location}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default HeliSkiing;
