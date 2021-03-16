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
      <div className="card-deck">
        <div class="card">
          <img
            className="card-img-top"
            src="images/calculator.jpg"
            alt="math-img"
          />
          <div class="card-block">
            <h3 class="card-title">MATH</h3>
            <p class="card-text">$15/hr</p>
            <a href="filter.html" className="btn btn-primary">
              Book Now
            </a>
          </div>
        </div>

        <div class="card">
          <img
            className="card-img-top"
            src="images/english.jpg"
            alt="english-img"
          />
          <div class="card-block">
            <h3 class="card-title">ENGLISH</h3>
            <p class="card-text">$12/hr</p>
            <a href="filter.html" className="btn btn-primary">
              Book Now
            </a>
          </div>
        </div>

        <div class="card">
          <img
            className="card-img-top"
            src="images/science.jpg"
            alt="science-img"
          />
          <div class="card-block">
            <h3 class="card-title">SCIENCE</h3>
            <p class="card-text">$12/hr</p>
            <a href="filter.html" className="btn btn-primary">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </service>
  );
};

export default Services;
