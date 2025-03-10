import React from "react";
import { motion } from "framer-motion";

const AirShooting = () => {
  return (
    <div className="min-h-[50vh] bg-white text-center py-12 px-4 flex flex-col justify-center">
      {/* Heading animations from top */}
      <motion.h2 
        className="text-red-600 text-sm sm:text-lg font-semibold tracking-wider"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        AIR SHOOTING
      </motion.h2>

      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        Helicopter For Air Shooting In India
      </motion.h1>

      {/* Paragraph animations from bottom */}
      <motion.p 
        className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed px-2 sm:px-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Cinematography is the most essential need of the entertainment industry. With all the technological advancements in this field, helicopters are also adding immense contribution to elevate the experience to a new height. Whether for filming a blockbuster movie, a breathtaking documentary, or an advertising campaign, our fleet is tailored to provide the perfect platform for this creative vision.
      </motion.p>

      <motion.p 
        className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-sm sm:text-lg leading-relaxed px-2 sm:px-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        With our expert team of pilots and the latest Gyro-Stabilised technology, we have cemented ourselves as the first choice in the aerial cinematography business.
      </motion.p>
    </div>
  );
};

export default AirShooting;
