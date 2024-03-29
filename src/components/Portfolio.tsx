import ProjectList from '@/data/projects.json';
import PortfolioCard from '@/components/PortfolioCard';

const Portfolio = () => {

  const title = "Portfolio".split('');

  return (
    <section id="portfolio-spotlight">
      <h2>
        {title.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h2>
      <div className="container">
        {ProjectList.map((item, index) => (
          <PortfolioCard key={index} project={item} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio