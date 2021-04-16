import { useState, useEffect } from 'react' 
import axios from 'axios'

const TutorList = () => {

  const url = "http://localhost:3030/api/user"
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
    <div>
      <h2 className="text-center">List of Tutors</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>

          {/* Process the data object returned by the user api */}
          {data.map((user, index) => (
            <tr data-index={index}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
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

export default TutorList