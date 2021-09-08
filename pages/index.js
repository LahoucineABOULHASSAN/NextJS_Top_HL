import Head from "next/head";
import Articles from "./articles/Articles";
const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY}`;

export const getStaticProps = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  return {
    props: { news: data.articles },
  };
};

export default function Home({ news }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Its24News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Articles news={news} />
    </div>
  );
}
