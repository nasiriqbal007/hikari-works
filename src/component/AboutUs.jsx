import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-16 gap-16">
      <div className="flex-shrink-0">
        <img
          src="/4.png"
          alt="About Us"
          className="w-[564px] h-[678px] object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-lg flex flex-col justify-center"
      >
        <div className="flex flex-row items-center mb-7">
          <div className="h-1 w-6 bg-[#F3C522] items-center mr-2"></div>
          <h2 className="font-cormorant font-medium text-xl uppercase tracking-wide">
            Top design agency
          </h2>
        </div>

        <h1 className="font-jost text-4xl font-semibold leading-tight mb-4">
          We Create Beautiful Design For Good Business
        </h1>

        <p className="font-inter text-[#747578] text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
          tincidunt quisque faucibus velit felis tincidunt. Turpis platea sed
          arcu aliquam lorem in. In ut mattis faucibus purus. Donec libero
          bibendum ut id risus, bibendum faucibus velit mattis diam etiam.
        </p>

        <a href="#home">
          <button className="bg-black text-white uppercase font-jost font-normal px-6 py-2 rounded-sm hover:text-[#F3C522] transition-all duration-300">
            Read More
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default AboutUs;
