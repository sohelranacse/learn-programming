import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <title>Learn Programming</title>
        <meta name="description" content="Learn Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p className="container mx-auto text-[#f00]">Good morning, Homepage</p>
    </>
  );
}
