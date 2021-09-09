const Article = ({ article, id }) => {
  const URL = `/articles/${id}`;
  return (
    <div className="h-full bg-white shadow-md transition duration-700 ease hover:bg-gray-100">
      {article && (
        <a href={URL} target="_blank" className="flex flex-col h-full">
          <img
            className="w-full h-full"
            src={
              article.urlToImage ||
              "https://via.placeholder.com/900?text=Image+Not+Found"
            }
            alt={article.title}
          />
          <h1 className="m-4 text-center">{article.title}</h1>
        </a>
      )}
    </div>
  );
};

export default Article;
