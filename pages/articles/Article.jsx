const Article = ({ article, id }) => {
  const { title, urlToImage } = article;
  const URL = `/articles/${id}/${title}`;
  return (
    <article className="h-full bg-gray-100 shadow-md transition duration-700 ease hover:bg-gray-200">
      <a href={URL} className="flex flex-col h-full">
        <img
          className="w-full h-full"
          src={
            urlToImage || "https://via.placeholder.com/900?text=Image+Not+Found"
          }
          alt={title}
        />
        <h1 className="m-4 text-center">{title}</h1>
      </a>
    </article>
  );
};

export default Article;
