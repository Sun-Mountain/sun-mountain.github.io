import Link from 'next/link';
import nav from '../styles/nav.module.scss';
import styles from '../styles/layout.module.scss';
import { useRouter } from 'next/router'

export default function Nav({home, specs}) {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <nav className={styles.header}>
      <div>
        <h1>Nika Zonnenberg</h1>
        <h2>
          <Link href="https://fearless.tech/">
            <a target="_blank">
              Fearless
            </a>
          </Link>
          &nbsp;Software Engineer
        </h2>
      </div>
      <div className={`${nav.nav_container}`}>
        <Link href="/">
          <a className={currentRoute === '/' ? nav.selected : null}>
            About
          </a>
        </Link>
        <Link href="/specs">
          <a className={currentRoute === '/specs' ? nav.selected : null}>
            Specs
          </a>
        </Link>
        <Link href="/community">
          <a className={currentRoute === '/community' ? nav.selected : null}>
            Community
          </a>
        </Link>
        <Link href="/portfolio">
          <a className={currentRoute === '/portfolio' ? nav.selected : null}>
            Portfolio
          </a>
        </Link>
      </div>
    </nav>
  );
}