// Import packages
// import { BrowserRouter as Router } from 'react-router-dom';

// Import components
import Navigation from './components/Navigation'
import Brand from './components/Brand'
import { Container } from 'react-bootstrap'

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
    </div>
  )
}

export default App;
