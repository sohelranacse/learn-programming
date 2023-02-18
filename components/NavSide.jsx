import Link from "next/link";
import React from "react";
import { HiOutlineHome } from "react-icons/hi";

function NavSide({ categories }) {
  return (
    <div className="basis-2/12 md:border-r border-slate-300 min-h-full py-6">
      <ul>
        <li>
          <Link
            className="py-2 flex gap-2 hover:bg-slate-100 hover:text-blue-700 border-r-2 border-transparent hover:border-yellow-400 px-2"
            href="/"
          >
            <span className="text-yellow-500 font-bold text-2xl">
              <HiOutlineHome />
            </span>
            Home
          </Link>
        </li>
        {categories.length > 0 &&
          categories.map((category, i) => (
            <li key={i}>
              <Link
                className="py-2 flex gap-2 hover:bg-slate-100 hover:text-blue-700 border-r-2 border-transparent hover:border-yellow-400 px-2"
                href={`/category/${category.category_slug}`}
                passHref
              >
                <span
                  className="text-yellow-500 font-bold text-2xl"
                  dangerouslySetInnerHTML={{ __html: category.category_icon }}
                ></span>
                {category.category_name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NavSide;
