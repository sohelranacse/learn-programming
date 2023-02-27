import React from "react";
import Article from "./Article";

function SpecificCategory({ categoryPost, categoryInfo }) {
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto h-full md:pl-2 py-8">
        <h1 className="text-4xl pb-3 text-yellow-500 text-center">
          {categoryInfo.category_name}
        </h1>
        <h3 className="pb-6 text-2xl dark:text-gray-200 text-center">
          {categoryInfo.category_slogan}
        </h3>
        <div className="md:grid grid-cols-3 gap-x-4">
          {categoryPost.length > 0 &&
            categoryPost.map((article, i) => (
              <Article
                key={i}
                post_title={article.post_title}
                post_slug={article.post_slug}
                description={article.description}
                category_icon={article.category_icon}
                category_name={article.category_name}
                category_slug={article.category_slug}
                published_on={article.post_date}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default SpecificCategory;
