import Link from "next/link"

export default function Header () {
  return (
    <section>
      <h1 className="header-title">welcome.</h1>
      <div>
        I&apos;m Nicole Zonnenberg, a software engineer <Link href='https://fearless.tech/' target='_blank'>@Fearless</Link>.<br /><br />
        Passionate about accessibility, equity, and visibility in tech, I work in government and private spaces to improve tech and tech literacy.<br /><br />
        In my free time, I enjoy artistic crafts, circus, and playing board games and TTRPGs with friends.
      </div>
    </section>
  )
}