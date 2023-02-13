import React from "react";
import Link from "next/link";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Article from "./Article";

function Homepage() {
  return (
    <section className="px-2 mt-14 min-h-screen">
      <div className="container mx-auto md:flex flex-row h-full">
        <Leftside />
        <div className="basis-9/12 h-full py-6 md:px-6">
          <h1 className="text-xl pb-3">Featured Articles</h1>
          <ul className="py-2">
            <Article
              post_title={`What is the difference between an array and a linked list?`}
              post_slug={`/`}
              description={`Breadth-first search (BFS) and depth-first search (DFS) are two algorithms for traversing a graph or a tree. The main difference between BFS and DFS is the order in which they visit the nodes in a graph ortree.`}
              category_name={`Artificial Intelligence`}
              category_slug={`/about`}
              published_on={`29 January, 2022`}
            />
            <Article
              post_title={`What is the difference between an array and a linked list?`}
              post_slug={`/`}
              description={`Breadth-first search (BFS) and depth-first search (DFS) are two algorithms for traversing a graph or a tree. The main difference between BFS and DFS is the order in which they visit the nodes in a graph ortree.`}
              category_name={`PHP`}
              category_slug={`/about`}
              published_on={`29 January, 2022`}
            />
            <Article
              post_title={`What is the difference between an array and a linked list?`}
              post_slug={`/`}
              description={`Breadth-first search (BFS) and depth-first search (DFS) are two algorithms for traversing a graph or a tree. The main difference between BFS and DFS is the order in which they visit the nodes in a graph ortree.`}
              category_name={`React`}
              category_slug={`/about`}
              published_on={`29 January, 2022`}
            />
            <Article
              post_title={`What is the difference between an array and a linked list?`}
              post_slug={`/`}
              description={`Breadth-first search (BFS) and depth-first search (DFS) are two algorithms for traversing a graph or a tree. The main difference between BFS and DFS is the order in which they visit the nodes in a graph ortree.`}
              category_name={`PHP`}
              category_slug={`/about`}
              published_on={`29 January, 2022`}
            />
            <Article
              post_title={`What is the difference between an array and a linked list?`}
              post_slug={`/`}
              description={`Breadth-first search (BFS) and depth-first search (DFS) are two algorithms for traversing a graph or a tree. The main difference between BFS and DFS is the order in which they visit the nodes in a graph ortree.`}
              category_name={`PHP`}
              category_slug={`/about`}
              published_on={`29 January, 2022`}
            />
            <Article
              post_title={`What is the difference between an array and a linked list?`}
              post_slug={`/`}
              description={`Breadth-first search (BFS) and depth-first search (DFS) are two algorithms for traversing a graph or a tree. The main difference between BFS and DFS is the order in which they visit the nodes in a graph ortree.`}
              category_name={`PHP`}
              category_slug={`/about`}
              published_on={`29 January, 2022`}
            />
          </ul>
        </div>
        <Rightside />
      </div>
    </section>
  );
}

export default Homepage;
