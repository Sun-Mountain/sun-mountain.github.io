import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import about from '../styles/about.module.scss'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={about.about_container}>
        <div className={about.intro}>
          <h2></h2>
        </div>
      </section>
    </Layout>
  )
}
