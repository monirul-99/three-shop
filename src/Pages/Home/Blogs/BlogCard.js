import React from "react";
import { IconContext } from "react-icons";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const BlogCard = ({ blog }) => {
  return (
    <div>
      <img src={blog.img} alt="" />
      <div>
        <aside>
          <h1 className="capitalize font-semibold text-xl mt-3">{blog.name}</h1>
          <p className="font-Poppins text-[0.8rem] text-gray-500 mb-5">
            By <span className="text-[#9dd209]"> Admin / {blog.date}</span>
          </p>

          <p className="text-gray-500 font-Poppins text-[0.9rem]">{blog.dec}</p>
          <p className="border-b pt-6"></p>
          <div className=" flex justify-between items-center mt-5">
            <span className="inline-block font-Poppins font-semibold text-[0.9rem] border-b border-black">
              Continue Reading
            </span>
            <aside className="flex items-center space-x-2">
              <IconContext.Provider value={{ color: "#A6A7A6", size: 21 }}>
                <IoChatbubbleEllipsesOutline />
              </IconContext.Provider>
              <p className=" text-[1.1rem] -mt-0.5 text-[#A6A7A6]">3</p>
            </aside>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogCard;
