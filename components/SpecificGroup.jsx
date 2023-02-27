import Article from "./Article";
import NavSide from "./NavSide";

function SpecificGroup({ groupPost, groupInfo, categories }) {
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto h-full">
        <h1 className="text-4xl pb-3 text-yellow-500 pt-8 text-center">
          {groupInfo.group_name}
        </h1>
        <h3 className="pb-6 text-2xl dark:text-gray-200 text-center">
          {groupInfo.group_slogan}
        </h3>
        <div className="md:grid grid-cols-12 ">
          <NavSide categories={categories} />
          <div className="col-span-9 h-full md:pl-2 py-6 md:pr-6">
            <div className="md:grid grid-cols-2 gap-x-4">
              {groupPost.length > 0 &&
                groupPost.map((article, i) => (
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
        </div>
      </div>
    </section>
  );
}

export default SpecificGroup;
