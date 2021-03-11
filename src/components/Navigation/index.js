import { React, useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap'

function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="login_button shadow-none" variant="primary" onClick={handleShow}>
                Login/Register
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <a class="dropdown-item" href="#">New? Register an Account</a>
                    <a class="dropdown-item" href="#">Forgot password?</a>
                    <Button variant="primary" onClick={handleClose}>
                        Login
                    </Button>
                    <Button variant="Secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

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
                    <Login />
                <Nav>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation