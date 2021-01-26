import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'

import about from '../styles/about.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={about.about_container}>
        <div className={about.bio}>
          <h1>About Me</h1>
          <h2>I am a software engineer that is passionate about accessibility, equity, and visibility in tech.</h2>
          <p>
            I am currently working as a software engineer <Link href="https://fearless.tech/"><a target="_blank">@Fearless</a></Link> in Baltimore, Maryland.
          </p>
        </div>
        <div className={about.writing}>
          <h1>Selected Writings</h1>
          <Link href="https://dev.to/nikacodes/basic-color-theory-for-web-developers-15a0">
            <a target="_blank">
              Basic Color Theory for Web Developers
            </a>
          </Link>
          <Link href="https://fearless.tech/blog/2020/09/07/what-is-tech-debt">
            <a target="_blank">
              What is Tech Debt?
            </a>
          </Link>
        </div>
        <div className={about.site}>
          <h4>About This Site</h4>
          <p>
            Made with NextJS. Hosted on Github Pages.
          </p>
          <p>
            Special thanks to James Wallis's <Link href="https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn"><a>helpful tutorial</a></Link> for deploying a NextJS site to Github webpages.
          </p>
        </div>
      </section>
    </Layout>
  )
}