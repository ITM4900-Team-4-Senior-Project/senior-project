import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Stars from "/Users/savon-h/Desktop/Projects/senior-project/src/components/Stars/index.js";
import { Carousel, Dropdown, DropdownButton, Form } from "react-bootstrap";

const Search = () => {
  return (
    <div className="searchPage-wrapper">
      {/* This changes the page title in the browser tab. */}
      <Helmet>
        <title>Happy Homework Helpers | Search</title>
      </Helmet>

      <div className="container-wrapper">
        {/* Left side of page */}
        <div id="left-side">
          {/* Dropdown menu for subjects */}
          <DropdownButton
            id="subject-dropdown dropdown-basic-button"
            title="Filter Subjects: "
          >
            <Dropdown.Item href="#/action-1">Math</Dropdown.Item>
            <Dropdown.Item href="#/action-2">English</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Science</Dropdown.Item>
          </DropdownButton>
          <br />

          

          {/* Tutor gender preference */}
          <div id="gender-preference">
            <h6>
            <strong>Gender:</strong></h6>
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Male`}
                  />
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Female`}
                  />
                </div>
              ))}
            </Form>
          </div>
          <br />

          {/* Tutoring methods preference */}
          <h6>
            <strong>Method:</strong>
          </h6>

          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Online`}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`In-Person`}
                />
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`Hybrid`}
                />
              </div>
            ))}
          </Form>
          <br />

          {/* Distance preference */}
          <h6>
            <strong>Distance:</strong>
          </h6>
          <DropdownButton id="dropdown-basic-button" title="Within: ">
            <Dropdown.Item href="#/action-1">15 miles</Dropdown.Item>
            <Dropdown.Item href="#/action-2">25 miles</Dropdown.Item>
            <Dropdown.Item href="#/action-3">50 miles</Dropdown.Item>
          </DropdownButton>
        </div>

        {/* Right side of page */}
        <div id="right-side">
          <div className="search-results">
            <div className="results-card card mb-3">
              <div className="results-row row g-0">
                <div className="col-md-4">
                  <img
                    className="search-img"
                    src="images/me.jpg"
                    alt="savon-img"
                  />
                  <p className="search-name-card">Xuan Huynh</p>
                  <Link to="/search" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="search-card-body">
                    <p className="search-card-text">
                      I have a degree in IT Management. I've been tutoring for
                      over 5 years with Happy Homework Helpers. I enjoy tutoring
                      and seeing students succeed in school and prepare them for
                      life.{" "}
                    </p>
                    <Stars />
                    <p class="search-card-rating">
                      <medium class="text-muted">
                        4.5 (200)
                        <br />
                        200 students tutored
                      </medium>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="search-results">
            <div className="results-card card mb-3">
              <div className="results-row row g-0">
                <div className="col-md-4">
                  <img
                    className="search-img"
                    src="images/john doe.png"
                    alt="savon-img"
                  />
                  <p className="search-name-card">Xuan Huynh</p>
                  <Link to="/search" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="search-card-body">
                    <p className="search-card-text">
                      I have a degree in Computer Science with a minor in Cybersecurity. I have been tutoring for 
                      about 3 years and I absolutely love it. It's invigorating seeing students being able to 
                      comprehend the schoolwork where they otherwise I had before.{" "}
                    </p>
                    <Stars />
                    <p class="search-card-rating">
                      <medium class="text-muted">
                        4.7 (32)
                        <br />
                        75 students tutored
                      </medium>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div id="testimonials">
        <Carousel>
          <Carousel.Item>
            <p className="carousel-text">
              My child was struggling with math. Happy Homework Helpers did a
              great job of filling the void and helped him raise his grade
              dramatically. Thank you for all your help.
            </p>
            <img
              className="review-img d-block w-10"
              src="images/me.jpg"
              alt="First slide"
            />
            <em>Savon Huynh, Minnesota</em>
          </Carousel.Item>

          <Carousel.Item>
            <p className="carousel-text">
              Happy Homework Helpers has been a Godsend. The tutors are
              top-notch and are very good at their jobs. I would highly
              recommend any parents that are on the fence about using a tutoring
              service.
            </p>
            <img
              className="review-img d-block w-10"
              src="images/john doe.png"
              alt="First slide"
            />
            <em>Simon, React</em>
          </Carousel.Item>

          <Carousel.Item>
            <p className="carousel-text">
              This tutoring service is by far the most affordable tutoring
              service. They understand parents should not have to break the bank
              to help their child succeed in school. Thank you Happy Homework
              Helpers from a happy parent.
            </p>
            <img
              className="review-img d-block w-10"
              src="images/john doe 2.png"
              alt="First slide"
            />
            <em>Dustin, Bootstrap</em>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Search;
