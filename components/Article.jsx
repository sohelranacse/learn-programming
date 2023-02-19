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
    <div className="mb-5 md:flex gap-2 border rounded shadow-md pl-3 p-4">
      <Link
        href="/category/1"
        className="text-yellow-500 font-bold text-3xl hover:text-blue-700 ease-linear duration-150"
      >
        <DiReact />
      </Link>
      <div>
        <Link
          href={post_slug}
          className="text-lg text-blue-700 hover:text-blue-400 ease-linear duration-150"
        >
          {post_title}
        </Link>
        <p className="pt-1 pb-2 text-justify">{description}</p>
        <div className="flex flex-wrap justify-end">
          <span className="text-sm text-slate-400 italic">{published_on}</span>
        </div>
      </div>
    </div>
  );
}

export default Article;
