import React from "react";
import RecentArticles from "./RecentArticles";
import RelatedArticles from "./RelatedArticles";
import Article from "./Article";

function SpecificCategory() {
  return (
    <section className="px-2 mt-14 min-h-screen">
      <div className="container mx-auto md:grid grid-cols-12 h-full">
        <div className="col-span-9 h-full py-6 md:px-6">
          <h1 className="text-4xl pb-2 dark:text-gray-200">React</h1>
          <p className="pb-4 dark:text-gray-200">Category Slogan Here</p>
          <div className="md:grid grid-cols-2 gap-x-4">
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
        </div>

        {/* right side */}
        <div className="col-span-3 h-full py-6">
          <RelatedArticles />
          <div className="py-2"></div>
          <RecentArticles />
        </div>
      </div>
    </section>
  );
}

export default SpecificCategory;
