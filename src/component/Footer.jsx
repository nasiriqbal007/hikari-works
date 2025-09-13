import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-[#F7F9FD] w-full px-20 py-16">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row justify-center gap-20">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex flex-col gap-2">
            <h3 className="font-jost font-bold text-lg">Explore</h3>
            <ul className="flex flex-col gap-2 text-gray-500 font-inter">
              <li className="hover:text-[#111111] hover:scale-105 transition-all duration-300">
                <a href="#home">Home</a>
              </li>
              <li className="hover:text-[#111111] hover:scale-105 transition-all duration-300">
                <a href="#about-us">About Us</a>
              </li>
              <li className="hover:text-[#111111] hover:scale-105 transition-all duration-300">
                <a href="#services">Services</a>
              </li>
              <li className="hover:text-[#111111] hover:scale-105 transition-all duration-300">
                <a href="#projects">Projects</a>
              </li>
              <li className="hover:text-[#111111] hover:scale-105 transition-all duration-300">
                <a href="#testimonial">Testimonial</a>
              </li>
              <li className="hover:text-[#111111] hover:scale-105 transition-all duration-300">
                <a href="#latest-blog">Latest Blog</a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-jost font-bold text-lg">Any queries?</h3>
            <p className="text-gray-700 font-inter">
              <span className="font-semibold">Our Location</span>
              <br />
              Tribeca, New York, USA
            </p>
            <p className="text-gray-700 font-inter">
              <span className="font-semibold">Call Us</span>
              <br />
              (+880)244-35264
            </p>
            <p className="text-gray-700 font-inter">
              <span className="font-semibold">Send Us Mail</span>
              <br />
              support@example.com
            </p>
          </div>
        </div>

        <motion.div
          className="flex flex-col justify-center text-center lg:text-left max-w-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-jost font-bold text-4xl mb-4">
            Got a project? Let’s talk.
          </h2>
          <p className="text-gray-500 font-inter mb-6">
            Just feel free to contact if you wanna collaborate with us, or
            simply have a conversation.
          </p>
          <a href="#home">
            <button className="bg-black text-white uppercase font-jost font-normal px-6 py-2 rounded-sm hover:text-[#F3C522] transition-all duration-300">
              CONTACT US
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
