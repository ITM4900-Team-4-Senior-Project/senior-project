const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()

// Connect to MySQL database
const db_connection = mysql.createConnection({
  host: 'localhost',
  user: 'db_user',
  password: 'Testing123!',
  database: 'senior_project'
})

// Enable all CORS requests
app.use(cors())

// Parse application/json
app.use(express.json())

// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// This get request will return all records from the subject table.
app.get('/api/subjects', (rquire, response) => {
  
  const SELECT_ALL = "SELECT * FROM subject;"

  db_connection.query(SELECT_ALL, (error, result) => {
    if (error) {
      console.log("Error: ", error)
      return
    }
    response.send(result)
  })
})

// Adds subjects
app.post('/api/subjects/add', (require, response) => {

  const subjectTitle = require.body.subject_title
  const subjectDescription = require.body.subject_description
  const subjectLevel = require.body.subject_level

  const SUBJECT_ADD = "INSERT INTO subject (subject_title, subject_description, subject_level) VALUES (?,?,?)"

  db_connection.query(SUBJECT_ADD, [subjectTitle, subjectDescription, subjectLevel], (error, result) => {
    if (error) {
      console.log("Error: ", error)
      return
    }
    response.send(result)
  })

})

// This get request will return all tutor records from the user table.
app.get('/api/user', (request, response) => {
  
  const selectAll = "select * from user where user_role = 2;"

  db_connection.query(selectAll, (err, result) => {
    if (err) {
      console.log("Error: ", err)
      return
    }
    response.send(result)
  })
})

// Listening for errors
app.listen(3030, (error) => {
  if (error) {
    console.log("Error: ", error)
    return
  }
  console.log("Senior Project DB ... [RUNNING]")
})