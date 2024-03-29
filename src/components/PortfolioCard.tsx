import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';

const PortfolioCard = ({
  project: {
    title,
    github,
    liveLink
  }
}: {
  project: {
    title: string;
    github?: string;
    liveLink?: string;
  }
}) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='heading'>
          <h3>
            {title}
          </h3>
          <div className='icons-container'>
            {liveLink && (
              <FontAwesomeIcon icon={faLink} />
            )}
            {github && (
              <FontAwesomeIcon icon={faGithubAlt} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioCard