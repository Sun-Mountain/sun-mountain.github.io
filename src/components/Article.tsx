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
      {ArticleList.map((project, index) => (
        <article key={index}>
          <h3>{project.title}</h3>
        </article>
      ))}
    </section>
  )
}

export default Articles