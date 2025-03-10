import React from "react";
import { motion } from "framer-motion";

const SameDayKedarnathBadrinath = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 hover:text-blue-600 transition duration-300">
            Same Day Kedarnath & Badrinath Helicopter Package
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the divine journey to Kedarnath and Badrinath in a single day with our exclusive helicopter service.
          </p>
        </motion.header>

        {/* Tour Itinerary */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2 text-center uppercase tracking-widest">
            Tour Itinerary
          </h2>
          <div className="space-y-8">
            {[
              {
                time: "06:30 AM",
                title: "Departure from Dehradun",
                details: [
                  "Check-in at Sahastradhara Helipad.",
                  "Briefing session and take-off for Kedarnath."
                ]
              },
              {
                time: "07:30 AM",
                title: "Arrival at Kedarnath",
                details: [
                  "Landing at Sersi Helipad.",
                  "Shuttle service to Kedarnath Temple.",
                  "VIP darshan and return to Sersi Helipad."
                ]
              },
              {
                time: "10:00 AM",
                title: "Departure for Badrinath",
                details: [
                  "Fly from Sersi to Badrinath Helipad.",
                  "Scenic views of the Himalayas."
                ]
              },
              {
                time: "11:00 AM",
                title: "Arrival at Badrinath",
                details: [
                  "VIP darshan at Badrinath Temple.",
                  "Visit to Mana Village (if time permits)."
                ]
              },
              {
                time: "01:30 PM",
                title: "Return to Dehradun",
                details: [
                  "Departure from Badrinath Helipad.",
                  "Arrival at Sahastradhara Helipad, Dehradun.",
                  "Yatra concludes with divine blessings."
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
                  {item.time} - {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
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

export default SameDayKedarnathBadrinath;