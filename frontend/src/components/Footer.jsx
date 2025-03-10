import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img1 from "../assets/images/B3-image.jpg";
import img2 from "../assets/images/B3-image.jpg";
import img3 from "../assets/images/bell-407-images.jpg";
import img4 from "../assets/images/service-img-8.png";
import img5 from "../assets/images/Agusta-119.jpg";
import img6 from "../assets/images/about-us1.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-red-500 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Air Chardham Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Air Chardham</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Our Fleets</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Regd Office - 15, Sri Chander Nagar Colony, Kankhal, Haridwar, Uttarakhand, 249408
            </p>
            <p className="mt-2">📞 +91-76687-73876</p>
            <p>📞 +91-98370-80427</p>
            <p>📞 +91-74470-37447</p>
            <p className="mt-2">📧 reservation@airchardham.com</p>
          </div>

          {/* Column 3: Gallery */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[img1, img2, img3, img4, img5, img6].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="rounded-full w-16 h-16 sm:w-20 sm:h-20 object-cover"
                />
              ))}
            </div>
          </div>

          {/* Column 4: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Air Chardham</h3>
            <p className="text-sm">
              Air Chardham offers a wide range of customized Char Dham tour packages to holy shrines.
              The tour operator provides high-quality spiritual tours for customers.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="text-gray-200 hover:text-white">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center text-gray-300 mt-8 text-sm">
          <p>© Air Chardham, All Rights Reserved. Designed by Air Chardham</p>
          <div className="flex flex-wrap justify-center space-x-4 mt-2">
            {['Home', 'Contact', 'Help', 'FAQs'].map((item, index) => (
              <a key={index} href="#" className="hover:underline">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;