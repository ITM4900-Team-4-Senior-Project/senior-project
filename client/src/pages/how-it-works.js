// Import necessary packages
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import Step from '../components/Step'

const HowItWorks = () => {
  return (
    <div>
      <Helmet>
        <title>Happy Homework Helpers | Home</title>
      </Helmet>

      <Hero title="How it Works" text="Some fancy words to sell the service to people" imageURL="/images/how-it-works_hero.jpg" />

      <div className="container">
        
        <div className="row mt-5">
          <div className="col">
            <h2 className="mb-3">Steps to Success</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nisi quam cupiditate, necessitatibus, veritatis sapiente totam at ex, facilis velit doloribus. Accusantium fugiat repudiandae architecto expedita harum ipsam necessitatibus nostrum!</p>
          </div>
        </div>

        <div className="row mt-n1">
          <div className="col-sm-12 col-lg-4"><Step step="1" /></div>
          <div className="col-sm-12 col-lg-8 pt-5">
            <h3 className="fs-3">Sign Up</h3>
            <p className="mt-3">Some text to explain why signing up is important</p>
            <a href="/signup" className="btn btn-primary btn-lg mt-3">Sign Up</a>
          </div>
        </div>

        <div className="row mt-n1">
          <div className="col-sm-12 col-lg-4"><Step step="2" /></div>
          <div className="col-sm-12 col-lg-8 pt-5">
            <h3 className="fs-3">Find a Tutor</h3>
            <p className="mt-3">Some text to explain how to find a tutor</p>
            <a href="/search" className="btn btn-primary btn-lg mt-3">Tutors</a>
          </div>
        </div>

        <div className="row mt-n1">
          <div className="col-sm-12 col-lg-4"><Step step="3" /></div>
          <div className="col-sm-12 col-lg-8 pt-5">
            <h3 className="fs-3">Book a Session</h3>
            <p className="mt-3">Some text to explain how to book a session</p>
            <a href="/search" className="btn btn-primary btn-lg mt-3">Book a Session</a>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default HowItWorks
