import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>About | DevLearnHub</title>
        <meta
          name="description"
          content="Experience the power of web development with DevLearnHub"
        />
      </Head>

      <section className="px-2 mt-14 h-screen">
        <div className="container mx-auto">
          <h1 className="text-2xl dark:text-gray-200">About</h1>
          <p className=" dark:text-gray-200">This is about page</p>
        </div>
      </section>
    </>
  );
}
