import PropTypes from "prop-types";
import React from "react";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blogInfo }) => {
  return (
    <div className="w-full pb-10 space-y-4">
      <img className="w-full" src={blogInfo.cover} alt="" />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img className="w-10 h-10" src={blogInfo.author_img} alt="" />
          <div>
            <h2 className="text-xl font-bold">{blogInfo.author}</h2>
            <p>{blogInfo.posted_date}</p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span>{blogInfo.reading_time} min to read</span>
          <button>
            <CiBookmark />
          </button>
        </div>
      </div>
      <h1 className="w-8/12 text-5xl font-semibold">{blogInfo.title}</h1>

      <p>
        {blogInfo.hashtags.map((hashtag, index) => (
          <span key={index}>
            <a href="#">#{hashtag}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
