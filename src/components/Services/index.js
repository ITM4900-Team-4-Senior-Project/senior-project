const Services = () => {
  return (
    <service>
      <div className="header-title">
        <h3 className="service-subject-header">SERVICES</h3>
        <hr className="service-hr" />
        <p className="service-description">
          Below is a list of our super affordable rates per subject. Book your
          tutor today.
        </p>
      </div>
          {/* comments */}
          {/* Here's a comment from Dustin */}
      <div className="service-row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="images/calculator.jpg"
              className="card-img-top"
              alt="calculator-img"
            />
            <div className="card-body">
              <h4 className="card-title">MATH</h4>
              <p className="card-text">$15/hour</p>
              <a href="filter.html" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img
              src="images/english.jpg"
              className="card-img-top"
              alt="english-img"
            />
            <div className="card-body">
              <h4 className="card-title">ENGLISH</h4>
              <p className="card-text">$12/hour</p>
              <a href="filter.html" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100">
            <img
              src="images/science.jpg"
              className="card-img-top"
              alt="science-img"
            />
            <div className="card-body">
              <h4 className="card-title">SCIENCE</h4>
              <p className="card-text">$12/hour</p>
              <a href="filter.html" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </service>
  );
};

export default Services;
