import SingleArticle from './SingleArticle';
import ArticleList from '@/data/articles.json';

const Articles = () => {

  const title = "Articles".split('');

  return (
    <section id="articles-spotlight">
      <h2>
        {title.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h2>
      <div className="container">
        {ArticleList.map((item, index) => (
          <SingleArticle key={index} article={item} />
        ))}
      </div>
    </section>
  )
}

export default Articles