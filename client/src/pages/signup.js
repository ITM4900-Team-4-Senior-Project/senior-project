// Import necessary packages
import { Helmet } from 'react-helmet'

import { Button, Form, Col, Nav } from 'react-bootstrap'

const Signup = () => {
  return (
    <div className="my-2 mx-3">
      <Helmet>
        <title>Happy Homework Helpers | Signup</title>
      </Helmet>
      <h1>Sign Up For Happy Homework Helpers</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Last Name" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
              <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option value="0">Choose...</option>
                <option value="AL">Alabama</option>
	              <option value="AK">Alaska</option>
	              <option value="AZ">Arizona</option>
	              <option value="AR">Arkansas</option>
	              <option value="CA">California</option>
	              <option value="CO">Colorado</option>
	              <option value="CT">Connecticut</option>
	              <option value="DE">Delaware</option>
	              <option value="DC">District Of Columbia</option>
	              <option value="FL">Florida</option>
	              <option value="GA">Georgia</option>
	              <option value="HI">Hawaii</option>
	              <option value="ID">Idaho</option>
	              <option value="IL">Illinois</option>
	              <option value="IN">Indiana</option>
	              <option value="IA">Iowa</option>
	              <option value="KS">Kansas</option>
	              <option value="KY">Kentucky</option>
	              <option value="LA">Louisiana</option>
	              <option value="ME">Maine</option>
	              <option value="MD">Maryland</option>
	              <option value="MA">Massachusetts</option>
	              <option value="MI">Michigan</option>
	              <option value="MN">Minnesota</option>
	              <option value="MS">Mississippi</option>
	              <option value="MO">Missouri</option>
	              <option value="MT">Montana</option>
	              <option value="NE">Nebraska</option>
	              <option value="NV">Nevada</option>
	              <option value="NH">New Hampshire</option>
	              <option value="NJ">New Jersey</option>
	              <option value="NM">New Mexico</option>
	              <option value="NY">New York</option>
	              <option value="NC">North Carolina</option>
	              <option value="ND">North Dakota</option>
	              <option value="OH">Ohio</option>
	              <option value="OK">Oklahoma</option>
	              <option value="OR">Oregon</option>
	              <option value="PA">Pennsylvania</option>
	              <option value="RI">Rhode Island</option>
	              <option value="SC">South Carolina</option>
	              <option value="SD">South Dakota</option>
	              <option value="TN">Tennessee</option>
	              <option value="TX">Texas</option>
	              <option value="UT">Utah</option>
	              <option value="VT">Vermont</option>
	              <option value="VA">Virginia</option>
	              <option value="WA">Washington</option>
	              <option value="WV">West Virginia</option>
	              <option value="WI">Wisconsin</option>
	              <option value="WY">Wyoming</option>
              </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
              <Form.Control />
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
