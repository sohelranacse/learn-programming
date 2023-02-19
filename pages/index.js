import Head from "next/head";
import Homepage from "../components/Homepage";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ categories }) {

  return (
    <>
      <Head>
        <title>DevLearnHub</title>
        <meta name="description" content="Experience the power of web development with DevLearnHub." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage categories={categories} />
    </>
  );
}


export const getServerSideProps = async () => {
  const categoryRes = await axios.get(`${API_URL}api/categories`);
  return {
    props: {
      categories: categoryRes.data.response,
    },
  };
};