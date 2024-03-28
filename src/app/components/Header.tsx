
const Header = () => {

  const title = "PORTFOLIO".split('');

  return (
    <div id="header">
      <h1>
        {title.map((letter, index) => {
          return <span key={index}>{letter}</span>
        })}
      </h1>
    </div>
  )
}

export default Header