import React from "react";
import { motion } from "framer-motion";

const DoDhamYatraByHelicopter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
            Do Dham Yatra by Helicopter - 3N/4D
          </h1>
          <p className="text-lg text-gray-600">
            Experience the divine journey to Kedarnath and Badrinath with our premium helicopter services.
          </p>
        </motion.header>

        {/* Overview Section */}
        <motion.section
          className="mb-12 bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our Do Dham Yatra package offers a comfortable and hassle-free journey to the sacred temples of Kedarnath and Badrinath. This package ensures VIP darshan, luxury stays, and an unforgettable spiritual experience.
          </p>
        </motion.section>

        {/* Tour Itinerary */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
            Tour Itinerary
          </h2>
          <div className="space-y-8">
            {[ 
              { day: "Day 1", title: "Dehradun Arrival", details: [ "Pickup from Dehradun Airport/Railway station.", "Complimentary stay at a luxury hotel with dinner.", "Briefing session about the Yatra." ] },
              { day: "Day 2", title: "Kedarnath Darshan", details: [ "Fly from Dehradun to Sersi Helipad.", "Shuttle flight to Kedarnath Temple for VIP darshan.", "Return to Guptkashi for an overnight stay." ] },
              { day: "Day 3", title: "Badrinath Darshan", details: [ "Fly from Guptkashi to Badrinath Helipad.", "VIP darshan at Badrinath Temple.", "Visit Mana Village and enjoy local sightseeing." ] },
              { day: "Day 4", title: "Return to Dehradun", details: [ "Depart from Badrinath to Dehradun.", "Helicopter arrival at Sahastradhara Helipad by noon.", "Tour concludes with cherished memories." ] }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold text-blue-700 mb-4">
                  {item.day}: {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700">
                  {item.details.map((detail, i) => (
                    <li key={i} className="hover:text-blue-500 transition duration-300">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DoDhamYatraByHelicopter;
