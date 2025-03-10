import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <motion.div
      className="container mx-auto p-6 max-w-6xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact For Any Query
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Contact Info & Map */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-4">You've got questions. We've got answers.</p>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-bold">📍 Office</h4>
                <p>No. 152, New Haridwar Colony, Haridwar, Uttarakhand, Pin 249408</p>
              </div>
              <div>
                <h4 className="font-bold">📞 Mobile</h4>
                <p>+91-76-6877-3876</p>
                <p>+91-98-3708-0427</p>
              </div>
              <div>
                <h4 className="font-bold">✉️ Email</h4>
                <p>reservation@airchardham.com</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <motion.div
            className="rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13809.530892741585!2d78.1549!3d29.9567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929bdcc982bbd%3A0xd2910f6f7d1d1b42!2sDiamond%20Hospitalities!5e0!3m2!1sen!2sin!4v1710000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Send Us a Message</h3>
          <motion.form className="space-y-4" whileHover={{ scale: 1.02 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 transition"
              />
            </div>
            <input
              type="text"
              placeholder="Your Number"
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-red-500 transition"
            />
            <textarea
              placeholder="Message"
              className="border p-3 w-full h-24 rounded-lg focus:ring-2 focus:ring-red-500 transition"
            ></textarea>
            <motion.button
              className="bg-red-600 text-white p-3 w-full rounded-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
