import React from "react";
import RecentArticles from "./RecentArticles";
import RelatedArticles from "./RelatedArticles";
import Note from "./common/Note";

function ArticleDetails() {
  return (
    <section className="px-2 mt-14 min-h-screen">
      <div className="container mx-auto md:flex flex-row h-full">
        <div className="basis-9/12 h-full py-6 md:px-6">
          <h1 className="text-xl pb-3">Post Titles</h1>
          <div>Post details here</div>
          <Note />
        </div>

        {/* right side */}
        <div className="basis-3/12 h-full py-6">
          <RelatedArticles />
          <div className="py-2"></div>
          <RecentArticles />
        </div>
      </div>
    </section>
  );
}

export default ArticleDetails;
