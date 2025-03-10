import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "PRABHAKAR RAO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "We had a wonderful trip to Chardham. The heli tour was excellent, arranged to Kedarnath from Guptkashi. The Enchant tour can be recommended to anyone as they have well taken care of us. Thank you, Enchant.",
  },
  {
    name: "ADITI GHIYA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "We got married at the Triyuginarayan Mandir, and Enchant helped us organize the wedding. They felt like family and helped in making everything perfectly how we had thought it would be.",
  },
  {
    name: "SHILPA TANNA",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback:
      "Amazing experience with Enchant Aviation. They have great coordination with ground staff that makes the yatra very smooth. I recommend Enchant Aviation to everyone.",
  },
  {
    name: "SONY JHA",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    feedback:
      "Enchant Aviation provided excellent service. The helicopter yatra was seamless, and the arrangements were perfect.",
  },
  {
    name: "RAHUL SHARMA",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "Enchant Aviation made our Char Dham Yatra unforgettable. Highly recommended for their professional service.",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 uppercase">
          Our Clients Say!!!
        </h2>
        <p className="text-lg text-gray-600 mt-3">
          Hear what our happy travelers have to say!
        </p>

        {/* Slider Container */}
        <div className="mt-10">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="p-4"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:bg-blue-100 transition duration-300 text-center mx-2">
                  {/* User Image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 mx-auto rounded-full border-2 border-blue-500 mb-4"
                  />
                  {/* User Feedback */}
                  <p className="text-gray-600 italic text-sm">
                    "{testimonial.feedback}"
                  </p>
                  {/* User Name */}
                  <h3 className="mt-3 text-md font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
