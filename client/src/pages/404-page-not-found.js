// Import necessary packages
import { Helmet } from 'react-helmet'

const PageNotFound = () => {
  return (
    <div>
      {/* This changes the page title in the browser tab. */}
      <Helmet>
        <title>Happy Homework Helpers | 404; Page Not Found</title>
      </Helmet>
      <h1>404; Page Not Found</h1>
      <div className="page-not-found--wrapper">
        <img src="/images/404_page-not-found.svg" />
        <h2>Sorry, not sorry!</h2>
        <p>The page you are looking for doesn't exist.</p>
      </div>
    </div>
  )
}

export default PageNotFound
