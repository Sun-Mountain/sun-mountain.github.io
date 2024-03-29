import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const PortfolioCard = ({
  project: {
    title,
    github,
    liveLink,
    description,
    madeWith
  }
}: {
  project: {
    title: string;
    github?: string;
    liveLink?: string;
    description?: string;
    madeWith?: string[];
  }
}) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <div>
          <div className='heading'>
            <h3>
              {title}
            </h3>
            {madeWith && (
              <div className='made-with-container'>
                <ul>
                  {madeWith.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          {description && (
            <div className='description-container'>
              {description}
            </div>
          )}
        </div>
        <div className='icons-container'>
          {liveLink && (
            <Link href={liveLink} target="_blank">
              <FontAwesomeIcon icon={faLink} />
            </Link>
          )}
          {github && (
            <Link href={github} target="_blank">
              <FontAwesomeIcon icon={faGithubAlt} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard