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

app.get('/', (req, res) => {
  req = 'SELECT * FROM senior_project.user_role;'
  res.send('SELECT * FROM senior_project.user_role;')
})

app.post('/api/set', (req, res) => {

})

app.listen(port, () => {
  console.log(
    `Senior Project DB ... [RUNNING]`
  )
})