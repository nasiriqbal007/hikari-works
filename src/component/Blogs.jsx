import React from "react";
import BlogCard from "./BlogCard";
import BlogData from "../data/blogData";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div
      id="latest-blog"
      className="flex flex-col items-center px-20 py-16 gap-10 justify-center"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-cormorant font-medium text-sm uppercase tracking-widest">
          blogs
        </h2>
        <h1 className="font-jost text-4xl font-bold leading-tight py-5 text-[#111111] text-center">
          Latest blog posts
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {BlogData.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <BlogCard blog={blog} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
