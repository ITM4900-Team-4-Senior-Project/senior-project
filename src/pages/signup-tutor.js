// Import necessary packages
import { Helmet } from 'react-helmet'

import { Button, Form, Col, Nav } from 'react-bootstrap'

const SignupTutor = () => {
  return (
    <div className="my-2">
      <Helmet>
        <title>Happy Homework Helpers | Tutor Signup</title>
      </Helmet>
      <h1>Sign Up To Be a Tutor</h1>
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
          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Primary Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Primary Address 2</Form.Label>
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

        <Form.Row className="align-items-center">
          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>
              Phone Number
            </Form.Label>
              <Form.Control placeholder="First Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridType">
            <Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect">
              Select Availability
            </Form.Label>
              <Form.Control
                as="select"
                className="mr-sm-2"
                id="inlineFormCustomSelect"
                custom
              >
                <option value="0">Choose...</option>
                <option value="1">Online Only</option>
                <option value="2">In Person Only</option>
                <option value="3">Online and In Person</option>
              </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row className="align-items-center">
            <Form.Group as={Col} controlId="subjectForm.ControlSelect">
                <Form.Label>Subject Specialties (Hold Ctrl to Select Multiple)</Form.Label>
                    <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="entyrForm.ControlTextarea">
                <Form.Label>Tell Us Why You Would be a Good Fit (Experience, Education, Background, etc.)</Form.Label>
                    <Form.Control as="textarea" rows={3} />
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

export default SignupTutor
