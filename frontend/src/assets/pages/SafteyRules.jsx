import React from "react";
import { motion } from "framer-motion";
import safteyimg from "../images/SAFETY_AROUND_A_HELICOPTER.jpg";

const SafetyRules = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Helicopter Safety Rules
        </motion.h1>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Left Side - Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-lg text-gray-600">
              Do not approach or leave without the pilot’s visual acknowledgment.
              Keep in the pilot’s field of vision at all times. Observe helicopter
              safety zones.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              On sloping ground, always approach or leave on the downside for
              maximum rotor clearance.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              If blinded by swirling dust or grit, <strong>STOP</strong>—crouch
              lower, or sit down and await assistance.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              If disembarking while the helicopter is hovering, exit in a
              smooth and unhurried manner.
            </p>

            {/* Animated List */}
            <motion.ul
              className="list-disc list-inside text-gray-700 text-lg space-y-3 mt-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
            >
              <li>
                Do not approach or leave a helicopter when the engine and rotors
                are running down or starting up.
              </li>
              <li>
                Proceed in a crouching manner for extra rotor clearance. Hold onto
                hats unless chin straps are used. <strong>NEVER</strong> reach up
                or chase after blown-away articles.
              </li>
              <li>
                Carry tools horizontally below waist level—never upright or on the
                shoulder.
              </li>
            </motion.ul>
          </motion.div>

          {/* Right Side - Image with Animation */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <img
              src={safteyimg}
              alt="Helicopter Safety Rules"
              className="w-full max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetyRules;
