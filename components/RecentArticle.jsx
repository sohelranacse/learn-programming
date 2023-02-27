import React from "react";
import Article from "./Article";

function Recent({ recent }) {
  return (
    <>
      <h1 className="text-xl pb-4 dark:text-gray-200">Recent Articles</h1>
      <div>
        {recent.length > 0 &&
          recent.map((article, i) => (
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
    </>
  );
}

export default Recent;
