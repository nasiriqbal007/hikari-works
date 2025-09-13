import React from "react";

const BlogCard = ({ blog }) => {
  const { title, category, date, image } = blog;
  return (
    <div className="flex flex-col items-start bg-white overflow-hidden">
      <div className="w-[300px] h-[250px] overflow-hidden">
        <a href="#home">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-125"
          />
        </a>
      </div>

      <div className="flex flex-row font-jost gap-8 py-4 px-6">
        <p className="text-sm text-[#777777]">{date}</p>
        <p className="text-sm text-[#777777] uppercase">{category}</p>
      </div>

      <a href="#home">
        <h1
          className="font-jost font-semibold text-xl px-6 pb-6 leading-tight w-[300px] text-left hover:text-[#F3C522]
      transition-transform duration-300
      "
        >
          {title}
        </h1>
      </a>
    </div>
  );
};

export default BlogCard;
