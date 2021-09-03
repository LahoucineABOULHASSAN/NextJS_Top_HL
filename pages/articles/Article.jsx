const Article = ({ article }) => {
  const { title, urlToImage, description } = article;
  return (
    <article className="w-full p-4 bg-gray-100 border-1 border-gray-500 shadow">
      <img src={urlToImage} alt={title} />
      <h1 className="my-4">{title}</h1>
      <p>{description}</p>
    </article>
  );
};

export default Article;
