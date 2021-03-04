// import React from 'react'

import { Navbar, Nav, Button } from 'react-bootstrap'

const Brand = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="none" variant="light">
      <Navbar.Brand href="/">
        <img
          src="/images/hhh-logo.png"
          alt="Happy Homework Helpers' logo"
          height="40px"
          width="40px"
          className="hhh-logo"/> {'  '}
        <span className="brand-title">Happy Homework Helpers</span>
      </Navbar.Brand>
    </Navbar>
  )
}

export default Brand
