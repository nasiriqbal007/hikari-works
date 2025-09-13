import React, { useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-6 px-6 md:px-12 lg:px-20 flex items-center w-full relative"
    >
      <div className="text-2xl font-bold font-inter relative">
        <span className="text-3xl">H</span>ikari
        <span className="text-3xl">W</span>orks
      </div>

      <div className="flex-1 flex justify-center">
        <nav className="hidden lg:flex gap-8 text-[#777] font-jost">
          <a href="#home" className="hover:text-[#111]">
            Home
          </a>
          <a href="#about-us" className="hover:text-[#111]">
            About Us
          </a>
          <a href="#services" className="hover:text-[#111]">
            Services
          </a>
          <a href="#projects" className="hover:text-[#111]">
            Projects
          </a>
          <a href="#testimonial" className="hover:text-[#111]">
            Testimonial
          </a>
          <a href="#latest-blog" className="hover:text-[#111]">
            Latest Blog
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-3 group">
          <h3 className="text-[#777] font-medium group-hover:text-[#111] z-10">
            Let's Talk
          </h3>
          <div className="relative flex items-center w-[40px] h-[29px]">
            <div className="absolute right-0 w-[29px] h-[29px] bg-[#F3C522] rounded-full transition-all duration-300 group-hover:w-[140px]"></div>
            <CgArrowLongRight className="absolute left-4 w-10 h-6 text-[#777] group-hover:text-[#111] -translate-x-1/2" />
          </div>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <HiX className="w-8 h-8 text-[#111]" />
            ) : (
              <HiMenu className="w-8 h-8 text-[#111]" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute top-full left-0 w-full bg-transparent shadow-md flex flex-col gap-4 p-6 z-10"
        >
          <a
            href="#home"
            onClick={toggleMenu}
            className="text-[#777] hover:text-[#111]"
          >
            Home
          </a>
          <a
            href="#about-us"
            onClick={toggleMenu}
            className="text-[#777] hover:text-[#111]"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={toggleMenu}
            className="text-[#777] hover:text-[#111]"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="text-[#777] hover:text-[#111]"
          >
            Projects
          </a>
          <a
            href="#testimonial"
            onClick={toggleMenu}
            className="text-[#777] hover:text-[#111]"
          >
            Testimonial
          </a>
          <a
            href="#latest-blog"
            onClick={toggleMenu}
            className="text-[#777] hover:text-[#111]"
          >
            Latest Blog
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
