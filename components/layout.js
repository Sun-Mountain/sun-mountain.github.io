import Head from 'next/head';
import styles from '../styles/layout.module.scss';

import Footer from './footer';
import Nav from './nav';

export const siteTitle = 'Nicole Zonnenberg Portfolio';

export default function Layout({ children }) {
  return (<div className={styles.container}>
      <Head>
        <html lang="eng-US" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal portfolio for Nicole Zonnenberg."
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />
      <main>
        {children}
      </main>
      <Footer />
    </div>);
} 