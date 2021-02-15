import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#how-it-works">How it Works</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation