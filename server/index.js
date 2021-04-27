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

// Adds user
app.post('/api/user/add', (require, response) => {

  const userFirstName = require.body.first_name
  const userLastName = require.body.last_name
  const userEmail = require.body.email
  const userZIP = require.body.user_geo_code
  const userRole = require.body.user_role
  const userPassword = require.body.password

db_connection.query("SELECT COUNT(*) AS cnt FROM user WHERE email = ? " , 
userEmail , function(error, data){
       if(data[0].cnt > 0){
         // User exists throw error  
        console.log("User Exists", error)
       }else{
        // Success user will insert 
        const USER_ADD = "INSERT INTO user (first_name, last_name, email, user_geo_code, user_role, password) VALUES (?,?,?,?,?,?)"

        db_connection.query(USER_ADD, [userFirstName, userLastName, userEmail, userZIP, userRole, userPassword], (error, result) => {
          if (error) {
            console.log("Error: ", error)
            return
                     }
            response.send(result)
                   })
               }
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