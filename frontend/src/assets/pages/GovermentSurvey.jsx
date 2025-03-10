import React from "react";
import { motion } from "framer-motion";

const GovernmentSurveys = () => {
  return (
    <div className="min-h-[50vh] bg-white text-center py-16 px-6">
      {/* Animated Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="text-red-600 text-lg md:text-xl font-semibold tracking-wider flex justify-center items-center"
      >
        <span className="mr-2 border-t-2 border-blue-500 w-8"></span>
        GOVERNMENT SURVEYS
        <span className="ml-2 border-t-2 border-blue-500 w-8"></span>
      </motion.h2>

      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2"
      >
        Air Government Survey's Services
      </motion.h1>

      {/* Animated Paragraphs */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="max-w-4xl mx-auto mt-6 text-gray-600 text-base md:text-lg"
      >
        India, with its diverse and complex landscapes, presents challenges for government 
        organizations conducting aerial surveys. At Air Chardham, we leverage our aerial 
        expertise and advanced machines to assist government organizations in achieving 
        their missions efficiently.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.7 }}
        className="max-w-4xl mx-auto mt-4 text-gray-600 text-base md:text-lg"
      >
        We prioritize safety, punctuality, and comfort above all else. Our fleet of 
        state-of-the-art helicopters, coupled with highly experienced pilots, ensures 
        unparalleled support for a variety of government surveys.
      </motion.p>

      {/* "We Cover" Section */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut", delay: 0.9 }}
        className="text-xl md:text-2xl font-bold text-gray-900 mt-10"
      >
        We Cover
      </motion.h2>

      {/* Animated List */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 1.1, duration: 1.8, ease: "easeOut", staggerChildren: 0.3 },
          },
        }}
        className="mt-4 space-y-2 text-gray-700 text-lg"
      >
        {["Forest Surveys", "Geographical Surveys", "Disaster Surveys", "Infrastructure Surveys", "Environmental Surveys"].map((item, index) => (
          <motion.li
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-base md:text-lg"
          >
            • {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default GovernmentSurveys;
