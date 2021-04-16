// Import necessary packages
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Step from "../components/Step";

const HowItWorks = () => {
  return (
    <div>
      <Helmet>
        <title>Happy Homework Helpers | Home</title>
      </Helmet>

      <Hero
        title="How it Works"
        text="Booking a tutor is seamless with our 3 step guide."
        imageURL="/images/how-it-works_hero.jpg"
      />

      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h2 className="mb-3">Steps to Success</h2>
            <p>
              We know your time is valuable, so our goal is to allow parents to
              easily book a tutor with as little effort as possible.
            </p>
          </div>
        </div>

        <div className="row mt-n1">
          <div className="col-sm-12 col-lg-4">
            <Step step="1" />
          </div>
          <div className="col-sm-12 col-lg-8 pt-5">
            <h3 className="fs-3">Sign Up</h3>
            <p className="mt-3">
              Sign up and browse through our extremely qualified tutors.
            </p>
            <a href="/signup" className="btn btn-primary btn-lg mt-3">
              Sign Up
            </a>
          </div>
        </div>

        <div className="row mt-n1">
          <div className="col-sm-12 col-lg-4">
            <Step step="2" />
          </div>
          <div className="col-sm-12 col-lg-8 pt-5">
            <h3 className="fs-3">Chat with the tutor.</h3>
            <p className="mt-3">Chat with the tutor to gain some insight.</p>
            <a href="/search" className="btn btn-primary btn-lg mt-3">
              Tutors
            </a>
          </div>
        </div>

        <div className="row mt-n1">
          <div className="col-sm-12 col-lg-4">
            <Step step="3" />
          </div>
          <div className="col-sm-12 col-lg-8 pt-5">
            <h3 className="fs-3">Book a Session</h3>
            <p className="mt-3">
              Book the tutor and enjoy your child's progression in school.{" "}
            </p>
            <a href="/search" className="btn btn-primary btn-lg mt-3">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
