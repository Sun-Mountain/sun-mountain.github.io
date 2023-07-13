import Link from "next/link"

export default function Header () {
  return (
    <section>
      <div className='header-title'>
        <strong>welcome</strong>.
      </div>
      <div>
        I&apos;m Nicole Zonnenberg, a software engineer <Link href='https://fearless.tech/' target='_blank'>@Fearless</Link>.
      </div>
    </section>
  )
}