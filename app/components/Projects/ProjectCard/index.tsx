import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

interface Project {
  name: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  languagesAndTools?: string[];
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard ({
  project
}: ProjectCardProps) {

  const { name, liveLink, githubLink, description, languagesAndTools } = project;

  return (
    <>
      <div className='card project-card'>
        <div className='card-header'>
          <div className={`card-title ${!liveLink ? 'right-border' : ''}`}>
            {name}
          </div>
          {liveLink && (
            <Link href={liveLink} className='open-link-container' target='_blank'>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          )}
        </div>
        <div className='card-body'>
          {description}
          {languagesAndTools && (
            <div className='tools-list'>
              {languagesAndTools.map((item, index) => {
                return (
                  <div className='tool-item' key={index}>
                    {item}
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className='links'>
          {githubLink && (
            <Link href={githubLink} target='_blank'>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          )}
        </div>
      </div>
    </>
  )
}