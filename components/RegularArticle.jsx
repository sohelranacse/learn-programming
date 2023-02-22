import React from "react";
import Article from "./Article";

function RegularArticles() {
  return (
    <>
      <h1 className="text-xl pb-4 dark:text-gray-200">Articles</h1>
      <div>
        <Article
          post_title={`What is the difference between an array and a linked list?`}
          post_slug={`/article/1`}
          description={`Breadth-first search (BFS) and depth-first search (DFS) are two algorithms for traversing a graph or a tree. The main difference between BFS and DFS is the order in which they visit the nodes in a graph ortree.`}
          category_name={`Artificial Intelligence`}
          category_slug={`/about`}
          published_on={`29 January, 2022`}
        />
        <Article
          post_title={`What is the difference between an array and a linked list?`}
          post_slug={`/article/2`}
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
      </div>
    </>
  );
}

export default RegularArticles;
