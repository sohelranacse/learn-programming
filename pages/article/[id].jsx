import Head from "next/head";
import axios from "axios";
import ArticleDetails from "../../components/ArticleDetails";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Article({ postInfo }) {
  return (
    <>
      <Head>
        <title>{postInfo.post_title} | DevLearnHub</title>
        <meta name="description" content={postInfo.post_meta_description} />
        <meta name="keyword" content={postInfo.post_meta_keyword} />
      </Head>

      <ArticleDetails postInfo={postInfo} />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const postInfoRes = await axios.get(`${API_URL}api/postDetails/${params.id}`);
  return {
    props: {
      postInfo: postInfoRes.data.response,
    },
  };
};
export default Article;
