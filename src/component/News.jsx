import React from "react";
import { motion } from "framer-motion";

const News = () => {
  return (
    <div className="w-full flex justify-center py-16 px-20 bg-[#FCFCFC]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-lg flex flex-col justify-start">
          <div className="flex flex-row items-center mb-7">
            <div className="h-0.5 w-6 bg-[#F3C522] mr-3"></div>
            <h2 className="font-cormorant font-medium text-sm uppercase tracking-widest">
              SERVICES
            </h2>
          </div>
          <h1 className="font-jost text-4xl font-bold leading-tight mb-6 text-[#111111] ">
            Our Abilities For Solutions
          </h1>
        </div>

        <motion.div
          className="lg:w-1/2 flex flex-col items-center lg:items-end gap-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row w-full max-w-sm sm:max-w-md">
            <p className="font-inter text-[#747578] text-sm mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              tincid quisque faucibus velit felis tincidunt. Turpis platea sed
              arcu.
            </p>
          </div>
          <div className="flex flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-grow border-b focus:outline-none focus:border-b text-sm font-jost mb-4 sm:mb-0 sm:mr-4"
            />
            <a href="#home">
              <button className="bg-black text-white uppercase font-jost font-normal px-6 py-2 rounded-sm hover:text-[#F3C522] transition-all duration-300">
                Subscribe
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
