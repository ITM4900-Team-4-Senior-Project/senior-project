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

      <Container>
        <main>Body</main>
      </Container>

      <Footer />

    </div>
  )
}

export default App;
