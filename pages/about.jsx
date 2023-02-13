import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About | Learn Programming</title>
        <meta name="description" content="Learn Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="px-2 mt-14 h-screen">
        <div className="container mx-auto">
          <h1 className="text-2xl">About</h1>
          <p>This is about page</p>
        </div>
      </section>
    </>
  );
}