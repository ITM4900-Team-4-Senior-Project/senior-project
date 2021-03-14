// Import packages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import components
import { Container } from "react-bootstrap";

import Brand from "./components/Brand";
import Navigation from "./components/Navigation";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

// Import page routes
import Home from './pages/home'
import About from './pages/about'
import HowItWorks from './pages/how-it-works';
import Contact from './pages/contact';
import PageNotFound from './pages/404-page-not-found';

// Import resources
import "./App.css";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <header>
        <div className="brand-container">
          <Container>
            <Brand />
          </Container>
        </div>

        <div className="navigation-container topnav">
=======
    <Router>
      <div className="App">

        <header>
          <div className="brand-container">
            <Container>
              <Brand />
            </Container>
          </div>

          <div className="navigation-container topnav">
            <Container>
              <Navigation />
            </Container>
          </div>

        </header>

        <main>
          {/* Main body container. Ad, fluid="true" to make it full-width */}
>>>>>>> simon_nodejs-setup
          <Container>
            {/* The following is the mechanism that chooses which page to load. */}
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/how-it-works" component={HowItWorks} />
              <Route path="/contact" component={Contact} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Container>
<<<<<<< HEAD
        </div>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </header>

      <main>
        <Container fluid="true">
          <img src="/images/pencil-hero.jpg" alt="homepage-img" />
        </Container>
      </main>
      <MainSection />
      <Footer />
    </div>
  );
=======
        </main>

        <Footer />

      </div>

    </Router>
  )
>>>>>>> simon_nodejs-setup
}

export default App;
