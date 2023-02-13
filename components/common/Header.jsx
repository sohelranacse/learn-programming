/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
const PF = process.env.NEXT_PUBLIC_PF;

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <nav className="w-full fixed top-0 z-10 shadow-md bg-slate-100">
      <div className="container mx-auto px-2 h-14 flex flex-row">
        <Link
          href="/"
          className="basis-2/12 p-2 ease-linear duration-100 h-full"
        >
          <img src={`${PF}logo.png`} className="w-[150px]" alt={"logo"} />
        </Link>
        <ul className="basis-11/12 flex flex-row py-2">
          <li className="basis-1/12 text-center py-2">
            <Link
              href="/"
              className="py-2 px-4 hover:font-normal hover:bg-slate-200 hover:rounded-full ease-linear duration-150"
            >
              Home
            </Link>
          </li>
          <li className="basis-1/12 text-center py-2">
            <Link
              href="/"
              className="py-2 px-4 hover:bg-slate-200 hover:rounded-full ease-linear duration-150"
            >
              About
            </Link>
          </li>
          <li className="basis-10/12 ml-2">
            <form className="inline-flex h-10 w-full border border-slate-300">
              <input
                type="text"
                placeholder="Search..."
                className="h-full w-full pl-2"
                required
              />
              <button
                type="submit"
                className="text-white bg-slate-700 font-[600] text-sm h-full px-4"
              >
                <FaSearch />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
