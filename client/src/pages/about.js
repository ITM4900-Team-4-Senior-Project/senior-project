// Import necessary packages
import { Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import Hero from '../components/Hero'

const About = () => {

  return (
    <div>
      {/* This changes the page title in the browser tab. */}
      <Helmet>
        <title>Happy Homework Helpers | About</title>
      </Helmet>
      
      <Hero title="About Us" text="I am a mission statement! and a bunch of things to talk about. yay!" imageURL="/images/library_1920x1080.jpg"/>
      
      <div className="container mt-5">

        <div className="row">
          <div className="col">
            <div className="text-center">
              <h2>Value Statement</h2>
              <p className="mt-3">Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2>Meet the Team</h2>
            <p>Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="row mt-n5">

          <div className="col-sm-12 col-lg-4 p-3">
            <Card>
              <Card.Img variant="top" src="/images/user_placeholder.jpg" />
              <Card.Body>
                <Card.Title>Savon</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
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
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>

        <div className="row">
          <div className="col"><a href="/contact" className="btn btn-primary btn-lg">Contact Us</a></div>
        </div>

      </div>

    </div>
  )
}

export default About
