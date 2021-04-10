const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3030;
const mysql = require('mysql')

// Connect to MySQL database
const db_connection = mysql.createConnection({
  host: 'localhost',
  user: 'db_user',
  password: 'Testing123!',
  database: 'senior_project'
})


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/subjects', (request, response) => {
  const insertStatement = "insert into subject (subject_title, subject_level, subject_description) values ('Biology III', 'Advanced', 'Not for begginners Biology')"
  db_connection.query(insertStatement, (err, result) => {
    response.send("Inserted Complete!")
  })
})


app.listen(port, () => {
  console.log(
    `Senior Project DB ... [RUNNING]`
  )
})