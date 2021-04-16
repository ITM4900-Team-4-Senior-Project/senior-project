import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";
import { Carousel, Dropdown, DropdownButton, Form, Container } from "react-bootstrap";
import SubjectList from "../components/SubjectList";

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
              <strong>Gender:</strong>
            </h6>
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
                    src="images/tutor2.jpeg"
                    alt="savon-img"
                  />
                  <p className="search-name-card">Michelle Kingston</p>
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
                    src="images/tutor1.jpeg"
                    alt="savon-img"
                  />
                  <p className="search-name-card">Nina Crookston</p>
                  <Link to="/search" className="btn btn-primary">
                    Book Now
                  </Link>
                </div>
                <div className="col-md-8">
                  <div className="search-card-body">
                    <p className="search-card-text">
                      I have a degree in Computer Science with a minor in
                      Cybersecurity. I have been tutoring for about 3 years and
                      I absolutely love it. It's invigorating seeing students
                      being able to comprehend the schoolwork where they
                      otherwise I had before.{" "}
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
        <h1 className="reviews-header">Testimonials</h1>
        <Carousel>
          <Carousel.Item>
            <p className="carousel-text">
              My child was struggling with math. Happy Homework Helpers did a
              great job of filling the void and helped him raise his grade
              dramatically. Thank you for all your help.
            </p>
            <img
              className="review-img d-block w-10"
              src="images/review1.jpeg"
              alt="First slide"
            />
            <em>
              Jane Nguyen <br />
              Blaine, Minnesota
            </em>
          </Carousel.Item>

          <Carousel.Item>
            <p className="carousel-text">
              Happy Homework Helpers has been a Godsend. The tutors are
              top-notch and are very good at their jobs. I would highly
              recommend any parent that's on the fence about using a tutoring
              service.
            </p>
            <img
              className="review-img d-block w-10"
              src="images/review2.jpeg"
              alt="First slide"
            />
            <em>
              Julia Child <br />
              Cookstown, MN
            </em>
          </Carousel.Item>

          <Carousel.Item>
            <p className="carousel-text">
              I can't wait to reach out to Happy Homework Helpers for their tutoring services when I'm older.
              I can only imagine how much helpful they'll be with all my school needs. 
            </p>
            <img
              className="review-img d-block w-10"
              src="images/review3.jpeg"
              alt="First slide"
            />
            <em>
              Baby Simon <br />
              To Be Determined, Earth
            </em>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Search;
