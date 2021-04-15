// Import necessary packages
import { Card } from "react-bootstrap";
import { Helmet } from "react-helmet";

import Hero from "../components/Hero";

const About = () => {
  return (
    <div>
      {/* This changes the page title in the browser tab. */}
      <Helmet>
        <title>Happy Homework Helpers | About</title>
      </Helmet>

      <Hero
        title="About Us"
        text="Our goal is to aide schools with equipping our young people with the skills and mindset to
        thrive and then take on the world!"
        imageURL="/images/library_1920x1080.jpg"
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h2>Value Statement</h2>
              <p className="mt-3">
                Our vision is to be an inspiring and empowering force in
                children’s lives so they are excited and motivated to learn,
                embrace learning, and achieve their personal best.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2>Meet the Team</h2>
            <p>
              We are a dedicated group that truly cares about the younger generation and we aim to prepare them 
              to succeed in school and in life. 
            </p>
          </div>
        </div>

        <div className="row mt-n5">
          <div className="col-sm-12 col-lg-4 p-3">
            <Card>
              <Card.Img variant="top" src="/images/me.jpg" />
              <Card.Body>
                <Card.Title>Savon</Card.Title>
                <Card.Text>
                  I'm a firm believer that all students deserve extra attention
                  outside of school to help them understand the subject matter
                  better.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-lg-4 p-3">
            <Card>
              <Card.Img variant="top" src="/images/user_placeholder.jpg" />
              <Card.Body>
                <Card.Title>Dustin</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-sm-12 col-lg-4 p-3">
            <Card>
              <Card.Img variant="top" src="/images/user_placeholder.jpg" />
              <Card.Body>
                <Card.Title>Simon</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <a href="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
