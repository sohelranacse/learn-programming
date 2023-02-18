/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import SpecificCategory from "../../components/SpecificCategory";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PF = process.env.NEXT_PUBLIC_PF;

function Category() {
  // console.log(postDetails);
  const router = useRouter();
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <title>Category | Learn Programming</title>
        <meta name="description" content="Learn Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SpecificCategory />
    </>
  );
}

// export const getServerSideProps = async ({ params }) => {
//   const postDetailsRes = await axios.get(
//     `${API_URL}api/postDetails/${params.id}`
//   );
//   return {
//     props: {
//       postDetails: postDetailsRes.data.response,
//     },
//   };
// };
export default Category;
