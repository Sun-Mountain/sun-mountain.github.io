import Link from "next/link"

export default function Header () {
  return (
    <section>
      <h1 className="header-title">welcome.</h1>
      <div>
        I&apos;m Nicole Zonnenberg, a software engineer <Link href='https://fearless.tech/' target='_blank'>@Fearless</Link>.
      </div>
    </section>
  )
}