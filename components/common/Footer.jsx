import Image from "next/image";
import React from "react";
import Link from "next/link";

import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-800 px-2">
      <div className="container mx-auto text-center text-slate-100 py-2">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <Link
            href="/"
            className="text-yellow-300 hover:text-slate-100 ease-linear duration-200"
          >
            DevLearnHub.com
          </Link>{" "}
          All Right Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
