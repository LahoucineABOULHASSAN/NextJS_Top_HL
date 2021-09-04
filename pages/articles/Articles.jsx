import Article from "./Article";
const Articles = ({ news }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12 mx-auto mb-10">
      {news.map((article, index) => (
        <Article article={article} key={index} id={index} />
      ))}
    </section>
  );
};

export default Articles;
