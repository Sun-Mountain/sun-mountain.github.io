import Portfolio from "@/components/Portfolio";
import Articles from "@/components/Article";
import FindMe from "@/components/FindMe";

export default function Home() {
  return (
    <>
      <section>
        Hello, World! I am <strong>Nicole Zonnenberg</strong>.<br /><br />
        I am a <strong>Full Stack Developer</strong> with a passion for visibility, accessibility, and equity in tech.<br /><br />
        Below you can find some select projects I have worked on, articles I have written, and where to find me online.
      </section>
      <Portfolio />
      <Articles />
      <FindMe />
    </>
  );
}
