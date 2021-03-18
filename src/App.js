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
import About from "./pages/about";
import HowItWorks from "./pages/how-it-works";
import Contact from "./pages/contact";
import PageNotFound from "./pages/404-page-not-found";

// Import resources
import "./App.css";

function App() {
  return (
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
            {/* The following is the mechanism that chooses which page to load. */}
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
              <Route path="*" component={PageNotFound} />
            </Switch>
          </BrowserRouter>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
