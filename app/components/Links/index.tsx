import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Links () {
  return (
    <section id='links-section'>
      <Link href='https://github.com/Sun-Mountain' target='_blank' className='footer-link'>
        <FontAwesomeIcon icon={faGithub} />
      </Link>
      <Link href='https://www.linkedin.com/in/nzonnenberg/' target='_blank' className='footer-link'>
        <FontAwesomeIcon icon={faLinkedin} />
      </Link>
    </section>
  )
}