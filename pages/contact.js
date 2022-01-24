import Head from 'next/head'
import Layout from '../components/layout'
// import Link from 'next/link'

import style from '../styles/contact.module.scss'

export default function Contace() {
  return (
    <Layout contact>
      <Head>
        <title>Contact</title>
      </Head>
      <section>
        <div className={style.contact_card}>
          <h2>Recruiter?</h2>
          While I am <strong>currently not looking for opportunities</strong>, you can direct all inquiries to <a href="https://forms.gle/Ef6rMi2uoUpRk7AW6" target="_blank">this form</a>.<br /><br />
          
          If / when I <strong>am</strong> looking for a new adventure, I will go through this list first. :)
        </div>
      </section>
    </Layout>
  )
}