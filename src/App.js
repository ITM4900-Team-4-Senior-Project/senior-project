// Import packages
// import { BrowserRouter as Router } from 'react-router-dom';

// Import components
import { Container } from 'react-bootstrap'

import Brand from './components/Brand'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

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
          </Container>
        </div>

      </header>

      <main>
        <Container fluid="true">
          <img
            src="/images/pencil-hero.jpg" alt=""/>
        </Container>
      </main>

      <Footer />

    </div>
  )
}

export default App;
