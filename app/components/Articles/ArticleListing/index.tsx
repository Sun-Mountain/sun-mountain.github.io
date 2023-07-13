import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'

interface ArticleProps {
  title: string;
  link: string;
  subtitle?: string;
}

interface ArticleListingProps {
  article: ArticleProps;
  index: number;
}

export default function ArticleListing ({ article, index }: ArticleListingProps) {

  const { title, link, subtitle } = article;

  return (
    <>
      {index > 0 && (
        <div className='article-divider'></div>
      )}
      <div className='article-listing'>
        <FontAwesomeIcon icon={faPenNib} />&nbsp;&nbsp;
        <Link href={link} target='_blank' className='article-title'>
          {title}
        </Link>
        {subtitle && (
          <div className='article-subtitle'>
            {subtitle}
          </div>
        )}
      </div>
    </>
  )
}