import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is Char Dham Yatra?",
    answer:
      "Char Dham Yatra is a sacred pilgrimage held in Uttarakhand state, performed by Hindus. This journey is a pilgrimage to four temples: Yamunotri Dham, Gangotri Dham, Kedarnath Dham, and Badrinath Dham.",
  },
  {
    question: "What is the duration of the helicopter yatra?",
    answer:
      "Char Dham Yatra by helicopter usually lasts for 5 to 6 days, but the journey also depends on your itinerary and weather conditions.",
  },
  {
    question: "How can I book the helicopter services?",
    answer:
      "You can book Helicopter Service for Char Dham Yatra through travel agencies or by directly contacting the Helicopter Service Provider via their website.",
  },
  {
    question: "What is the cost of the Char Dham helicopter yatra?",
    answer:
      "The cost depends on your package, season, and tour operator. Generally, the price per person ranges between ₹1,90,000 to ₹2,10,000.",
  },
  {
    question: "What is the best time to undertake the Char Dham Yatra?",
    answer:
      "The best time to visit Char Dham by helicopter is from May to June and September to October.",
  },
  {
    question: "Are there any age or health restrictions for Char Dham Helicopter Yatra?",
    answer:
      "There is no age restriction, but a medical fitness report is required for individuals above 75 years or those with serious medical conditions.",
  },
  {
    question: "Can I take children on the helicopter yatra?",
    answer:
      "Yes, children above 2 years need a full ticket. Infants below 2 years can travel free of cost.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">
          Chardham Helicopter Package FAQ
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <button
                className="w-full text-left text-base sm:text-lg font-semibold text-gray-800 px-5 sm:px-6 py-4 sm:py-5 flex justify-between items-center focus:outline-none transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span>{`Q${index + 1}. ${faq.question}`}</span>
                <span
                  className={`text-xl sm:text-2xl transform transition-all duration-300 ${
                    openIndex === index ? "rotate-180 text-red-600" : "text-gray-600"
                  }`}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 sm:px-6 pb-4 sm:pb-5 text-gray-700 leading-relaxed text-sm sm:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
