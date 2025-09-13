import React from "react";
import { motion } from "framer-motion";
import MapImage from "../assets/map_img.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      <img
        src={MapImage}
        alt="Icon"
        className="absolute -top-16 left-6 md:left-12 lg:left-12 object-contain h-[400px] md:h-[450px] lg:h-[501px] w-[200px] md:w-[220px] lg:w-[244px]"
      />

      {/* Left Section */}
      <motion.div
        className="flex flex-col max-w-xl space-y-6 relative z-10 mt-10 md:mt-0 lg:pl-23"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="font-cormorant font-medium text-xl mb-7 uppercase tracking-wide">
          Top design agency
        </h2>
        <h1 className="font-jost text-4xl font-semibold leading-tight">
          We are best digital creative agency based in New York, USA.
        </h1>
        <p className="font-inter font-normal text-[#747578] mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
          tincidunt quisque faucibus velit felis tincidunt. Turpis platea sed
          arcu aliquam lorem in. In ut mattis faucibus purus.
        </p>
        <div className="inline-flex">
          <a href="#home">
            <button className="bg-black font-jost font-normal uppercase text-white px-6 py-2 border rounded-sm hover:text-[#F3C522] transition-all duration-300">
              Contact Us
            </button>
          </a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="grid grid-cols-2 p-0 m-0 place-items-center mt-10 md:mt-0"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="col-span-1 row-span-1">
          <img
            src="3.png"
            alt=""
            className="h-[309px] w-[309px] object-cover block"
          />
        </div>

        <div className="col-span-1 row-span-2">
          <img
            src="1.png"
            alt=""
            className="h-[291px] w-[289px] object-cover block"
          />
        </div>
        <div className="col-span-1 row-span-1 -mt-15 -mr-10">
          <img
            src="2.png"
            alt=""
            className="h-[251px] w-[175px] object-cover block"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
