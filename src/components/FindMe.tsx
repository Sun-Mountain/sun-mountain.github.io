'use client';
import { useAppSelector } from '@/store/store';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud as BlueSky,
  faLink
} from '@fortawesome/free-solid-svg-icons';
import {
  faDev,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import SocialMediaList from '@/data/socialmedia.json';

const FindMe = () => {
  const title = "Find Me".split('');
  const showTransitions = useAppSelector(state => state.SHOW_TRANSITIONS.transitionState);

  const findIcon = (site: string) => {
    switch(site) {
      case 'BlueSky':
        return <FontAwesomeIcon icon={BlueSky} />
      case 'GitHub':
        return <FontAwesomeIcon icon={faGithub} />
      case 'Dev.to':
        return <FontAwesomeIcon icon={faDev} />
      default:
        return <FontAwesomeIcon icon={faLink} />
    }
  }

  return (
    <section id="findme-spotlight">
      <h2 className={`${showTransitions ? 'transition' : ''}`}>
        {title.map((letter, index) => (
          <span key={index} className={`${showTransitions ? 'transition' : ''}`}>{letter}</span>
        ))}
      </h2>
      <div id="media-container">
        {SocialMediaList.map((item, index) => {
          
          return (
            <div key={index} className='link-container'>
              <Link href={item.url} target="_blank">
                {findIcon(item.site)}
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FindMe