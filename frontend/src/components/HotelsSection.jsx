import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../assets/images/Hyatt-Regency.jpg";
import img2 from "../assets/images/Yamunotri-Cottages.jpg";
import img3 from "../assets/images/Harsil-Village-Resort.jpg";
import img4 from "../assets/images/Char-Machan-Resort.jpg";
import img5 from "../assets/images/Lord-palace.jpg";
import { Link } from "react-router-dom";

const hotelsData = [
  { name: "Dehradun hotels", image: img1, details: ["Hyatt Regency", "Hyatt Centric", "Fairfield Marriott", "County Inn"] },
  { name: "Kharsali Hotel", image: img2, details: ["Yamunotri Cottages", "Kalindi Hilltop", "Yamuna Kriti"] },
  { name: "Harsil Hotel", image: img3, details: ["Harsil Village Resort"] },
  { name: "Guptkashi Hotel", image: img4, details: ["Char Machan Resort"] },
  { name: "Badrinath", image: img5, details: ["Lord's Palace", "Lord's Centric", "Lord's Annexe Badrinath"] },
];

const HotelsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="w-3/4 mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
          Chardham Hotels
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Discover premium accommodations at the best prices during your Chardham Yatra.
        </p>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          {hotelsData.map((hotel, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                    <ul className="mt-1 text-sm">
                      {hotel.details.map((detail, i) => (
                        <li key={i} className="hover:text-red-300 transition">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="p-5 flex justify-between bg-white">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                    View Details
                  </button>
                  <Link to="/contact-us">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HotelsSection;
