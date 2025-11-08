import React from "react";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
      {/* Author Section */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author?.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-GB")}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-600">
          <CiBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="card-title text-base md:text-lg font-semibold">
          {title}
        </h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="news-thumbnail"
          className="rounded-xl object-cover w-full h-52"
        />
      </figure>

      {/* Details */}
      <div className="card-body p-4 pt-3">
        <p className="text-sm text-gray-700">
          {details.slice(0, 200)}...
          <span className="text-orange-500 font-medium cursor-pointer">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline text-xs font-medium capitalize"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-200">
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: rating.number }, (_, i) => (
              <AiFillStar key={i} />
            ))}
            <span className="text-gray-700 ml-1 font-medium">
              {rating.number}
            </span>
          </div>

          <div className="flex items-center gap-1 text-gray-600">
            <CiBookmark />
            <FaRegEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
