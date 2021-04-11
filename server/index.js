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
app.get('/api/subjects', (request, response) => {
  
  const selectAll = "select * from subject;"

  db_connection.query(selectAll, (err, result) => {
    if (err) {
      console.log("Error: ", err)
      return
    }
    response.send(result)
  })
})


app.listen(3030, (err) => {
  if (err) {
    console.log("Error: ", err)
    return
  }
  console.log("Senior Project DB ... [RUNNING]")
})