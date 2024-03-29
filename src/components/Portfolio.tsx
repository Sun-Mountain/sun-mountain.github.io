import ProjectList from '@/data/projects.json';

const Portfolio = () => {

  const title = "Portfolio".split('');

  return (
    <section id="portfolio-spotlight">
      <h2>
        {title.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h2>
      {ProjectList.map((project, index) => (
        <article key={index}>
          <h3>{project.title}</h3>
        </article>
      ))}
    </section>
  )
}

export default Portfolio