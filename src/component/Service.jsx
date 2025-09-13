import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  Briefcase,
  FileText,
  Play,
  Palette,
  Search,
  Monitor,
} from "lucide-react";

const Service = () => {
  const services = [
    { icon: Camera, title: "Photography" },
    { icon: Briefcase, title: "Branding" },
    { icon: Monitor, title: "Development" },
    { icon: FileText, title: "Business Plan" },
    { icon: Play, title: "Animation" },
    { icon: Palette, title: "UI/UX Design" },
    { icon: Search, title: "Research" },
  ];

  return (
    <div
      id="services"
      className="flex flex-col lg:flex-row items-start justify-center px-10 md:px-20 py-16 gap-20"
    >
      <div className="max-w-lg flex flex-col justify-start">
        <div className="flex flex-row items-center mb-7">
          <div className="h-0.5 w-6 bg-[#F3C522] mr-3"></div>
          <h2 className="font-cormorant font-medium text-sm uppercase tracking-widest">
            SERVICES
          </h2>
        </div>

        <h1 className="font-jost text-4xl font-bold leading-tight mb-6 text-gray-800">
          Our Abilities For Solutions
        </h1>

        <p className="font-inter text-[#747578] text-base mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
          tincidunt quisque faucibus velit felis tincidunt. Turpis platea sed
          arcu aliquam lorem in. In ut mattis faucibus purus donec libero
          scelerisque ut id risus.
        </p>

        <a href="#home">
          <button className="bg-black text-white uppercase font-jost font-normal px-6 py-2 rounded-sm hover:text-[#F3C522] transition-all duration-300">
            Read More
          </button>
        </a>
      </div>

      {/* Right Services Grid with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex-1 max-w-md"
      >
        <div className="grid grid-cols-3 gap-12 items-center">
          <div className="flex flex-col items-center gap-12">
            {[services[1], services[4]].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="w-28 h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-transparent hover:shadow-none transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-gray-600 stroke-1.5 mb-2" />
                  <h3 className="text-gray-800 font-medium text-sm font-jost">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-12">
            {[services[0], services[3], services[6]].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="w-28 h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-transparent hover:shadow-none transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-gray-600 stroke-1.5 mb-2" />
                  <h3 className="text-gray-800 font-medium text-sm font-jost">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center gap-12">
            {[services[2], services[5]].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="w-28 h-28 bg-white rounded-lg shadow-sm flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-transparent hover:shadow-none transition-all duration-300"
                >
                  <Icon className="w-6 h-6 text-gray-600 stroke-1.5 mb-2" />
                  <h3 className="text-gray-800 font-medium text-sm font-jost">
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
