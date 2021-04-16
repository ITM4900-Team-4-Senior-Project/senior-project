import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../components/Hero'
import SubjectList from '../components/SubjectList'

const Subjects = () => {
  return (
    <div>
      <Helmet>
        <title>Happy Homework Helpers | Subject List</title>
      </Helmet>
      
      <Hero title="Subject List" text="A list of all the subjects currently available for tutoring" float="right" imageURL="/images/subjects_hero.jpg" />

      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <SubjectList />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Subjects
