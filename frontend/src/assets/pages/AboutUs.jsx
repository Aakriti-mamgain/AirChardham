import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import aboutimg from '../images/about-us1.jpg';

const teamMembers = [
  {
    name: "MR. ABHISHEK AHLUWALIA",
    title: "FOUNDER & CEO",
    experience: "Having an experience of 24 Years in Hospitality & Tourism Industry",
  },
  {
    name: "MRS. SHILPA AHLUWALIA",
    title: "DIRECTOR",
    experience: "Having an experience of 20 Years in Hospitality & Tourism Industry",
  },
  {
    name: "MR. Raj Anand",
    title: "Manager Of Heli Ops",
    experience: "Having experience of 08 Year's in Helicopter Operations.",
  },
  {
    name: "MR. HARIOM SINGH",
    title: "SENIOR OPERATIONS MANAGER",
    experience: "Having experience of 08 Years in Hospitality & Tourism Industry",
  },
];

const AboutUsSection = () => {
  return (
    <>
      {/* About Us Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="py-12 max-w-[1320px] px-4 sm:px-6 lg:px-8 mx-auto"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 w-full"
          >
            <img
              src={aboutimg}
              alt="About Air Chardham"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Right Side - Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:w-1/2 w-full text-center lg:text-left"
          >
            <h6 className="text-red-700 font-semibold uppercase text-sm">About Us</h6>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
              About <span className="text-red-700">Air Chardham</span>
            </h1>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Air Chardham is serving with a passion of providing helicopter services to the pilgrims for more than a decade, ensuring a comfortable and unique Chardham experience.
            </p>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              We have a strong, well-connected network of hotels, logistics, and transport across Uttarakhand, especially in the Char Dham region.
            </p>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              We also provide services like Heli Skiing, an adventure activity loved worldwide.
            </p>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 inline-block bg-red-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-800 transition"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Our Management Section */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-[1320px] px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h6 className="text-red-700 font-semibold uppercase text-sm">Travel Guide</h6>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">OUR MANAGEMENT</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            We have the most trusted and industry-leading fleet of helicopters, ensuring safe operations in the Himalayan region.
          </p>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-xl p-6 text-center transform hover:scale-105 transition"
              >
                <div className="bg-gray-300 w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full"></div>
                <h4 className="text-lg font-bold text-gray-900 mt-4">{member.name}</h4>
                <h5 className="text-sm font-semibold text-gray-700">{member.title}</h5>
                <p className="text-gray-600 text-sm mt-2">{member.experience}</p>
                <div className="flex justify-center gap-4 mt-4 text-gray-700">
                  <FaFacebookF className="hover:text-blue-600 cursor-pointer transition transform hover:scale-110" />
                  <FaTwitter className="hover:text-blue-400 cursor-pointer transition transform hover:scale-110" />
                  <FaInstagram className="hover:text-pink-500 cursor-pointer transition transform hover:scale-110" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutUsSection;
