import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogsData(data));
  }, []);
  return (
    <section className="bg-[#F2F5F1] py-8 mt-24">
      <div className="container mx-auto py-10">
        <h2 className="text-center font-Poppins text-3xl py-10 font-light capitalize">
          Our Latest Post
        </h2>

        <div className="grid grid-cols-3 gap-10 w-[82%] mx-auto">
          {blogsData?.map((blog, inx) => (
            <BlogCard key={inx} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
