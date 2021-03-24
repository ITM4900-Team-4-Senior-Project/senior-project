// Import necessary packages
import { Helmet } from 'react-helmet'

import { Button, Form, Col} from 'react-bootstrap'

const Signup = () => {
  return (
    <div className="my-2">
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
            <Form.Label>First Name (Student)</Form.Label>
              <Form.Control placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name (Student)</Form.Label>
              <Form.Control placeholder="Last Name" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
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
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
              <Form.Control />
          </Form.Group>
        </Form.Row>

        <Form.Row className="align-items-center">
          <Form.Group as={Col} controlId="formGridGrade">
            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
              Grade Level
            </Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">Choose...</option>
                <option value="1">4</option>
                <option value="2">5</option>
                <option value="3">6</option>
                <option value="4">7</option>
                <option value="5">8</option>
              </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>
              First Name (Parent)
            </Form.Label>
              <Form.Control placeholder="First Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>
                Last Name (Parent)
              </Form.Label>
                <Form.Control placeholder="Last Name" />
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
