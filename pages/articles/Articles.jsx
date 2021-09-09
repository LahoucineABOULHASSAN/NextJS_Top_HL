import Article from "./Article";

const loading = (
  <div className="my-12">
    <h2 className="text-4xl w-2/4 mx-auto text-center animate-ping">
      Loading ...
    </h2>
  </div>
);
const Articles = ({ news }) => {
  return (
    <section className="w-11/12 mx-auto mb-10">
      {news ? (
        <>
          <h2 className="text-xl font-semibold capitalize border-b-2 border-t-2 border-gray-400 py-4 mb-6">
            The live top HeadLines in the US right now
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {news.map((article, index) => (
              <Article article={article} key={index} id={index + 1} />
            ))}
          </div>
        </>
      ) : (
        loading
      )}
    </section>
  );
};

export default Articles;
