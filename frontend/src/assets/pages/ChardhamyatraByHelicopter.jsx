import React from "react";
import { motion } from "framer-motion";

const ChardhamYatraByHelicopter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 py-12 lg:py-16">
      <div className="container mx-auto px-6 md:px-12">
        {/* Page Header */}
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Chardham Yatra by Helicopter - 5N/6D
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Experience a divine journey to the sacred abodes nestled in the majestic Himalayas.
          </p>
        </motion.header>

        {/* Overview Section */}
        <motion.section
          className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            With over two decades of experience operating in the Char Dham sector, we are the first choice for thousands of pilgrims opting for the Char Dham Yatra by helicopter. Our strong network and professional team ensure a safe, comfortable, and personalized pilgrimage experience.
          </p>
        </motion.section>

        {/* Tour Itinerary */}
        <motion.section
          className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Tour Itinerary
          </h2>
          <div className="space-y-6">
            {[
              {
                day: "Day 1",
                title: "Dehradun Arrival",
                details: [
                  "Complimentary stay on arrival with dinner.",
                  "Pickup from Dehradun Airport, Railway station, or Bus stand.",
                  "Evening briefing session before the journey begins."
                ]
              },
              {
                day: "Day 2",
                title: "Yamunotri Dham",
                details: [
                  "Departure from Sahastradhara Helipad at 6:00 AM.",
                  "Travel to Yamunotri via Palki, approx. 5.5 hours round trip.",
                  "Visit Yamuna Mata Temple & Shani Temple."
                ]
              },
              {
                day: "Day 3",
                title: "Gangotri Dham",
                details: [
                  "Departure from Kharsali at 6:30 AM, reaching Harsil.",
                  "Drive to Gangotri Dham for darshan and sightseeing.",
                  "Enjoy scenic views of Bhagirathi River."
                ]
              },
              {
                day: "Day 4",
                title: "Kedarnath Dham",
                details: [
                  "Fly from Harsil to Sersi at 7:00 AM.",
                  "Shuttle flight to Kedarnath for darshan.",
                  "Rest at a comfortable hotel near Guptkashi."
                ]
              },
              {
                day: "Day 5",
                title: "Badrinath Dham",
                details: [
                  "Fly from Kedarnath to Badrinath.",
                  "VIP darshan at Badrinath Temple.",
                  "Overnight stay at Badrinath with scenic views."
                ]
              },
              {
                day: "Day 6",
                title: "Return to Dehradun",
                details: [
                  "Depart from Badrinath after morning aarti.",
                  "Return to Sahastradhara Helipad by noon.",
                  "Tour concludes with unforgettable memories."
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  {item.day}: {item.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
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

export default ChardhamYatraByHelicopter;
