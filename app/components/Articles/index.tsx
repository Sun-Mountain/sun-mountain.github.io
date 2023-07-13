import ArticleList from '@/app/data/articles.json'
import ArticleListing from './ArticleListing'

export default function Articles () {
  return (
    <section>
      <h2 className='section-title'>Selected Articles</h2>
      <div>
        {ArticleList.map((article, index) => {
          return <ArticleListing key={index} article={article} />
        })}
      </div>
    </section>
  )
}