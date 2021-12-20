import Link from 'next/link';
import cn from 'classnames';
import nav from '../styles/nav.module.scss';
import styles from '../styles/layout.module.scss';

export default function Nav({home, specs}) {
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
          <a className={cn({
            [nav.selected]: home
          })}>About</a>
        </Link>
        <Link href="/specs">
          <a className={cn({
            [nav.selected]: specs
          })}>Specs</a>
        </Link>
      </div>
    </nav>
  );
}