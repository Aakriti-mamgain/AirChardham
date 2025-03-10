import React from 'react';
import { motion } from 'framer-motion';
import charDhamBig1 from '../assets/images/chardhampackag-img.jpg';
import charDhamBig2 from '../assets/images/Do-Dham-Ex-Dehradun-helipad.jpg';
import charDhamSmall1 from '../assets/images/kedarnath-badrinath-image.jpg';
import charDhamSmall2 from '../assets/images/kedarnath-image.jpg';

const ChardhamPackages = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-12">

      {/* Heading */}
      <div className="text-center">
        <h3 className="text-red-600 font-semibold uppercase tracking-wide flex justify-center items-center gap-2">
          <span className="border-b-4 border-blue-600 w-10 sm:w-12"></span> CHARDHAM YATRA <span className="border-b-4 border-blue-600 w-10 sm:w-12"></span>
        </h3>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mt-2">
          CHAR DHAM HELICOPTER PACKAGE 2024
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
          Air Chardham offers a comfortable and convenient way to cover the vast terrain of the Himalayas with our Helicopter fleet, allowing you to focus on the spiritual essence of the journey.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        
        {/* Left Side - Big Image + Two Small Images */}
        <div className="flex flex-col gap-4">
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-xl"
          >
            <img 
              src={charDhamBig1} 
              alt="Chardham Package" 
              className="w-full min-h-[200px] sm:min-h-[250px] md:h-[360px] object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
              <h3 className="text-lg font-bold">Chardham Yatra by Heli</h3>
            </div>
          </motion.div>

          {/* Bottom Two Small Images */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ y: 50, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img 
                src={charDhamSmall1} 
                alt="Do Dham Yatra" 
                className="w-full min-h-[150px] sm:min-h-[180px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <h3 className="text-md font-bold">Do Dham Yatra</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ y: 50, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.8 }} 
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg"
            >
              <img 
                src={charDhamSmall2} 
                alt="Kedarnath Yatra" 
                className="w-full min-h-[150px] sm:min-h-[180px] object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                <h3 className="text-md font-bold">Kedarnath Yatra</h3>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Single Big Image */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-xl flex items-center justify-center"
        >
          <img 
            src={charDhamBig2} 
            alt="Do Dham Ex Dehradun" 
            className="w-full min-h-[250px] sm:min-h-[300px] md:h-[500px] object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
            <h3 className="text-lg font-bold">Do Dham Ex Dehradun Helipad</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChardhamPackages;
