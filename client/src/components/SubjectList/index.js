import { useState, useEffect } from 'react' 
import axios from 'axios'

const SubjectList = () => {

  const url = "http://localhost:3030/api/subjects"
  const [data, setData] = useState(null)

  let content = null

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data)
      })
  }, [url])

  // If data can be retrived do something with it
  if (data) {
    content = 
    <div className="subject-listing--wrapper">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col" className="subject-listing--subject-title">Subject Title</th>
            <th scope="col" className="subject-listing--subject-description">Subject Description</th>
            <th scope="col" className="subject-listing--subject-level">Subject Level</th>
          </tr>
        </thead>
        <tbody>

          {/* Process the data object returned by the subject api */}
          {data.map((subject, index) => (
            <tr data-index={index} data-subject-level={subject.subject_level}>
              <td>{subject.subject_title}</td>
              <td>{subject.subject_description}</td>
              <td>{subject.subject_level}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  }

  // Return data. This will be null if no content is retrieved.
  return (
    <div>
      {content}
    </div>
  )
  
}

export default SubjectList