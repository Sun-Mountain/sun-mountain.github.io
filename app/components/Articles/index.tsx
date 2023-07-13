import ArticleList from '@/app/data/articles.json'
import ArticleListing from './ArticleListing'

export default function Articles () {
  return (
    <section>
      <h2 className='section-title'>Selected Articles</h2>
      <div id='article-wrapper'>
        {ArticleList.map((article, index) => {
          return <ArticleListing key={index} article={article} index={index} />
        })}
      </div>
    </section>
  )
}