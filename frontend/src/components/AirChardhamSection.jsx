import React from "react";
import { Link } from "react-router-dom";
import aboutus from "../assets/images/about-us1.jpg";

const AirChardhamSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 text-center lg:text-left">
          <h3 className="text-xs md:text-sm font-semibold text-gray-300 uppercase">
            Air Chardham
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">
            Explore Spirituality with Air Chardham
          </h2>
          <p className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed">
            Air Chardham is a unit of Diamond Hospitalities, approved by the Uttarakhand Tourism Development Board.
          </p>
          <p className="mt-2 text-gray-300 text-sm md:text-base leading-relaxed">
            We started our operations in March 1997 as a local tour operator and have grown into a leading and trusted brand for travel helicopter services.
          </p>
          
          <Link to="/contact">
            <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out">
              Contact Now
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutus}
            alt="Air Chardham Helicopter"
            loading="lazy"
            className="w-full h-auto max-h-[400px] object-cover rounded-b-xl lg:rounded-r-xl lg:rounded-b-none"
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mt-16 px-4">
        <h3 className="text-red-500 font-semibold uppercase text-sm md:text-base">
          Air Chardham
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          Why Choose Us
        </h2>
        <p className="mt-4 max-w-4xl mx-auto text-gray-700 text-sm md:text-base leading-relaxed">
          At Air Chardham, our primary goal is to provide an unforgettable experience for our guests. 
          We ensure top-notch safety by conducting regular maintenance of our helicopters. 
          Your comfort and convenience remain our priority as we continue our passion for delivering 
          exceptional tours.
        </p>
      </div>
    </section>
  );
};

export default AirChardhamSection;
