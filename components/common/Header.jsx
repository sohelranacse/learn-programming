/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Dark from "./Dark";
import React, { useState } from "react";
const PF = process.env.NEXT_PUBLIC_PF;

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "next-themes";

function Header() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? `${PF}logo-dark.png` : `${PF}logo.png`;

  return (
    <nav className="w-full fixed top-0 z-10 shadow-md bg-slate-100 px-2 border-t-[3.5px] border-yellow-400 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto h-14 grid grid-cols-12">
        <div className="col-span-4 md:col-span-7 flex md:justify-between">
          {/* menu icon */}
          <AiOutlineMenu
            role="button"
            className="md:hidden my-2.5 h-9 w-8 text-yellow-500"
          />

          {/* mobile logo */}
          <Link
            href="/"
            className="md:hidden pl-4 py-[10px] ease-linear duration-100"
          >
            <img src={`${PF}logo32.png`} className="" alt={"mobile logo"} />
          </Link>

          {/* logo */}
          <Link
            href="/"
            className="hidden md:block pl-2 py-[10px] ease-linear duration-100 h-full"
          >
            <img src={logoSrc} className="w-40" alt={"logo"} />
          </Link>

          {/* menu */}
          <ul className="hidden md:flex justify-between py-2">
            <li className="text-center">
              <Link
                href="/"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150 dark:hover:bg-gray-500"
              >
                Home
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150 dark:hover:bg-gray-500"
              >
                Front-end
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150 dark:hover:bg-gray-500"
              >
                Back-end
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150 dark:hover:bg-gray-500"
              >
                Web Security
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150 dark:hover:bg-gray-500"
              >
                Web Performance
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-8 md:col-span-5  ml-2 my-2 flex justify-between gap-2">
          <form className="inline-flex h-10 w-full border border-slate-300 rounded-sm hover:border-yellow-400 dark:border-gray-700 dark:hover:border-gray-400 ease-linear duration-150">
            <button
              type="submit"
              className="bg-white text-slate-400 font-bold text-lg px-4 dark:bg-gray-800"
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white focus:outline-none dark:bg-gray-800"
              required
            />
          </form>
          <Dark />
        </div>
      </div>
    </nav>
  );
}

export default Header;
