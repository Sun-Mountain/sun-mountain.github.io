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
          <h1>About</h1>
          <h2>I am a software engineer that is passionate about accessibility, equity, and visibility in tech.</h2>
          <p>
            I have worked in the tech industry since 2018 as a full stack engineer. 
          </p>
          <p>
            In past careers, I have been a lifeguard, museum tour guide, dance coach, and event organizer. Each job uniquely prepared me for a career in tech. Now I use my community building skills as a co-organizer of <Link href="https://www.meetup.com/Baltimore-Code-and-Coffee"><a target="_blank">Baltimore Code & Coffee</a></Link>, an inclusive, informal, co-working session that (in the before times) met bi-weekly at <Link href="https://spark-bmore.com/"><a target="_blank">Spark</a></Link>.
          </p>
          <p>
            When I am not coding, I can usually be found hanging upside down on a trapeze or dancing at a local venue to live music. Or, if (for some reason, say a global pandemic) I'm forced to stay at home, I'm playing <Link href="/specs">games on my PC</Link>, reading whatever is on my TBR list, or chatting with friends over a beverage.
          </p>
          <p>
            I am currently working as a software engineer <Link href="https://fearless.tech/"><a target="_blank">@Fearless</a></Link> in Baltimore, Maryland.
          </p>
        </div>
        <div className={about.writing}>
          <h1>Writing</h1>
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
      </section>
    </Layout>
  )
}