import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero--wrapper">
      <img src={props.imageURL} alt=""/>
      <div className={`hero-title--overlay ${props.float}`}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Hero
