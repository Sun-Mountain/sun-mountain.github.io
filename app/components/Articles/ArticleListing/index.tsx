interface ArticleProps {
  title: string;
  link: string;
  subtitle?: string;
}

interface ArticleListingProps {
  article: ArticleProps
}

export default function ArticleListing ({ article }: ArticleListingProps) {
  return (
    <div>
      {article.title}
    </div>
  )
}