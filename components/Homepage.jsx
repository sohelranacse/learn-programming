import React from "react";
import NavSide from "./NavSide";
import RecentArticles from "./RecentArticles";
import FeaturedArticles from "./FeaturedArticles";
import RegularArticles from "./RegularArticle";

function Homepage({ categories }) {
  return (
    <section className="px-2 mt-14 min-h-screen">
      <div className="container mx-auto md:grid grid-cols-12">
        <NavSide categories={categories} />
        <div className="col-span-7 h-full py-6 md:px-6">
          <FeaturedArticles />
          <RegularArticles />
        </div>

        {/* right side */}
        <div className="col-span-3 py-6">
          <RecentArticles />
        </div>
      </div>
    </section>
  );
}

export default Homepage;
