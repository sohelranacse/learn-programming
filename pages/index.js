import Head from "next/head";
import Homepage from "../components/Homepage";

export default function Home() {

  return (
    <>
      <Head>
        <title>Learn Programming</title>
        <meta name="description" content="Learn Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />

      {/* <div className="container mx-auto">
        <p>Good morning, Homepage</p>
        <h1 className="text-2xl">Computer Science</h1>
      </div> */}
    </>
  );
}
