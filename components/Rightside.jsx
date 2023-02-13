import Link from "next/link";
import React from "react";

function Rightside() {
  return (
    <div className="basis-3/12 h-full py-6">
      <h1 className="text-xl">Recent Articles</h1>
      <ul className="py-2 list-[circle] pl-4">
        <li className="py-1">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
          >
            What is the difference between an array and a linked list?
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
          >
            How do you implement a stack and its operations using an array?
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
          >
            What is the difference between a depth-first search (DFS) and a
            breadth-first search (BFS) algorithm?
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
          >
            What is the time complexity of Dijkstra`s shortest path algorithm?
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
          >
            What is the difference between a min heap and a max heap and how are
            they implemented?
          </Link>
        </li>
        <li className="py-1">
          <Link
            href="/"
            className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
          >
            What is dynamic programming and how does it differ from greedy
            algorithms?
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Rightside;
