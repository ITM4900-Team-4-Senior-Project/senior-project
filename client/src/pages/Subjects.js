import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import SubjectList from '../components/SubjectList'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import SubjectAdd from '../components/SubjectList/subjectAdd'


const Subjects = () => {
  return (
    <div>
      <Helmet>
        <title>Happy Homework Helpers | Subject List</title>
      </Helmet>
      
      <Hero title="Subject List" text="A list of all the subjects currently available for tutoring" float="right" imageURL="/images/subjects_hero.jpg" />

      <div className="container subject-content--wrapper">
        <Tabs defaultActiveKey="subject-list" id="subject-listing">
          <Tab eventKey="subject-list" title="Overview">
          <h2>Subject List Overview</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati quisquam enim beatae in repudiandae, quos rem doloremque ex.</p>
            <SubjectList /> 
          </Tab>
          <Tab eventKey="subject-add" title="Add">
            <h2>Add a New Subject</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati quisquam enim beatae in repudiandae, quos rem doloremque ex.</p>
            <SubjectAdd />
          </Tab>
          <Tab eventKey="subject-delete" title="Delete">
          <h2>Delete an Existing Subject</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit obcaecati quisquam enim beatae in repudiandae, quos rem doloremque ex.</p>
            <SubjectList />
          </Tab>
        </Tabs>
      </div>

    </div>
  )
}

export default Subjects
