// Import necessary packages
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Service = () => {
  return (
    <div>
      {/* This changes the page title in the browser tab. */}
      <Helmet>
        <title>Happy Homework Helpers | Service</title>
      </Helmet>
      {/* The following will added appear on the /service page. */}
      <div id="services">
        <div className="header-title">
          <h3 className="service-subject-header">SERVICES</h3>
          <hr className="service-hr" />
          <p className="service-description">
            Below is a list of our super affordable rates per subject. Book your
            tutor today.
          </p>
        </div>
        <div className="card-deck">
          <div className="card service-box">
            <img
              className="card-img-top"
              src="images/calculator.jpg"
              alt="math-img"
            />
            <div className="card-block">
              <h3 className="card-subject">MATH</h3>
              <p className="card-price">$15/hr</p>
              <Link to="/search" className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>

          <div className="card service-box">
            <img
              className="card-img-top"
              src="images/english.jpg"
              alt="english-img"
            />
            <div className="card-block">
              <h3 className="card-subject">ENGLISH</h3>
              <p className="card-price">$12/hr</p>
              <Link to="/search" className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>

          <div class="card service-box">
            <img
              className="card-img-top"
              src="images/science.jpg"
              alt="science-img"
            />
            <div className="card-block">
              <h3 className="card-subject">SCIENCE</h3>
              <p className="card-price">$12/hr</p>
              <Link to="/search" className="btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
