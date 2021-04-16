// Import necessary packages
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      {/* This changes the page title in the browser tab. */}
      <Helmet>
        <title>Happy Homework Helpers | Contact</title>
      </Helmet>
      <h1>Contact Us</h1>
      <div className="about-us">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextArea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
