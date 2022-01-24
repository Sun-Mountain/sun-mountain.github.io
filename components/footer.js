import Link from 'next/link';
import icons from '../public/socialmedia.json';
import styles from '../styles/footer.module.scss';

export default function Footer(home) {

  return (
    <footer>
      <div className={styles.footer_border}></div>
      <div className={styles.icons_container}>
        {icons && icons.length>0 && icons.map(sm => (
          <div className={styles.single_icon}>
            <Link href={sm.url}>
              <a target="_blank">
                <img
                  src={sm.logo}
                  alt={sm.alt}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </footer>
  )
}