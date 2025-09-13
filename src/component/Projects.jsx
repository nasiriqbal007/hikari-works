import React, { useState } from "react";
import { projects } from "../data/data";
import { motion } from "framer-motion";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const filters = [
    "All",
    "Branding",
    "E-commerce",
    "Photography",
    "UI/UX Design",
    "Animation",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  // Always show 3 cards, move one at a time
  const visibleCards = 3;
  const maxIndex = Math.max(0, filteredProjects.length - visibleCards);
  const totalDots = 4; // fixed to 4 dots always

  const currentProjects = filteredProjects.slice(
    currentIndex,
    currentIndex + visibleCards
  );

  // Touch handlers for swipe
  const handleTouchStart = (e) => setTouchStartX(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // swipe left → next card
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (touchEndX - touchStartX > 50) {
      // swipe right → prev card
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const goToPosition = (idx) => {
    setCurrentIndex(Math.min(idx, maxIndex));
  };

  // Reset to beginning when filter changes
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
  };

  return (
    <div id="projects" className="px-20 py-5 bg-[#F7F9FD]">
      {/* Section Header */}
      <div className="flex flex-row items-center mb-5">
        <div className="h-0.5 w-6 bg-[#F3C522] mr-3"></div>
        <h2 className="font-cormorant font-medium text-sm uppercase tracking-widest">
          SERVICES
        </h2>
      </div>

      {/* Title + Filters */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center mb-8">
        <h1 className="font-jost text-4xl font-bold leading-tight">
          Latest Works
        </h1>
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 sm:mt-0">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`font-jost transition-all hover:text-[#111111] duration-300 ${
                activeFilter === filter ? "text-[#111111]" : "text-[#777777]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid with Swipe */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {currentProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img src={project.image} alt={project.title} />
              <div className="flex justify-between items-center bg-white py-5 pl-6 pr-12">
                <h3 className="font-jost font-semibold text-[#111111]">
                  {project.title}
                </h3>
                <p className="text-sm text-[#777777]">{project.category}</p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        {Array.from({ length: totalDots }).map((_, idx) => (
          <div
            key={idx}
            onClick={() => goToPosition(idx)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === idx
                ? "bg-[#111111] ring-2 ring-[#D7D7D7] ring-offset-2"
                : "bg-[#D7D7D7]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
