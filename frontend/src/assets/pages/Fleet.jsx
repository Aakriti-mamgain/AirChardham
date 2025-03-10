import React from "react";
import { motion } from "framer-motion";
import img1 from '../images/bell-407-images.jpg';
import img2 from '../images/B3-image.jpg';
import img3 from '../images/MI17-image.jpg';
import img4 from '../images/H135-Twin-Engine.jpg';
import img5 from '../images/fixed-Wing-Aircraft-image.jpg';
import img6 from '../images/Agusta-119.jpg';

const fleetData = [
  {
    name: "Bell 407",
    image: img1,
    engine: "Single Engine",
    speed: "226 km/h Max",
    capacity: "6 Persons",
    description: "The Bell 407 Helicopters are the most advanced light single multi-mission helicopter in service.",
  },
  {
    name: "B3/H125",
    image: img2,
    engine: "Single Engine",
    speed: "281 km/h Max",
    capacity: "6 Persons",
    description: "The B3’s are a modern high-performance light helicopter powered by Turbomeca Arriel turboshaft engines.",
  },
  {
    name: "MI17",
    image: img3,
    engine: "Twin Engines",
    speed: "250 km/h Max",
    capacity: "18 Persons",
    description: "With a proven track record of reliability, the MI-17 is used in a variety of harsh environments around the world.",
  },
  {
    name: "Twin Engine Helicopter",
    image: img4,
    engine: "Twin Engine",
    speed: "240-285 km/h",
    capacity: "4-7 Persons",
    description: "Twin engine helicopters have a lot of space, also make less noise and have many more options.",
  },
  {
    name: "Fixed Wing Aircraft",
    image: img5,
    engine: "Twin Engine",
    speed: "500-700 km/h",
    capacity: "18 Persons",
    description: "A fixed-wing aircraft is heavier-than-air flying machine that can fly using aerodynamics like an airplane.",
  },
  {
    name: "Agusta 119",
    image: img6,
    engine: "Single Engine",
    speed: "281 km/h Max",
    capacity: "7 Persons",
    description: "Air Chardham has the Agusta 119 in its fleet because of its reliability and versatility.",
  },
];

const Fleet = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-center text-3xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Fleets
        </motion.h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetData.map((fleet, index) => (
            <motion.div 
              key={index} 
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img src={fleet.image} alt={fleet.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-red-500 font-semibold">{fleet.engine} | {fleet.speed} | {fleet.capacity}</p>
                <h3 className="text-xl font-semibold mt-2">{fleet.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{fleet.description}</p>
                <div className="mt-4 flex justify-between">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Read More
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
