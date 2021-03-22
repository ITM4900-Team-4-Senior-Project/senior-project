import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="left-side">
        {/* Dropdown Menu */}
        <h6>Search/Filter Results:</h6>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropbox-toggle"
            type="button"
            id="dropdownMenuButton1"
            datad-bs-toggle="dropdown"
            aria-expanded="false"
          >
            All subjects:
          </button>
        </div>
        <br />

        {/* Availability checkbox */}
        <h6>Availability:</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Monday
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Tuesday
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Wednesday
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Thursday
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Friday
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Saturday
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Sunday
          </label>
        </div>
        <br />

        {/* Sex checkbox */}
        <h6>Sex:</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Male
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Female
          </label>
        </div>
        <br />

        {/* Teaching method checkbox */}
        <h6>Method</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Online
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            In-Person
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          ></input>
          <label className="form-check-label" for="flexCheckDefault">
            Both
          </label>
        </div>
        <br />

        {/* Distance dropbox*/}
        <h6>Distance:</h6>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropbox-toggle"
            type="button"
            id="dropdownMenuButton1"
            datad-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Within:
          </button>
        </div>
        <br />
      </div>

      {/* Search Result */}
      <div className="right-side">
        <div id="search-results">
          <div class="card-search mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="../images/me.jpg" alt="savon-img" />
                <p>Xuan Huynh</p>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    I've been tutoring for 5 years, all with Happy Homework
                    Helpers. I have a degree in IT Management and enjoy tutoring
                    students so they can achieve their full potential.
                  </p>
                  {/* <!-- Star rating --> */}
                  {/* <p
                    class="card=text"
                    style="float: left; width: 40%; margin-left: 30px;"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-star-half"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                    </svg>
                    4.8 (200)
                    <br />
                    200 students tutored
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="quote">
        <blockquote>
          <h3>
            Education is the passport to the future, for tomorrow belongs to
            people who prepare for it today.
          </h3>
        </blockquote>
      </div>

      {/* Testimonial carousel */}
      <div className="testimonial">
        <div
          id="testimonial-controls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h4 className="reviews">
                Happy Homework Helpers is so much more affordable compared to
                similar tutoring services. Granted, they only offer three
                subjects but these are core subjects.
              </h4>
              <img className="testimonial-img" src="images/me.jpg" alt="" />
              <br />
              <em>Xuan, Lino Lakes, MN</em>
            </div>

            <div className="carousel-item">
              <h4 className="reviews">
                This company definitely understands the importance of education
                versus doing something solely for profit. If you want affordable
                prices without sacrificing quality, then Happy Homework Helpers
                is the the right choice for you.
              </h4>
              <img className="testimonial-img" src="images/me.jpg" alt="" />
              <br />
              <em>Dustin, Good Earth, MN</em>
            </div>

            <div className="carousel-item">
              <h4 className="reviews">
                Tim was a great tutor for my child. He took his time to
                understand my child's struggles with math and created a learning
                plan that made it fun and exciting. His enthusiasm is second to
                none.
              </h4>
              <img className="testimonial-img" src="images/me.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
