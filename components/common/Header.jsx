/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
const PF = process.env.NEXT_PUBLIC_PF;

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <nav className="w-full fixed top-0 z-10 shadow-md bg-slate-100 px-2">
      <div className="container mx-auto h-14 flex flex-row">
        <div className="basis-4/12 md:basis-7/12 flex justify-between">
          <Link href="/" className="p-2 ease-linear duration-100 h-full">
            <img src={`${PF}logo.png`} className="w-[150px]" alt={"logo"} />
          </Link>
          <ul className="hidden md:flex justify-between py-2">
            <li className="text-center">
              <Link
                href="/"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150"
              >
                Home
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150"
              >
                Front-end
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150"
              >
                Back-end
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150"
              >
                Web Security
              </Link>
            </li>
            <li className="text-center">
              <Link
                href="/about"
                className="inline-block py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150"
              >
                Web Performance
              </Link>
            </li>
          </ul>
        </div>
        <form className="basis-8/12 md:basis-5/12 inline-flex ml-2 my-2 h-10 w-full border border-slate-300 rounded-sm hover:border-yellow-400">
          <button
            type="submit"
            className="bg-white text-slate-400 font-bold text-sm px-4"
          >
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-2 focus:outline-none"
            required
          />
        </form>
      </div>
    </nav>
  );
}

export default Header;
