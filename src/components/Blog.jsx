import React from "react";
import blogData from "../data/blog";

const displayedBlogs = blogData.slice(0, 4);

const BlogPost = ({ title, date, previewText, onClick }) => {
    return (
        <div className="flex bg-gray-100 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 cursor-pointer max-w-4xl mx-auto" onClick={onClick}>
          <img src={'images/blog/writing-oil-painting.jpg'} alt={title} className="w-1/3 h-auto object-cover" />
          <div className="p-4 w-2/3 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{date}</p>
            <p>{previewText}</p>
          </div>
        </div>
    );
};

const Blog = () => {

    const handleBlogClick = (link) => {
        window.open(link, "_blank")
    }

    return (
      <section id="blog" className="pt-12 pb-14 bg-gray-100">
        <div className="border-t-2 border-gray-300 my-8"></div>
        <div className="container mx-auto px-10">
          <h1 className="text-2xl text-center mb-8 mt-20">Blog</h1>
          <div className="grid grid-cols-1 gap-8">
            {displayedBlogs.map(blog => (
              <BlogPost 
                onClick={() => handleBlogClick(blog.link)}
                key={blog.id} 
                title={blog.title} 
                date={blog.date} 
                previewText={blog.previewText} 
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
                href="https://medium.com/@jonathanshamwana" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 button text-white font-semibold rounded-lg shadow-md focus:ring-opacity-75"
            >
                Read More
            </a>
          </div>
        </div>
      </section>
    );
};
  
export default Blog;