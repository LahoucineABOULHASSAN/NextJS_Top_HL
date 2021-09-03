import Article from "./Article";
const Articles = ({ news }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {news.map((article, index) => (
        <Article article={article} key={index} />
      ))}
    </div>
  );
};

export default Articles;
