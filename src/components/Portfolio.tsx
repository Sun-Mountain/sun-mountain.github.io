'use client';
import { useAppSelector } from '@/store/store';
import ProjectList from '@/data/projects.json';
import PortfolioCard from '@/components/PortfolioCard';

const Portfolio = () => {
  const title = "Portfolio".split('');
  const showTransitions = useAppSelector(state => state.SHOW_TRANSITIONS.transitionState);

  return (
    <section id="portfolio-spotlight">
      <h2 className={`${showTransitions ? 'transition' : ''}`}>
        {title.map((letter, index) => (
          <span key={index} className={`${showTransitions ? 'transition' : ''}`}>{letter}</span>
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