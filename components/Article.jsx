import React from "react";
import Link from "next/link";

function Article({
  post_title,
  post_slug,
  description,
  category_name,
  category_slug,
  published_on,
}) {
  return (
    <li className="border-t border-slate-150 py-3">
      <Link
        href={post_slug}
        className="text-lg text-blue-700 hover:text-blue-400 ease-linear duration-150"
      >
        {post_title}
      </Link>
      <p className="pt-1 pb-2">{description}</p>
      <div className="flex flex-wrap justify-between">
        <Link
          className="inline-block border border-slate-200 text-center text-blue-600 p-2 text-sm bg-slate-100 hover:bg-slate-200 ease-linear duration-100 rounded-md"
          href={category_slug}
        >
          {category_name}
        </Link>
        <span className="text-sm text-slate-400">{published_on}</span>
      </div>
    </li>
  );
}

export default Article;
