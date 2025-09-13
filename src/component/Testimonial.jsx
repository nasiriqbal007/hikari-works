import React, { useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialData from "../data/TestimonialData";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const pre = () =>
    setIndex(index === 0 ? TestimonialData.length - 1 : index - 1);
  const next = () =>
    setIndex(index === TestimonialData.length - 1 ? 0 : index + 1);

  const td = TestimonialData[index];

  return (
    <div
      id="testimonial"
      className="flex flex-col lg:flex-row items-start justify-center px-20 md:px-50 py-16 gap-20"
    >
      {/* Left Section */}
      <div className="max-w-lg flex flex-col justify-start">
        <div className="flex flex-row items-center mb-7">
          <div className="h-0.5 w-6 bg-[#F3C522] mr-3"></div>
          <h2 className="font-cormorant font-medium text-sm uppercase tracking-widest">
            Testimonials
          </h2>
        </div>

        <h1 className="font-jost text-4xl font-bold leading-tight mb-6 text-gray-800">
          What our clients says
        </h1>

        <p className="font-inter text-[#747578] text-base mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam tincid
          quisque faucibus velit felis tincidunt. Turpis platea sed arcu.
        </p>
      </div>

      {/* Right Section with Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={td.id}
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          viewport={{ once: true, amount: 0.3 }} // trigger when 30% visible
          transition={{ duration: 0.6 }}
          className="relative rounded-xl shadow-xl flex items-center"
        >
          <div className="absolute -left-12 items-center">
            <img
              src={td.image}
              alt="Profile"
              className="w-[80px] h-[80px] rounded-full border-4 border-white "
            />
          </div>
          <div className="pl-15 pr-15 py-4">
            <p className="font-inter text-[#747578] text-base mb-5 leading-relaxed">
              {td.text}
            </p>
            <h2 className="font-jost font-semibold">{td.name}</h2>
            <h3 className="font-jost text-[#747578]"> {td.role}</h3>
            <div className="flex flex-row justify-end space-x-5 py-2 px-3">
              <FaLongArrowAltLeft className="cursor-pointer" onClick={pre} />
              <FaLongArrowAltRight className="cursor-pointer" onClick={next} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
