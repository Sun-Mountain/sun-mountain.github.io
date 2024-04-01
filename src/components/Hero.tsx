import SwitchComponent from "./SwitchComponent";

const Hero = () => {
  const welcome = "Welcome".split('');

  return (
    <header>
      <SwitchComponent />
      <h1>
        {welcome.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </header>
  )
}

export default Hero