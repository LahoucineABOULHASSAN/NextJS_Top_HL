import Head from "next/head";
import moment from "moment";

const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_PUBLIC_API_KEY}`;

export const getStaticPaths = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const paths = data.articles.map((article, index) => {
    return {
      params: { id: (index + 1).toString() },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = parseInt(context.params.id);

  const res = await fetch(URL);
  const data = await res.json();

  const article = data.articles[id - 1];

  return {
    props: { article },
  };
};

const Serie = ({ article }) => {
  const published = moment(article.publishedAt).format(
    "dddd, MMMM Do YYYY,[ at] h:mm:ss a"
  );
  return (
    <>
      <Head>
        <title>TopHL | {article.title}</title>
      </Head>
      <section className="flex flex-col items-center justify-center w-11/12 mx-auto mb-10">
        <div className="article-title mb-8 w-full">
          <h2 className="text-2xl text-coral-700 text-center font-semibold capitalize border-b-2 border-t-2 border-gray-400 py-4 mb-3">
            {article.title}
          </h2>
          <h2 className="text-md font-bold">
            <span className="mr-3">By:</span>
            <span className="text-gray-400 font-semibold">
              {article.author}
            </span>
          </h2>
          <h3 className="text-md  font-bold">
            <span className="mr-3">Updated:</span>
            <span className="font-semibold text-gray-500">{published}</span>
          </h3>
        </div>
        <img
          className="mb-6 w-full"
          src={
            article.urlToImage ||
            "https://via.placeholder.com/900?text=Image+Not+Found"
          }
        />
        <p className="text-gray-600 w-full mb-6 leading-8">
          {article.description || article.content}
        </p>
        <a
          className="text-gray-600 font-semibold border-b border-gray-600 hover:text-black hover:border-black pb-1"
          href={article.url}
          target="_blank"
        >
          Read Article
        </a>
      </section>
    </>
  );
};

export default Serie;
