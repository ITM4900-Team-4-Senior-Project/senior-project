import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedinIn, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'

import './Footer.css'

const Footer = () => {
  return (
    <footer>

      <div className="grid-container">

        <div className="grid-container--region-left">
          <div className="footer-section footer-section--contact">

            <div className="newsletter">
              <h3 className="newsletter-heading">Join our Newsleter</h3>
              <p>Sign up to receive a monthly email on the latest Happy Homework Helpers platform updates, features, and news!</p>
              <a href="/news-letter" className="newletter-signup--link fs-3">Sign up <FontAwesomeIcon icon={faChevronRight} /></a>
            </div>

            <div className="brand">
              <div className="company">
                <img
                  src="/images/hhh-logo.png"
                  alt="Happy Homework Helpers' logo"
                  height="40px"
                  width="40px"
                  className="hhh-logo"/> {'  '}
                <span className="footer-section--company-title h2">
                  Happy Homework Helpers
                </span>
              </div>

              <div className="copyright">
                <div>&copy; 2021 Happy Homework Helpers.</div>
                <div>A product of Team4. All rights reserved.</div>
              </div>

              <div className="social-links link-list">
                <nav>
                  <ul>
                    <li>
                      <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookSquare}/>{' '}Facebook</a>
                    </li>
                    <li>
                      <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitterSquare}/>{' '}Twitter</a>
                    </li>
                    <li>
                      <a href="https://linkedin.com"><FontAwesomeIcon icon={faLinkedinIn}/>{' '}LinkedIn</a>
                    </li>
                    <li>
                      <a href="https://youtube.com"><FontAwesomeIcon icon={faYoutube}/>{' '}YouTube</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>


            </div>
        </div>

        <div className="grid-container--region-right">
          <div className="footer-section footer-section--legal">

            <div className="sitemap">
              <h3>Sitemap</h3>
              <nav className="link-list--vertical">
                <ul>
                  <li><a href="">Sign Up</a></li>
                  <li><a href="">How it Works</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Contact</a></li>
                  <li><a href="">FAQ</a></li>
                </ul>
              </nav>
            </div>

            <div className="legalese">
              <h3>Career Interests</h3>
              <nav className="link-list--vertical">
                <ul>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Culture</a></li>
                  <li><a href="">Job Board</a></li>
                </ul>
              </nav>
            </div>

          </div>
        </div>

      </div>

      <div className="site-attribution">
        <span>Made with <FontAwesomeIcon icon={faHeart} /> by Team4.</span>
      </div>

    </footer>
  )
}

export default Footer
