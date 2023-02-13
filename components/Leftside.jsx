import Link from "next/link";
import React from "react";

function Leftside() {
  return (
    <div className="basis-2/12 md:border-r border-slate-300 min-h-full py-6">
      <ul>
        <li>
          <Link
            className="py-2 block hover:bg-slate-100 hover:font-bold hover:border-r-2 hover:border-yellow-400 px-2"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="py-2 block hover:bg-slate-100 hover:font-bold hover:border-r-2 hover:border-yellow-400 px-2"
            href="/about"
          >
            PHP
          </Link>
        </li>
        <li>
          <Link
            className="py-2 block hover:bg-slate-100 hover:font-bold hover:border-r-2 hover:border-yellow-400 px-2"
            href="/"
          >
            React
          </Link>
        </li>
        <li>
          <Link
            className="py-2 block hover:bg-slate-100 hover:font-bold hover:border-r-2 hover:border-yellow-400 px-2"
            href="/about"
          >
            Python
          </Link>
        </li>
        <li>
          <Link
            className="py-2 block hover:bg-slate-100 hover:font-bold hover:border-r-2 hover:border-yellow-400 px-2"
            href="/"
          >
            DJango Rest Framework
          </Link>
        </li>
        <li>
          <Link
            className="py-2 block hover:bg-slate-100 hover:font-bold hover:border-r-2 hover:border-yellow-400 px-2"
            href="/about"
          >
            Artificial Intelligence
          </Link>
        </li>
        <li>
          <Link
            className="py-2 block hover:bg-slate-100 hover:font-bold hover:border-r-2 hover:border-yellow-400 px-2"
            href="/"
          >
            Computer Science & Engineering
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Leftside;
