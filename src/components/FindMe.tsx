import SocialMediaList from '@/data/socialmedia.json';

const FindMe = () => {

  const title = "Find Me".split('');

  return (
    <section id="findme-spotlight">
      <h2>
        {title.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h2>
      {SocialMediaList.map((item, index) => (
        <article key={index}>
          <h3>{item.site}</h3>
        </article>
      ))}
    </section>
  )
}

export default FindMe