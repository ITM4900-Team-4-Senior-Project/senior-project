import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { Navbar, Nav, Button } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="none" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/how-it-works">How it Works</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="pricing">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="secondary">Login/Register</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation