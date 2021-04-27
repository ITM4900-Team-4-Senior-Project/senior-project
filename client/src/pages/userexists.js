// Import necessary packages
import { Helmet } from 'react-helmet'
import { Nav } from 'react-bootstrap'

const UserExists = () => {
  return (
    <div>
      {/* This changes the page title in the browser tab. */}
      <Helmet>
        <title>Happy Homework Helpers | Email Exists</title>
      </Helmet>
      <h1>That Email Is Already In Use</h1>
      <div className="page-not-found--wrapper">
        <h2>Please Try a New Email</h2>
        <p>Or Login with your existing account</p>
        <Nav.Link className="dropdown-item" href="/signup">Go Back to Signup Page</Nav.Link>
      </div>
    </div>
  )
}

export default UserExists
