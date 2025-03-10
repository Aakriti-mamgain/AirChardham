import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaHelicopter, FaTachometerAlt, FaUserFriends } from "react-icons/fa";
import img1 from "../assets/images/bell-407-images.jpg";
import img2 from "../assets/images/B3-image.jpg";
import img3 from "../assets/images/MI17-image.jpg";
import img4 from "../assets/images/H135-Twin-Engine.jpg";
import img5 from "../assets/images/fixed-Wing-Aircraft-image.jpg";
import img6 from "../assets/images/Agusta-119.jpg";

const fleets = [
  {
    title: "Bell 407",
    description:
      "The Bell 407 Helicopters are the most advanced light single multi-mission helicopter in service.",
    image: img1,
    speed: "259km/h Max",
    capacity: "6 Persons",
    engine: "Single Engine",
  },
  {
    title: "B3 Helicopter",
    description:
      "The B3 is a high-performance single-engine helicopter designed for extreme conditions.",
    image: img2,
    speed: "278km/h Max",
    capacity: "5 Persons",
    engine: "Single Engine",
  },
  {
    title: "MI-17",
    description:
      "The MI-17 is a multi-role helicopter used for transport, rescue, and military operations.",
    image: img3,
    speed: "250km/h Max",
    capacity: "24 Persons",
    engine: "Twin Engine",
  },
  {
    title: "H135 Twin",
    description:
      "The H135 is a versatile twin-engine helicopter known for its reliability and efficiency.",
    image: img4,
    speed: "287km/h Max",
    capacity: "8 Persons",
    engine: "Twin Engine",
  },
  {
    title: "Fixed Wing Aircraft",
    description:
      "Our Fixed Wing Aircraft provide unmatched speed, efficiency, and comfort for long-distance travel.",
    image: img5,
    speed: "900km/h Max",
    capacity: "50 Persons",
    engine: "Jet Engine",
  },
  {
    title: "Agusta 119",
    description:
      "Agusta 119 is a powerful single-engine helicopter designed for VIP transport and rescue missions.",
    image: img6,
    speed: "282km/h Max",
    capacity: "7 Persons",
    engine: "Single Engine",
  },
];

const FleetSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="w-[90%] md:w-[80%] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Our Fleets
        </h2>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="relative"
        >
          {fleets.map((fleet, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                {/* Image Section */}
                <div className="w-full max-w-sm overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={fleet.image}
                    alt={fleet.title}
                    className="w-full h-60 object-cover rounded-t-xl"
                  />
                </div>

                {/* Description Section */}
                <div className="relative -mt-12 bg-white p-6 text-center shadow-lg rounded-xl w-[90%] md:w-[85%]">
                  {/* Icons Section */}
                  <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <FaHelicopter className="text-red-600" />
                      {fleet.engine}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaTachometerAlt className="text-red-600" />
                      {fleet.speed}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUserFriends className="text-red-600" />
                      {fleet.capacity}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900">{fleet.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mt-2">{fleet.description}</p>

                  {/* Buttons */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-blue-500 text-white font-bold rounded-lg text-sm md:text-base w-full sm:w-auto">
                      Read More
                    </button>
                    <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-blue-500 text-white font-bold rounded-lg text-sm md:text-base w-full sm:w-auto">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FleetSection;
