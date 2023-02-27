/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import axios from "axios";
import SpecificGroup from "../../components/SpecificGroup";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Tutorial({ groupPost, groupInfo, groupCategory }) {
  return (
    <>
      <Head>
        <title>{groupInfo.group_name} | DevLearnHub</title>
        <meta name="description" content={groupInfo.meta_description} />
        <meta name="keyword" content={groupInfo.meta_keyword} />
      </Head>

      <SpecificGroup
        groupPost={groupPost}
        groupInfo={groupInfo}
        categories={groupCategory}
      />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const groupPostRes = await axios.get(
    `${API_URL}api/getPostByGroup/${params.id}`
  );
  const groupInfoRes = await axios.get(
    `${API_URL}api/groupInformation/${params.id}`
  );
  const groupCategoryRes = await axios.get(
    `${API_URL}api/groupCategory/${params.id}`
  );
  return {
    props: {
      groupPost: groupPostRes.data.response,
      groupInfo: groupInfoRes.data.response,
      groupCategory: groupCategoryRes.data.response,
    },
  };
};
export default Tutorial;
