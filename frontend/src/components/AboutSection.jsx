import React from "react";
import { motion } from "framer-motion";
import diningImg from "../assets/images/indexheli.jpg"; // Replace with your actual image path

const AboutSection = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center px-4 md:px-10 lg:px-16 py-10">
      
      {/* Left Text Section with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          bg-white shadow-lg rounded-lg text-left p-6 relative z-10
          md:w-3/5 lg:w-3/5 md:left-[5%] md:px-[4.4%]
          shadow-[5px_0px_15px_rgba(0,0,0,0.2),-5px_0px_15px_rgba(0,0,0,0.2)]
        "
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600 mb-4">
          AIR CHARDHAM PACKAGE
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          AIR Chardham Package is one of the unique and rich pilgrimage tour packages that takes the devotees on a visit to the holy Chardham sites by air – Yamunotri, Gangotri, Kedarnath, and Badrinath. This package ensures a comfortable and spiritual journey while witnessing the mesmerizing beauty of the Himalayas.
        </p>

        {/* List Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }} 
          className="text-gray-600 text-xs md:text-sm mb-4"
        >
          <div className="grid grid-cols-2 gap-2">
            {[
              "CHAR DHAM YATRA BY HELI",
              "HELI SKIING",
              "AIR AMBULANCE",
              "WEDDINGS",
              "FILM SHOOTING",
              "POLITICAL FLYING"
            ].map((item, index) => (
              <motion.span 
                key={index}
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-red-600 pr-2">➤</span> {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Animated Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-red-600 to-blue-500 text-white px-6 py-2 rounded-md hover:bg-red-500 transition-all duration-300"
        >
          Read More
        </motion.button>
      </motion.div>

      {/* Right Image Section with Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-2/5 lg:w-2/5 mt-6 md:mt-0"
      >
        <img
          src={diningImg}
          alt="Helicopter Service"
          className="rounded-lg shadow-md w-full h-auto"
        />
      </motion.div>

    </section>
  );
};

export default AboutSection;
