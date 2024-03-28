
const Header = () => {

  const title = "PORTFOLIO.".split('');

  return (
    <div id="header">
      <h1>
        <div className="surtitle">
          welcome to my
        </div>
        <div id="title" className="expand-on-hover">
          {title.map((letter, index) => {
            return <span key={index}>{letter}</span>
          })}
        </div>
      </h1>
    </div>
  )
}

export default Header