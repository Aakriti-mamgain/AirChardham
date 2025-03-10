import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import service_img1 from "../assets/images/service-img-1.jpg";
import service_img2 from "../assets/images/service-img-2.png";
import service_img3 from "../assets/images/service-img-3.png";
import service_img4 from "../assets/images/service-img-4.jpg";
import service_img5 from "../assets/images/service-img-5.png";
import service_img6 from "../assets/images/service-img-6.png";
import service_img7 from "../assets/images/service-img-7.png";
import service_img8 from "../assets/images/service-img-8.png";

const services = [
  { title: "CHAR DHAM YATRA BY HELICOPTER", img: service_img1 },
  { title: "HELI SKIING", img: service_img2 },
  { title: "AIR AMBULANCE", img: service_img3 },
  { title: "WEDDINGS", img: service_img4 },
  { title: "FILM SHOOTING", img: service_img5 },
  { title: "GOVERNMENT SURVEYS", img: service_img6 },
  { title: "POLITICAL FLYING", img: service_img7 },
  { title: "FIXED WING CHARTERS", img: service_img8 },
];

const ServicesSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-16 text-center">
      {/* Section Title */}
      <h3 className="text-red-600 font-semibold uppercase tracking-widest flex justify-center items-center gap-2">
        <span className="border-b-4 border-blue-600 w-12"></span> SERVICES{" "}
        <span className="border-b-4 border-blue-600 w-12"></span>
      </h3>
      <h2 className="text-4xl font-extrabold mt-2 bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text text-transparent">
        Our Premium Services
      </h2>

      {/* Navigation Buttons & Swiper */}
      <div className="relative mt-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
            1280: { slidesPerView: 4, spaceBetween: 25 },
          }}
          className="relative"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="relative group">
              <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                <div className="relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-60 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-full bg-black/60 text-white py-2 text-lg font-semibold text-center">
                    {service.title}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full text-black z-10 hover:bg-gray-100 transition hidden md:block">
          <FaChevronLeft size={20} />
        </button>
        <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full text-black z-10 hover:bg-gray-100 transition hidden md:block">
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
