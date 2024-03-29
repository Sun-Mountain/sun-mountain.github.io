import Link from "next/link";

const SingleArticle = ({
  article: {
    title,
    description,
    date,
    link
  }
}: {
  article: {
    title: string;
    description?: string;
    date: string;
    link: string;
  }
}) => {
  return (
    <div className='card-container'>
      <Link href={link} target="_blank" className='card'>
        <div className='heading'>
          <h3>
            {title}
          </h3>
        </div>
      </Link>
    </div>
  )
}

export default SingleArticle