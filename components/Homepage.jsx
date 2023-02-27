import NavSide from "./NavSide";
import FeaturedArticles from "./FeaturedArticles";
import Recent from "./RecentArticle";
import SidebarPost from "./SidebarPost";

function Homepage({ categories, featured, recent, popular }) {
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto md:grid grid-cols-12">
        <NavSide categories={categories} />
        <div className="col-span-7 h-full py-6 md:px-6">
          <FeaturedArticles featured={featured} />
          <Recent recent={recent} />
        </div>

        {/* right side */}
        <div className="col-span-3 py-6">
          <SidebarPost name={`Popular`} sidebarArticles={popular} />
        </div>
      </div>
    </section>
  );
}

export default Homepage;
