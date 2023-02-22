import React from "react";
import Link from "next/link";

import { DiReact } from "react-icons/di";

function Article({
  post_title,
  post_slug,
  description,
  category_name,
  category_slug,
  published_on,
}) {
  return (
    <div className="mb-5 border rounded shadow-md p-4 dark:border-gray-700">
      <h1 className="text-lg">
        <Link
          href={post_slug}
          className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
        >
          {post_title}
        </Link>
      </h1>
      <p className="pt-1 pb-2 text-justify dark:text-gray-400">
        {description}{" "}
        <Link
          href={post_slug}
          className="italic text-slate-400 hover:text-blue-400 ease-linear duration-150"
        >
          read more...
        </Link>
      </p>
      <div className="flex flex-wrap justify-between">
        <Link
          href="/category/1"
          className="flex flex-wrap text-yellow-500 hover:text-blue-700 ease-linear duration-150"
        >
          <span className="font-bold text-lg pt-0.5">
            <DiReact />
          </span>{" "}
          <span className="text-sm font-normal">React</span>
        </Link>
        <span className="text-sm text-slate-400 italic">{published_on}</span>
      </div>
    </div>
  );
}

export default Article;
