import Link from 'next/link';
import icons from '../public/socialmedia.json';
import styles from '../styles/footer.module.scss';
import layout from '../styles/layout.module.scss';
import { useRouter } from 'next/router'

export default function Footer() {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <footer>
      <div className={styles.footer_border}></div>
      <div className={styles.icons_container}>
        {icons && icons.length>0 && icons.map(icon => (
          <div className={styles.single_icon}>
            <Link href={icon.url}>
              <a target="_blank">
                <img
                  src={icon.logo}
                  alt={icon.alt}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {currentRoute !== '/' ? (
          <div className={layout.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        ) : null }
      </div>
    </footer>
  )
}