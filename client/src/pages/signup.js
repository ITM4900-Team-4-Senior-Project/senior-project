// Import necessary packages
import { Helmet } from 'react-helmet'

import { Button, Form, Col, Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react' 
import axios from 'axios'

const Signup = () => {

    // Set some default states for data collection
    const [userFirstName, setFirstName] = useState('')
    const [userLastName, setLastName] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userZIP, setZIP] = useState('')
    const [userRole, setRole] = useState('')
    const [userPassword, setPassword] = useState('')
  
    // Set a default state for form validation
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      // What does the form state contain
      const form = event.currentTarget;
      // Do a little validation
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      } else {
        setValidated(true);
        axios.post(
          "http://localhost:3030/api/user/add", 
          {
            first_name: userFirstName, 
            last_name: userLastName, 
            email: userEmail,
            user_geo_code: userZIP,
            user_role: userRole,
            password: userPassword
        })
      }
    };

  return (
    <div className="my-2 mx-3">
      <Helmet>
        <title>Happy Homework Helpers | Signup</title>
      </Helmet>
      <h1>Sign Up For Happy Homework Helpers</h1>
      <Form
        noValidate 
        onSubmit={handleSubmit}
        validated={validated}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              onChange={(event) => {setEmail(event.target.value)}}
              required
              type="email" 
              placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              onChange={(event) => {setPassword(event.target.value)}}
              required
              type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
              <Form.Control 
                onChange={(event) => {setFirstName(event.target.value)}}
                required
                placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
              <Form.Control 
                onChange={(event) => {setLastName(event.target.value)}}
                required
                placeholder="Last Name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridZIP">
            <Form.Label>ZIP Code</Form.Label>
              <Form.Control 
              onChange={(event) => {setZIP(event.target.value)}}
              required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRole">
            <Form.Label>Role</Form.Label>
              <Form.Control 
              onChange={(event) => {setRole(event.target.value)}}
              required
              as="select" defaultValue="Choose...">
                <option value="0">Choose...</option>
                <option value="1">Student</option>
	              <option value="2">Tutor</option>
	              <option value="3">Parent</option>
              </Form.Control>
          </Form.Group>
        </Form.Row>

          <Form.Group id="formGridCheckbox" className="mt-2">
            <Form.Check type="checkbox" label="Also Sign me Up for the Mailing List" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  )
}

export default Signup
