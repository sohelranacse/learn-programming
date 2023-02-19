import Image from "next/image";
import React from "react";
import Link from "next/link";

import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="bg-slate-900 px-2 dark:bg-black">
        <div className="container mx-auto md:grid grid-cols-4 gap-4 pt-8 md:py-8">
          <div className="py-4 md:py-8">
            <h3 className="py-4 uppercase text-slate-300">LearnWebHub</h3>
            <ul className="text-slate-400 text-sm">
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  About
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Press
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Work here
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Contact Us
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Questions
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-4 md:py-8">
            <h3 className="py-4 uppercase text-slate-300">Products</h3>
            <ul className="text-slate-400 text-sm">
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  About
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Press
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Work here
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Contact Us
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Questions
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-4 md:py-8">
            <h3 className="py-4 uppercase text-slate-300">Policies</h3>
            <ul className="text-slate-400 text-sm">
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  About
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Press
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Work here
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Contact Us
                </Link>
              </li>
              <li className="py-1">
                <Link
                  href="/about"
                  className="hover:text-slate-200 ease-linear duration-100"
                >
                  Questions
                </Link>
              </li>
            </ul>
          </div>
          <div className="py-4 md:py-8">
            {/* last div */}
            <ul className="flex gap-x-5 md:justify-end md:pt-32">
              <li className="h-8 w-8 bg-slate-300 rounded-full text-center leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full inline-block w-full h-full hover:text-white hover:bg-[#3b5998] ease-linear duration-300"
                >
                  <FaFacebookF className="inline-block" />
                </a>
              </li>
              <li className="h-8 w-8 bg-slate-300 rounded-full text-center leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full inline-block w-full h-full hover:text-white hover:bg-[#FF0000] ease-linear duration-300"
                >
                  <FaYoutube className="inline-block" />
                </a>
              </li>
              <li className="h-8 w-8 bg-slate-300 rounded-full text-center leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full inline-block w-full h-full hover:text-white hover:bg-[#0072b1] ease-linear duration-300"
                >
                  <FaLinkedinIn className="inline-block" />
                </a>
              </li>
            </ul>
            <p className="text-slate-400 text-sm md:text-right pt-4">
              DevLearnHub.com &copy; All Right Reserved{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
