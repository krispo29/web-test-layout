import Image from "next/image";
import React from "react";
import IconVideo from "@/public/video-vertical.png";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  date: string;
  views: string;
  image: string;
  priority: number;
  topic: string;
}

const BlogCard: React.FC<BlogCardProps> = (blog) => {
  return (
    <div
      className={`${
        blog.priority <= 2 ? "h-[10rem] sm:h-[18rem] mt-4" : "h-[10rem] mt-8"
      } card card-side bg-base-100 shadow-md`}
    >
      <figure
        className={`${
          blog.priority <= 2
            ? "h-[10rem] sm:h-[18rem] w-[15rem]"
            : "w-[10rem] h-[10rem]"
        } relative flex items-center justify-center`}
      >
        <img
          className="object-cover w-full h-full"
          src={blog.image}
          alt="Movie"
        />
        <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-2">
          <h3 className="text-white text-s md:text-lg font-bold  text-center">
            {blog.topic}
          </h3>
        </div>
      </figure>

      <div className="card-body -m-[1rem]">
        {blog.priority <= 2 ? (
          <button className=" btn btn-outline  text-[#00665E] rounded-full w-1/4 h-[1em]">
            {blog.category}
          </button>
        ) : (
          <h2 className="  text-[#00665E]">{blog.category}</h2>
        )}

        <h2
          className={`card-title  ${
            blog.priority <= 2 ? "text-xs md:text-xl md:mt-4 " : "text-md"
          }`}
        >
          {blog.title}
        </h2>
        <p className="text-xs md:text-sm">
          {blog.description.length > 90
            ? `${blog.description.slice(0, 90)}...`
            : blog.description}
        </p>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{blog.date}</span>
          <span>อ่าน {blog.views} ครั้ง</span>
        </div>
      </div>
    </div>
  );
};

const Blog: React.FC<{ blogs: BlogCardProps[] }> = ({ blogs }) => {
  const priorityBlogs = blogs.filter((blog) => blog.priority <= 2);
  const normalBlogs = blogs.filter((blog) => blog.priority > 2);

  return (
    <div className="container my-8 py-10 mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={IconVideo} alt="icon" className="mr-2" />
          <h1 className="text-lg font-semibold">บทความและข่าวสารล่าสุด</h1>
        </div>

        <button className="hidden md:block btn btn-outline btn-success rounded-full">
          ดูทั้งหมด
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-row sm:flex-col">
          {priorityBlogs.map((blog, index) => (
            <div
              key={`priority-${index}`}
              className={`${
                blog.priority === 1 ? "hidden sm:block w-full" : "w-full"
              }`}
            >
              <BlogCard {...blog} />
            </div>
          ))}
        </div>

        <div className="flex flex-col hidden sm:block">
          {normalBlogs.map((blog, index) => (
            <BlogCard key={`normal-${index}`} {...blog} />
          ))}
        </div>
      </div>
      <div className="flex w-full">
        <button className="btn btn-outline btn-success rounded-full mt-8 mx-auto w-2/3 md:hidden">
          ดูทั้งหมด
        </button>
      </div>
    </div>
  );
};

export default Blog;
