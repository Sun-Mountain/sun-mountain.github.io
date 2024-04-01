'use client';
import { useAppSelector } from '@/store/store';
import SingleArticle from './SingleArticle';
import ArticleList from '@/data/articles.json';

const Articles = () => {
  const title = "Articles".split('');
  const showTransitions = useAppSelector(state => state.SHOW_TRANSITIONS.transitionState);

  return (
    <section id="articles-spotlight">
      <h2 className={`${showTransitions ? 'transition' : ''}`}>
        {title.map((letter, index) => (
          <span key={index} className={`${showTransitions ? 'transition' : ''}`}>{letter}</span>
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