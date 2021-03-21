// Import packages
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Import components
import { Container } from "react-bootstrap";

import Brand from "./components/Brand";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Import page routes
import Home from "./pages/home";
import Service from "./pages/service";
import About from "./pages/about";
import HowItWorks from "./pages/how-it-works";
import Contact from "./pages/contact";
import PageNotFound from "./pages/404-page-not-found";

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
            <Container>
              <Navigation />
            </Container>
          </div>

        </header>

        <main>
          {/* Main body container. Ad, fluid="true" to make it full-width */}
=======
    <div className="App">
      <header>
        <div className="brand-container">
>>>>>>> xuan
          <Container>
            <Brand />
          </Container>
        </div>

        <div className="navigation-container topnav">
          <Container>
            <Navigation />
            {/* The following is the mechanism that chooses which page to load. */}
<<<<<<< HEAD
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/how-it-works" component={HowItWorks} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={PageNotFound} />
              </Switch>
            </Router>
          </Container>
        </main>

        <Footer />

      </div>

  )
=======
          </Container>
        </div>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </header>

      <main>
        {/* <Brand /> */}
        <Container fluid="true">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/how-it-works" component={HowItWorks} />
              <Route path="/contact" component={Contact} />
              <Route path="/service" component={Service} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </Container>
      </main>
      <Footer />
    </div>
  );
>>>>>>> xuan
}

export default App;
