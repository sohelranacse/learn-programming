/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import SidebarPost from "./SidebarPost";
import MyCode from "./MyCode";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { useTheme } from "next-themes";

function ArticleDetails({ postInfo }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const postDetails = postInfo.postDetails;
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto md:grid grid-cols-12 h-full">
        <div className="col-span-9 h-full md:pl-2 py-6 md:pr-6">
          <h1 className="mt-2 text-xl md:text-4xl pb-3 dark:text-gray-200">
            {postInfo.post_title}
          </h1>
          <div className="md:flex space-y-2 flex-wrap justify-between pb-4">
            <Link
              href={`/category/${postInfo.category_slug}`}
              className="flex flex-wrap text-yellow-500 hover:text-gray-200 ease-linear duration-150"
            >
              <div
                className="font-bold text-xl pt-0.5 pr-1"
                dangerouslySetInnerHTML={{ __html: postInfo.category_icon }}
              ></div>{" "}
              <span className=" font-normal">{postInfo.category_name}</span>
            </Link>
            <span className="text-slate-400 text-sm flex">
              Total Views: {postInfo.hit}
            </span>
            <span className="text-slate-400 text-sm flex italic">
              Published on: {postInfo.post_date}
            </span>
          </div>

          {/* post description */}
          <div className="dark:text-gray-300 leading-7">
            {postInfo.description}
          </div>

          {/* post details */}
          {postDetails.length > 0 &&
            postDetails.map((post, i) =>
              post.post_type == 1 ? (
                <div
                  key={i}
                  className={
                    theme == "dark"
                      ? `my-4 dark:text-gray-300 leading-7 textDetailsDark`
                      : `my-4 dark:text-gray-300 leading-7 textDetails`
                  }
                  dangerouslySetInnerHTML={{ __html: post.post_details }}
                ></div>
              ) : post.post_type == 2 ? (
                <div key={i} className="my-4">
                  <MyCode
                    code={post.post_details}
                    language={post.post_details_title}
                  />
                </div>
              ) : (
                <div key={i} className="my-4">
                  <img
                    src={`${API_URL}posts/${post.post_image}`}
                    alt={postInfo.post_title}
                  />
                </div>
              )
            )}
          {/* post details end */}
        </div>

        {/* right side */}
        <div className="col-span-3 h-full py-6">
          <SidebarPost
            name={`Related`}
            sidebarArticles={postInfo.relatedPost}
          />
        </div>
      </div>
    </section>
  );
}

export default ArticleDetails;
