// Import packages
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Import components
import { Container } from 'react-bootstrap'

import Brand from './components/Brand'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// Import page routes
import Home from './pages/home'
import Service from './pages/service'
import Search from './pages/search'
import About from './pages/about'
import HowItWorks from './pages/how-it-works';
import Contact from './pages/contact';
import PageNotFound from './pages/404-page-not-found';
import Signup from './pages/signup';
import SignupTutor from './pages/signup-tutor';
import Subjects from "./pages/Subjects";

// Import resources
import './App.css'

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
              <Route path="/search" component={Search} />
              <Route path="/signup" component={Signup} />
              <Route path="/signup-tutor" component={SignupTutor} />
              <Route path="/subjects" component={Subjects} />
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
