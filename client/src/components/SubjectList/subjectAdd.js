import { useState, useEffect } from 'react' 
import axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SubjectAdd = () => {

  // Set some default states for data collection
  const [subjectTitle, setSubjectTitle] = useState('')
  const [subjectDescription, setSubjectDescription] = useState('')
  const [subjectLevel, setSubjectLevel] = useState('')

  // Set a default state for form validation
  const [validated, setValidated] = useState(false);

  // What should we do with a drunkin' sailor (i.e, web form)
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
        "http://localhost:3030/api/subjects/add", 
        {
          subject_title: subjectTitle, 
          subject_description: subjectDescription, 
          subject_level: subjectLevel
      })
    }
  };

  // Return data. This will be null if no content is retrieved.
  return (
    <div className="subject-listing">
      <Form 
        noValidate 
        onSubmit={handleSubmit}
        validated={validated}>

        <Form.Group controlId="formSubjectTitle">
          <Form.Label>Subject Title</Form.Label>
          <Form.Control
            onChange={(event) => {setSubjectTitle(event.target.value)}}
            required
            type="text" 
            placeholder="Enter the title of the subject you'd like to add" />
        </Form.Group>

        <Form.Group controlId="formSubjectDescription">
          <Form.Label>Subject Description</Form.Label>
          <Form.Control 
            onChange={(event) => {setSubjectDescription(event.target.value)}}
            required
            as="textarea" 
            rows={3} />
        </Form.Group>

        <Form.Group controlId="formSubjectLevel">
          <Form.Label>Subject Level</Form.Label>
          <Form.Control
            onChange={(event) => {setSubjectLevel(event.target.value)}}
            required
            as="select" 
            size="lg" custom>
              <option
                value="" 
                selected 
                disabled>Selection an Option</option> 
              <option>Beginner</option>
              <option>Intermidate</option>
              <option>Advanced</option>
              <option>Super Human</option>
          </Form.Control>
        </Form.Group>

        <Button 
          type="submit"
          variant="primary">
            Submit
        </Button>

      </Form>
    </div>
  )
  
}

export default SubjectAdd
