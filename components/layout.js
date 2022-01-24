import Head from 'next/head';
import styles from '../styles/layout.module.scss';

import Footer from './footer';
import Nav from './nav';

const name = 'Nika';
export const siteTitle = 'Nika Zonnenberg Portfolio';

export default function Layout({ children }) {
  return (<div className={styles.container}>
      <Head>
        <html lang="eng-US" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal portfolio for Nika Zonnenberg."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
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