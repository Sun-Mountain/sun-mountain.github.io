import Head from 'next/head'
import Link from 'next/link'

export default function Specs() {
  return (
    <>
      <Head>
        <title>Gaming PC Specs</title>
      </Head>
      <h1>Specs</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}