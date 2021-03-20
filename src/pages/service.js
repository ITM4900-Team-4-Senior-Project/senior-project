// Import necessary packages
import { Helmet } from "react-helmet";

const Service = () => {
  return (
    <div>
      {/* This changes the page title in the browser tab. */}
      <Helmet>
        <title>Happy Homework Helpers | Service</title>
      </Helmet>
      <service>
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
              <h3 className="card-title">MATH</h3>
              <p className="card-text">$15/hr</p>
              <a href="search.js" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>

          <div className="card service-box">
            <img
              className="card-img-top"
              src="images/english.jpg"
              alt="english-img"
            />
            <div className="card-block">
              <h3 className="card-title">ENGLISH</h3>
              <p className="card-text">$12/hr</p>
              <a href="search.js" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>

          <div class="card service-box">
            <img
              className="card-img-top"
              src="images/science.jpg"
              alt="science-img"
            />
            <div className="card-block">
              <h3 className="card-title">SCIENCE</h3>
              <p className="card-text">$12/hr</p>
              <a href="search.js" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </service>
    </div>
  );
};

export default Service;
